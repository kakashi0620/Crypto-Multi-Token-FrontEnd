import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

let tempid = 0;
const DealDetailPage: NextPage = () => {

  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  const [round, setRound] = useState("");
  const [tokenprice, setTokenPrice] = useState("");
  const [fdv, setFDV] = useState("");
  const [mc, setMC] = useState("");
  const [vest, setVest] = useState("");
  const [fundrasing, setFundrasing] = useState("");
  const [fee, setFee] = useState("");
  const [investmin, setInvestMin] = useState("");
  const [investmax, setInvestMax] = useState("");
  const [test, setTest] = useState("");
  const [weburl, setWebURL] = useState("");
  const [xurl, setXURL] = useState("");
  const [discordurl, setDiscordURL] = useState("");
  const [teleurl, setTeleURL] = useState("");

  useEffect(() => {
    const currentDealName: string = JSON.parse(localStorage.getItem("currentDealName") as string)
    currentDealName;
    // find deal from currentDealName on db.
    setName("deal.setName");
    setLogo("deal.setLogo");
    setBanner("deal.setBanner");
    setRound("deal.setRound");
    setTokenPrice("deal.setTokenPrice");
    setFDV("deal.setFDV");
    setMC("deal.setMC");
    setVest("deal.setVest");
    setFundrasing("deal.setFundrasing");
    setFee("deal.setFee");
    setInvestMin("deal.setInvestMin");
    setInvestMax("deal.setInvestMax");
    setTest("deal.setTest");
    setWebURL("deal.setWebURL");
    setXURL("deal.setXURL");
    setDiscordURL("deal.setDiscordURL");
    setTeleURL("deal.setTeleURL");
  }, [])

  const onUpdatDeal = (e) => {

    e.preventDefault();

    const deal = {
      userName: name,
      logo: logo,
      banner: banner,
      round: round,
      tokenprice: tokenprice,
      fdv: fdv,
      mc: mc,
      vest: vest,
      fundrasing: fundrasing,
      fee: fee,
      investmin: investmin,
      investmax: investmax,
      test: test,
      xurl: xurl,
      discordurl: discordurl,
      teleurl: teleurl,
    };

    console.log(`Deal successfully updated.`)
    // axios
    //   .post(
    //     // `${process.env.REACT_APP_BACKEND_URL}/api/users/register`,
    //     `http://localhost:5000/api/users/register`,
    //     newUser
    //   )
    //   .then((res) => {
    //     // toast.success("DealDetail successfully registered!", { position: "top-right" });
    //   })
    //   .catch((error) => {
    //     console.log(
    //       "DealDetail Register error:",
    //       error.response ? error.response.data : error.message
    //     );
    //   });
  }

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
        <h1 className="text-3xl md:text-5xl font-bold text-green text-center">
          Deal Detail
        </h1>
        <div className="flex flex-col gap-12">
          <form className="space-y-6" method="POST">

            {/* Personal Information */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Header
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">

              {/* Deal name */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="name"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
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

              {/* Logo */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="logo"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Logo
                </label>
                <div className="">
                  <input
                    id="logo"
                    name="logo"
                    type="text"
                    autoComplete="logo"
                    required
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={logo}
                    onChange={(e) => {
                      setLogo(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Banner */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="banner"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Banner
                </label>
                <div className="">
                  <input
                    id="banner"
                    name="banner"
                    type="text"
                    autoComplete="banner"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={banner}
                    onChange={(e) => {
                      setBanner(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Bio */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Deal Bio
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">
              {/* Round */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="round"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Round
                </label>
                <div className="">
                  <input
                    id="round"
                    name="round"
                    type="text"
                    autoComplete="round"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={round}
                    onChange={(e) => {
                      setRound(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Token Price */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="tokenprice"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Token Price
                </label>
                <div className="">
                  <input
                    id="tokenprice"
                    name="tokenprice"
                    type="text"
                    autoComplete="tokenprice"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={tokenprice}
                    onChange={(e) => {
                      setTokenPrice(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Fully Diluted Valuation */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="fdv"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Fully Diluted Valuation
                </label>
                <div className="">
                  <input
                    id="fdv"
                    name="fdv"
                    type="text"
                    autoComplete="fdv"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={fdv}
                    onChange={(e) => {
                      setFDV(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Initial Market Cap */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="mc"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Initial Market Cap
                </label>
                <div className="">
                  <input
                    id="mc"
                    name="mc"
                    type="text"
                    autoComplete="mc"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={mc}
                    onChange={(e) => {
                      setMC(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Vesting Summary */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="vest"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Vesting Summary
                </label>
                <div className="">
                  <input
                    id="vest"
                    name="vest"
                    type="text"
                    autoComplete="vest"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={vest}
                    onChange={(e) => {
                      setVest(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Limit */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Deal Limit
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">

              {/* Fundraising Target */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="fundrasing"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Fundraising Target
                </label>
                <div className="">
                  <input
                    id="fundrasing"
                    name="fundrasing"
                    type="text"
                    autoComplete="fundrasing"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={fundrasing}
                    onChange={(e) => {
                      setFundrasing(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Fees */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="fee"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Fees
                </label>
                <div className="">
                  <input
                    id="fee"
                    name="fee"
                    type="text"
                    autoComplete="fee"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={fee}
                    onChange={(e) => {
                      setFee(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Min Invest Limit */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="investmin"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Min Invest Limit
                </label>
                <div className="">
                  <input
                    id="investmin"
                    name="investmin"
                    type="text"
                    autoComplete="investmin"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={investmin}
                    onChange={(e) => {
                      setInvestMin(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Max Invest Limit */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="investmax"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Max Invest Limit
                </label>
                <div className="">
                  <input
                    id="investmax"
                    name="investmax"
                    type="text"
                    autoComplete="investmax"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={investmax}
                    onChange={(e) => {
                      setInvestMax(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Summary */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Deal Summary
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">

              {/* Test */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="test"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Test
                </label>
                <div className="">
                  <input
                    id="test"
                    name="test"
                    type="text"
                    autoComplete="test"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={test}
                    onChange={(e) => {
                      setTest(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Website URL */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="weburl"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Website URL
                </label>
                <div className="">
                  <input
                    id="weburl"
                    name="weburl"
                    type="text"
                    autoComplete="weburl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={weburl}
                    onChange={(e) => {
                      setWebURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Twitter URL */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="xurl"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Twitter URL
                </label>
                <div className="">
                  <input
                    id="xurl"
                    name="xurl"
                    type="text"
                    autoComplete="xurl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={xurl}
                    onChange={(e) => {
                      setXURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Discord URL */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="discordurl"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Discord URL
                </label>
                <div className="">
                  <input
                    id="discordurl"
                    name="discordurl"
                    type="text"
                    autoComplete="discordurl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={discordurl}
                    onChange={(e) => {
                      setDiscordURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Telegram URL */}
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="teleurl"
                  className="block h-full text-md text-left sm:text-left align-middle font-medium leading-6 text-gray-900"
                >
                  Telegram URL
                </label>
                <div className="">
                  <input
                    id="teleurl"
                    name="teleurl"
                    type="text"
                    autoComplete="teleurl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={teleurl}
                    onChange={(e) => {
                      setTeleURL(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green 
px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm 
hover:bg-black focus-visible:outline focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-green"
                onClick={(e) => onUpdatDeal(e)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DealDetailPage;
