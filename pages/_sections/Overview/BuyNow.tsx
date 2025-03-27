import { useEffect, useRef, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import {
  fetchAllowance,
  fetchEthToToken,
  fetchIsBlack,
  fetchPresale,
  fetchPresaleId,
  fetchRaisedAmount,
  fetchTokenBal,
  fetchUsdToToken,
  fetchUSDTBal,
  fetchUserData,
} from "../../../hooks/useContractData";
import { wagmiConfig, web3Modal } from "../../_app";
import {
  erc20Abi,
  formatEther,
  formatUnits,
  parseEther,
  parseUnits,
} from "viem";
import { PresaleConfig } from "../../../config/presaleConfig";
import { toast } from "react-toastify";
import { presaleContractABI } from "../../../config/abi/presaleContractABI";
import {
  disconnect,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
import {
  calculateTokenPrice,
  formatLocalString,
  shortenAddress,
} from "../../utils";
import Link from "next/link";
import DisconnectIcon from "../../_components/Icons/Disconnect";
import { useTranslation } from "react-i18next";

export default function BuyNow() {
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });
  const progressRef = useRef(null);

  const { raisedAmount, onRaisedAmount } = fetchRaisedAmount();
  const { presaleId, currentPresale, onPresaleId } = fetchPresaleId();
  const { presale, onPresale } = fetchPresale();
  const { onEthToToken } = fetchEthToToken();
  const { onUsdToToken } = fetchUsdToToken();
  const { usdtBal, onUSDTBal } = fetchUSDTBal();
  const { tokenBal, onTokenBal } = fetchTokenBal();
  const { allowance, onAllowance } = fetchAllowance();
  const { userData, onUserData } = fetchUserData();
  const { isBL, onBL } = fetchIsBlack();

  const [price, setPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ethBal, setBal] = useState(0);
  const [selectToken, setSelectToken] = useState("eth");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isDepositloading, setDepositLoading] = useState(false);
  const [isApproveloading, setApproveLoading] = useState(false);
  const [delay, setDelay] = useState(0);

  const handleChange = async (e: any) => {
    const RE = /^\d*\.?\d{0,18}$/;
    if (e.target.value === ".") setFromAmount("0");
    if (RE.test(e.currentTarget.value)) {
      setFromAmount(e.target.value as any);
    }
  };

  const getContractData = async () => {
    onRaisedAmount();
    onPresaleId();

    if (address) {
      onUSDTBal(address);
      onAllowance(address);
      onBL(address);
      onTokenBal(address);
      onUserData(address);
      setBal(Number(data?.formatted));
    }
  };

  const handleBuy = async () => {
    if (!fromAmount || !Number(fromAmount)) {
      toast.error("Input valid amount!");
      return;
    }

    if (isBL) {
      toast.error("You can not buy this token!");
      return;
    }

    if (selectToken === "eth") {
      setDepositLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: "buyWithEth",
          value: parseEther(String(fromAmount)),
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log("data ==> ", res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success("Transaction complete!");

          getContractData();
          onPresale(currentPresale);
          setFromAmount("");
        }
      } catch (err: any) {
        console.log("err ==> ", err);
        if (!String(err).includes("User rejected the request.")) {
          toast.error("Transaction failed!");
        }
      }
      setDepositLoading(false);
    } else if (allowance < Number(fromAmount)) {
      setApproveLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: "approve",
          args: [
            PresaleConfig.presaleAddress as `0x${string}`,
            parseUnits(String(fromAmount), 6),
          ],
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log("data ==> ", res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success("Transaction complete!");

          getContractData();
        }
      } catch (err: any) {
        console.log("err ==> ", err);
        if (!String(err).includes("User rejected the request.")) {
          toast.error("Transaction failed!");
        }
      }
      setApproveLoading(false);
    } else {
      setDepositLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: "buyWithUSDT",
          args: [parseUnits(String(fromAmount), 6)],
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log("data ==> ", res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success("Transaction complete!");

          getContractData();
          onPresale(currentPresale);
          setFromAmount("");
        }
      } catch (err: any) {
        console.log("err ==> ", err);
        if (!String(err).includes("User rejected the request.")) {
          toast.error("Transaction failed!");
        }
      }
      setDepositLoading(false);
    }
  };

  const fetchToAmount = () => {
    if (!fromAmount) {
      setToAmount("");
    } else {
      try {
        if (selectToken === "eth") {
          onEthToToken(currentPresale, Number(fromAmount)).then((data) => {
            if (data) setToAmount(data.toFixed(2));
            else setToAmount("");
          });
        } else {
          onUsdToToken(currentPresale, Number(fromAmount)).then((data) => {
            if (data) setToAmount(data.toFixed(2));
            else setToAmount("");
          });
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    if (!fromAmount) {
      setToAmount("");
    }

    if (delay > 0) {
      setTimeout(() => {
        setDelay((prev) => prev - 1);
      }, 300);

      if (delay === 1) {
        fetchToAmount();
      }
    }
  }, [delay]);

  useEffect(() => {
    setDelay(3);
  }, [fromAmount]);

  useEffect(() => {
    getContractData();
    if (address) {
      setBal(Number(data?.formatted));
    }
  }, [, address]);

  useEffect(() => {
    if (currentPresale > 0) onPresale(currentPresale);
  }, [currentPresale]);

  useEffect(() => {
    if (presale) {
      setPrice(calculateTokenPrice(presale.price));
      setNextPrice(calculateTokenPrice(presale.nextStagePrice));

      const toSellAmount = formatUnits(
        presale.tokensToSell,
        PresaleConfig.tokenDecimal
      );
      const soldAmount = formatUnits(presale.Sold, PresaleConfig.tokenDecimal);
      setProgress((Number(soldAmount) / Number(toSellAmount)) * 100);
    }
  }, [presale]);

  useEffect(() => {
    if (!progressRef || !progressRef.current) return;
    (progressRef.current as any).style.width = `${Math.max(
      progress,
      55.71
    ).toFixed(2)}%`;
  }, [progress, progressRef]);

  return (
    <div className="card-box">
      <div className="card-content text-[10.28px] md:text-[15.05px]">
        <div className="flex flex-col items-center relative">
          <span className="text-[18.58px] md:text-[27.17px] font-bold">
            {t("buy_now")}
          </span>
          <span className="text-yellow text-[18.58px] md:text-[27.17px] font-bold">
            {t("before_price_rises")}
          </span>
        </div>
        <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
          <div
            className="progress-bar w-[0%] max-w-full transition-all duration-300 ease-in-out"
            ref={progressRef}
          ></div>
          <span className="absolute right-2 font-medium opacity-60">
            {(100 - (progress + 55.71)).toFixed(2)}% {t("left")}
          </span>
        </div>
        <div className="text-center w-full mt-1 flex flex-col">
          <span>
            {t("usd_raised_so_far")}: $
            {(parseInt(raisedAmount.toFixed()) + 195000).toLocaleString()}/$
            {formatLocalString(presale?.UsdtHardcap, 6)}
          </span>
          <span>
            {t("tokens_sold")}:
            {(
              parseInt(
                formatUnits(
                  presale?.Sold || BigInt(0),
                  PresaleConfig.tokenDecimal
                )
              ) + 27857143
            ).toLocaleString()}
            /
            {formatLocalString(
              presale?.tokensToSell,
              PresaleConfig.tokenDecimal
            )}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="opacity-35">{t("your_purchased_rtx")}</span>
          <span className="opacity-60">
            = {userData.claimableAmount.toLocaleString()}
          </span>
        </div>
        <div className="w-full">
          <div className="input w-full">
            <input className="w-full" value={`1 $RTX = $${price}`} readOnly />
            <span className="w-fit text-nowrap text-green">{`${t(
              "next_price"
            )}: $${nextPrice}`}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={
              "tab-btn w-full " + (selectToken === "eth" ? "active" : "")
            }
            onClick={() => {
              setSelectToken("eth");
              setFromAmount("");
            }}
          >
            <img
              className="size-[21.89px] md:size-[32px]"
              src="/images/token/eth-eth.png"
              alt="eth"
            />
            <span>ETH</span>
          </button>
          <button
            className={
              "tab-btn w-full " + (selectToken === "usdt" ? "active" : "")
            }
            onClick={() => {
              setSelectToken("usdt");
              setFromAmount("");
            }}
          >
            <img
              className="size-[21.89px] md:size-[32px]"
              src="/images/token/usdt-eth.png"
              alt="usdt"
            />
            <span>USDT</span>
          </button>
          <Link href="cardpay">
            <button className="tab-btn w-full">
              <img
                className="size-[21.89px] md:size-[32px]"
                src="/images/token/card.png"
                alt="card"
              />
              <span>CARD</span>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-yellow">
                {t("currency_you_pay", { currency: selectToken.toUpperCase() })}
              </span>
              <button
                className="third text-[9px] md:text-[12px] !px-2"
                style={{ display: isConnected ? "block" : "hidden" }}
                onClick={() => {
                  if (selectToken === "eth") setFromAmount(ethBal.toString());
                  else setFromAmount(usdtBal.toString());
                }}
              >
                MAX
              </button>
            </div>
            <div className="input">
              <input
                className="w-full"
                value={fromAmount}
                onChange={handleChange}
              />
              <img
                className="size-[21.89px] md:size-[32px]"
                src={`/images/token/${selectToken}.png`}
                alt="token"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-yellow">$RTX {t("you_receive")}</span>
            <div className="input">
              <input className="w-full" value={toAmount} readOnly />
              <img
                className="size-[21.89px] md:size-[32px]"
                src="/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-2">
          {!isConnected ? (
            <button
              className="primary h-[30.78px] md:h-[45px] w-full"
              onClick={() => web3Modal.open()}
            >
              {t("connect_wallet_pay")}
            </button>
          ) : (
            <>
              <button
                className="primary h-[30.78px] md:h-[45px] w-full"
                onClick={handleBuy}
              >
                {selectToken === "usdt" && allowance < Number(fromAmount)
                  ? isApproveloading
                    ? t("approving")
                    : t("approve")
                  : isDepositloading
                  ? t("depositing")
                  : t("buy_now")}
              </button>
              <button
                className="secondary h-[30.78px] md:h-[45px] w-full relative"
                onClick={() => disconnect(wagmiConfig)}
              >
                <span>{shortenAddress(address)}</span>
                <DisconnectIcon className="size-3 md:size-5 absolute right-2 md:right-4" />
              </button>
            </>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href="howtobuy">
            <button className="secondary h-[30.78px] md:h-[45px] w-full">
              <span className="text-white">{t("how_to_buy")}</span>
            </button>
          </Link>
          <Link
            href="https://gleam.io/FHtn5/250000-remittix-giveaway"
            target="_blank"
          >
            <button className="secondary h-[30.78px] md:h-[45px] w-full">
              <span className="text-white">$250,000 {t("giveaway")}</span>
            </button>
          </Link>
        </div>
        <div className="w-full">
          <Link href="error">
            <button className="secondary h-[30.78px] md:h-[45px] w-full">
              <span className="text-white">{t("getting_error")}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
