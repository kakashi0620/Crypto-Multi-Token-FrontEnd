import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import Buy from "./_components/Dialog/Buy";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const ContributePage: NextPage = () => {

  const { address } = useAccount();

  const [name, setName] = useState("");

  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [toSellAmount, setToSellAmount] = useState(10000);
  const [soldAmount, setSoldAmount] = useState(2630);

  const [claimWallet, setClaimWallet] = useState("");
  const [limitMin, setLimitMin] = useState(0);
  const [limitMax, setLimitMax] = useState(0);
  const [balance, setBalance] = useState(0);
  const [investAmount, setInvestAmount] = useState(0);
  const [receivedToken, setReceivedToken] = useState(0);
  const [terms, setTerms] = useState("");

  const [bOpenDeal, setOpenDeal] = useState(false);

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
              <div className="input-part h-full items-center">

                <div className="flex w-full justify-center">
                  <img src="/images/blog/blog-pic1.png" alt="Logo Image" />
                </div>

                <div className="flex flex-col gap-y-4">

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
                        required
                        className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
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
                      className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
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
                      className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                      value={claimWallet}
                      onChange={(e) => {
                        setClaimWallet(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Deal's limit */}
                <div className="input-part">
                  <div className="input-container">
                    <label
                      htmlFor="limitMin"
                      className="input-label"
                    >
                      Min
                    </label>
                    <div className="input-input">
                      <input
                        id="limitMin"
                        name="limitMin"
                        type="text"
                        autoComplete="limitMin"
                        className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                        value={limitMin}
                        onChange={(e) => {
                          setLimitMin(Number(e.target.value));
                        }}
                      />
                    </div>
                  </div>

                  <div className="input-container">
                    <label
                      htmlFor="limitMax"
                      className="input-label"
                    >
                      Max
                    </label>
                    <div className="input-input">
                      <input
                        id="limitMax"
                        name="limitMax"
                        type="text"
                        autoComplete="limitMax"
                        className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                        value={limitMax}
                        onChange={(e) => {
                          setLimitMax(Number(e.target.value));
                        }}
                      />
                    </div>
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
                      autoComplete="balance"
                      className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                      value={balance}
                      onChange={(e) => {
                        setBalance(Number(e.target.value));
                      }}
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
                      className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
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
                      autoComplete="receivedToken"
                      className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                      value={receivedToken}
                      onChange={(e) => {
                        setReceivedToken(Number(e.target.value));
                      }}
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
                  <input
                    id="terms"
                    name="terms"
                    type="text"
                    autoComplete="terms"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={terms}
                    onChange={(e) => {
                      setTerms(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  onClick={(e) => setOpenDeal(true)}
                >
                  Contribute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Buy isOpen={bOpenDeal} onConfirm={() => setOpenDeal(false)} onClose={() => setOpenDeal(false)} />
    </>
  );
};

export default ContributePage;