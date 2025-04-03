import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";

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

  const onContribute = (e) => {

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

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
        <h1 className="text-3xl md:text-5xl font-bold text-green text-center">
          Deal Contribute
        </h1>
        <div className="flex flex-col gap-4">
          <div className="space-y-6">

            {/* Logo, name, progress */}
            <div className="flex flex-col gap-y-4 h-full items-center md:grid md:grid-cols-2 md:gap-x-6">

              <div className="flex w-full justify-center">
                <img src="/images/blog/blog-pic1.png" alt="Logo Image" />
              </div>

              <div className="flex flex-col gap-y-4">

                {/* Deal name */}
                <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                  <label
                    htmlFor="name"
                    className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                  >
                    Deal Name
                  </label>
                  <div className="">
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

            <div className="flex flex-col gap-y-4 md:pt-5 md:grid md:grid-cols-2 md:gap-x-6">
              {/* Metamask Login Wallet */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="loginWallet"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Metamask Login Wallet
                </label>
                <div className=" items-center h-full">
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
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="claimWallet"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Token claim Wallet
                </label>
                <div className="">
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
              <div className="flex flex-col gap-y-2 md:grid md:grid-cols-2 md:gap-x-6">
                <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                  <label
                    htmlFor="limitMin"
                    className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                  >
                    Min
                  </label>
                  <div className="">
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

                <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                  <label
                    htmlFor="limitMax"
                    className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                  >
                    Max
                  </label>
                  <div className="">
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
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="balance"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Metamask Balance
                </label>
                <div className="">
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
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="investAmount"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Invest Amount Box
                </label>
                <div className="">
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
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="receivedToken"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Token Receive
                </label>
                <div className="">
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
                  className="block h-full text-md text-left align-middle font-medium leading-6 text-gray-900"
                >
                  T & C
                </label>
                <div className="">
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
                onClick={(e) => onContribute(e)}
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributePage;
