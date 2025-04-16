import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { formatUnits } from 'viem';
import Buy from "./_components/Dialog/Buy";
import { useDeal } from "../hooks/dealContext";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const USDT_BSC_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

const ContributePage: NextPage = () => {

  const { address } = useAccount();
  const { data, isLoading, isError } = useBalance({
    address,
    token: USDT_BSC_ADDRESS
  });

  const { deal } = useDeal()

  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [toSellAmount, setToSellAmount] = useState(10000);
  const [soldAmount, setSoldAmount] = useState(2630);

  const [claimWallet, setClaimWallet] = useState<string>(address as string);
  const [investAmount, setInvestAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);

  const [bOpenDeal, setOpenDeal] = useState(false);

  const router = useRouter()
  const purchaseToken = () => {
    setOpenDeal(false)
    router.push("/portfolio")
  }

  useEffect(() => {
    if (1) {
      // setPrice(calculateTokenPrice(presale.price));
      // setNextPrice(calculateTokenPrice(presale.nextStagePrice));

      // const toSellAmount = formatUnits(
      //   presale.tokensToSell,
      //   PresaleConfig.tokenDecimal
      // );
      // const soldAmount = formatUnits(presale.Sold, PresaleConfig.tokenDecimal);
      setProgress((Number(soldAmount) / Number(toSellAmount)) * 100);
    }
  }, []);

  useEffect(() => {
    if (!progressRef || !progressRef.current) return;
    (progressRef.current as any).style.width = `${Math.max(
      progress,
      55.71
    ).toFixed(2)}%`;
  }, [progress, progressRef]);

  useEffect(() => {
    setTokenAmount(investAmount / Number(deal?.tokenprice))
  }, [investAmount])

  const onPurchase = () => {
    if (investAmount < Number(deal?.investmin) || Number(deal?.investmax) < investAmount) {
      toast.error('Invest amount should be in limit range. Please consider Limit field values.')
      return;
    }

    setOpenDeal(true)
  }

  const getTCString = () => {
    let tc: string = "";
    if (deal?.tc_pulltrust)
      tc += "This Pool is based on Trust."
    if (deal?.tc_pinmsg)
      tc += "\nYou agree to regularly and carefully read the announcement channel and pinned messgae, and reread it again every tme the pinned message is updated. I agree to respect and follow all the rules."
    if (deal?.tc_answer)
      tc += "\nI confirm I have answered all the questions and that I've answered them truthfully."
    if (deal?.tc_responsible)
      tc += "\nYou agree to the Fact that we will not in any way, legally or Otherwise, Be held responsible for your investment. You have done your own research."
    if (deal?.tc_acknowledge)
      tc += "\nYou acknowledge and agree that this is not an investment service, legal service, or a finanial service of an kind."
    if (deal?.tc_allocation)
      tc += "\nAll allocation will be deducted a 9% Fee which constitutes Govt taxes, Operational costs and Gas fees."
    if (deal?.tc_never)
      tc += "\nYou agree to NEVER mention or leak any details (even partial details) of our private deals with anyone outside our group. You understand we have a zero-tolerance policy and ANY hint of leakage results in permanent ban and blacklisting in not just our group but all our partnering groups. Telegram community and may also result in refunding contributions for pools you contributed in. The leaker's contribution may also be withheld to cover damages he might have caused."

    return tc;
  }

  return (
    <>
      <div className={`bg-term ${poppins.className}`}>
        <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
          <h1 className="page-title">
            Deal Contribute
          </h1>
          <div className="flex flex-col gap-4">
            <div className="space-y-6">

              {/* Logo, name, progress */}
              <div className="input-container h-full items-center">

                <div className="flex w-full justify-center sm:col-span-2">
                  <img src={deal?.logo} alt="Logo Image" />
                </div>

                <div className="flex flex-col gap-y-4 sm:col-start-3 sm:col-span-3">

                  {/* Deal name */}
                  <div className="input-container">
                    <label
                      htmlFor="name"
                      className="input-label"
                    >
                      Deal Name
                    </label>
                    <div className="input-input">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        disabled
                        className="input-text"
                        value={deal?.name}
                      />
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="flex flex-col gap-y-2">
                    <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
                      <div
                        className={`progress-bar w-[0%] max-w-full transition-all duration-300 ease-in-out`}
                        ref={progressRef}
                      ></div>
                      <span className="absolute right-2 font-medium opacity-60">
                        {(100 - (progress + 55.71)).toFixed(2)}% Sold
                      </span>
                    </div>
                    <div className="text-center w-full mt-1 flex flex-col">
                      <span>
                        USD RAISED SO FAR: ${soldAmount}/${toSellAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-part">
                {/* Metamask Login Wallet */}
                <div className="input-container">
                  <label
                    htmlFor="loginWallet"
                    className="input-label"
                  >
                    Metamask Login Wallet
                  </label>
                  <div className="input-input">
                    <input
                      id="loginWallet"
                      name="loginWallet"
                      type="text"
                      autoComplete="loginWallet"
                      className="input-text"
                      value={address}
                      disabled
                    />
                  </div>
                </div>

                {/* Token claim Wallet */}
                <div className="input-container">
                  <label
                    htmlFor="claimWallet"
                    className="input-label"
                  >
                    Token claim Wallet
                  </label>
                  <div className="input-input">
                    <input
                      id="claimWallet"
                      name="claimWallet"
                      type="text"
                      autoComplete="claimWallet"
                      className="input-text"
                      value={claimWallet}
                      onChange={(e) => {
                        setClaimWallet(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Deal's limit (min / max) */}

                <div className="input-container">
                  <label
                    htmlFor="limit"
                    className="input-label"
                  >
                    Limit
                  </label>
                  <div className="input-input">
                    <input
                      id="limit"
                      name="limit"
                      type="text"
                      autoComplete="limit"
                      className="input-text"
                      value={"Min: " + deal?.investmin + "  Max: " + deal?.investmax}
                      disabled
                    />
                  </div>
                </div>

                {/* Metamask Balance */}
                <div className="input-container">
                  <label
                    htmlFor="balance"
                    className="input-label"
                  >
                    Metamask Balance
                  </label>
                  <div className="input-input">
                    <input
                      id="balance"
                      name="balance"
                      type="text"
                      disabled
                      autoComplete="balance"
                      className="input-text"
                      value={isError ? "Error getting balance." : isLoading ? "Loading balance..." : formatUnits(data?.value as bigint, data?.decimals as number)}
                    />
                  </div>
                </div>

                {/* Invest Amount Box */}
                <div className="input-container">
                  <label
                    htmlFor="investAmount"
                    className="input-label"
                  >
                    Invest Amount Box
                  </label>
                  <div className="input-input">
                    <input
                      id="investAmount"
                      name="investAmount"
                      type="text"
                      autoComplete="investAmount"
                      className="input-text"
                      value={investAmount}
                      onChange={(e) => {
                        setInvestAmount(Number(e.target.value));
                      }}
                    />
                  </div>
                </div>

                {/* Token Receive */}
                <div className="input-container">
                  <label
                    htmlFor="receivedToken"
                    className="input-label"
                  >
                    Token Receive
                  </label>
                  <div className="input-input">
                    <input
                      id="receivedToken"
                      name="receivedToken"
                      type="text"
                      disabled
                      autoComplete="receivedToken"
                      className="input-text"
                      value={tokenAmount}
                    />
                  </div>
                </div>
              </div>

              {/* T & C */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="terms"
                  className="input-label"
                >
                  T & C
                </label>
                <div className="input-input">
                  <textarea
                    id="test"
                    name="test"
                    disabled
                    autoComplete="test"
                    className="input-text h-[200px]"
                    value={getTCString()}
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  onClick={() => onPurchase()}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Buy investAmount={investAmount} isOpen={bOpenDeal} onConfirm={() => purchaseToken()} onClose={() => setOpenDeal(false)} />
    </>
  );
};

export default ContributePage;