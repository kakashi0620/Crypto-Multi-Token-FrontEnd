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
    //     `${getBackend()}/api/users/register`,
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
        <h1 className="page-title">
          Deal Detail
        </h1>
        <div className="flex flex-col gap-12">
          <form className="space-y-6" method="POST">

            {/* Personal Information */}
            <div className="subtitle">
              Header
            </div>

            <div className="input-part">

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
                    className="input-text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Logo */}
              <div className="input-container">
                <label
                  htmlFor="logo"
                  className="input-label"
                >
                  Logo
                </label>
                <div className="input-input">
                  <input
                    id="logo"
                    name="logo"
                    type="text"
                    autoComplete="logo"
                    required
                    className="input-text"
                    value={logo}
                    onChange={(e) => {
                      setLogo(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Banner */}
              <div className="input-container">
                <label
                  htmlFor="banner"
                  className="input-label"
                >
                  Banner
                </label>
                <div className="input-input">
                  <input
                    id="banner"
                    name="banner"
                    type="text"
                    autoComplete="banner"
                    className="input-text"
                    value={banner}
                    onChange={(e) => {
                      setBanner(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Bio */}
            <div className="subtitle">
              Deal Bio
            </div>

            <div className="input-part">
              {/* Round */}
              <div className="input-container">
                <label
                  htmlFor="round"
                  className="input-label"
                >
                  Round
                </label>
                <div className="input-input">
                  <input
                    id="round"
                    name="round"
                    type="text"
                    autoComplete="round"
                    className="input-text"
                    value={round}
                    onChange={(e) => {
                      setRound(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Token Price */}
              <div className="input-container">
                <label
                  htmlFor="tokenprice"
                  className="input-label"
                >
                  Token Price
                </label>
                <div className="input-input">
                  <input
                    id="tokenprice"
                    name="tokenprice"
                    type="text"
                    autoComplete="tokenprice"
                    className="input-text"
                    value={tokenprice}
                    onChange={(e) => {
                      setTokenPrice(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Fully Diluted Valuation */}
              <div className="input-container">
                <label
                  htmlFor="fdv"
                  className="input-label"
                >
                  Fully Diluted Valuation
                </label>
                <div className="input-input">
                  <input
                    id="fdv"
                    name="fdv"
                    type="text"
                    autoComplete="fdv"
                    className="input-text"
                    value={fdv}
                    onChange={(e) => {
                      setFDV(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Initial Market Cap */}
              <div className="input-container">
                <label
                  htmlFor="mc"
                  className="input-label"
                >
                  Initial Market Cap
                </label>
                <div className="input-input">
                  <input
                    id="mc"
                    name="mc"
                    type="text"
                    autoComplete="mc"
                    className="input-text"
                    value={mc}
                    onChange={(e) => {
                      setMC(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Vesting Summary */}
              <div className="input-container">
                <label
                  htmlFor="vest"
                  className="input-label"
                >
                  Vesting Summary
                </label>
                <div className="input-input">
                  <input
                    id="vest"
                    name="vest"
                    type="text"
                    autoComplete="vest"
                    className="input-text"
                    value={vest}
                    onChange={(e) => {
                      setVest(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Limit */}
            <div className="subtitle">
              Deal Limit
            </div>

            <div className="input-part">

              {/* Fundraising Target */}
              <div className="input-container">
                <label
                  htmlFor="fundrasing"
                  className="input-label"
                >
                  Fundraising Target
                </label>
                <div className="input-input">
                  <input
                    id="fundrasing"
                    name="fundrasing"
                    type="text"
                    autoComplete="fundrasing"
                    className="input-text"
                    value={fundrasing}
                    onChange={(e) => {
                      setFundrasing(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Fees */}
              <div className="input-container">
                <label
                  htmlFor="fee"
                  className="input-label"
                >
                  Fees
                </label>
                <div className="input-input">
                  <input
                    id="fee"
                    name="fee"
                    type="text"
                    autoComplete="fee"
                    className="input-text"
                    value={fee}
                    onChange={(e) => {
                      setFee(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Min Invest Limit */}
              <div className="input-container">
                <label
                  htmlFor="investmin"
                  className="input-label"
                >
                  Min Invest Limit
                </label>
                <div className="input-input">
                  <input
                    id="investmin"
                    name="investmin"
                    type="text"
                    autoComplete="investmin"
                    className="input-text"
                    value={investmin}
                    onChange={(e) => {
                      setInvestMin(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Max Invest Limit */}
              <div className="input-container">
                <label
                  htmlFor="investmax"
                  className="input-label"
                >
                  Max Invest Limit
                </label>
                <div className="input-input">
                  <input
                    id="investmax"
                    name="investmax"
                    type="text"
                    autoComplete="investmax"
                    className="input-text"
                    value={investmax}
                    onChange={(e) => {
                      setInvestMax(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Summary */}
            <div className="subtitle">
              Deal Summary
            </div>

            <div className="input-part">

              {/* Test */}
              <div className="input-container">
                <label
                  htmlFor="test"
                  className="input-label"
                >
                  Test
                </label>
                <div className="input-input">
                  <input
                    id="test"
                    name="test"
                    type="text"
                    autoComplete="test"
                    className="input-text"
                    value={test}
                    onChange={(e) => {
                      setTest(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Website URL */}
              <div className="input-container">
                <label
                  htmlFor="weburl"
                  className="input-label"
                >
                  Website URL
                </label>
                <div className="input-input">
                  <input
                    id="weburl"
                    name="weburl"
                    type="text"
                    autoComplete="weburl"
                    className="input-text"
                    value={weburl}
                    onChange={(e) => {
                      setWebURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Twitter URL */}
              <div className="input-container">
                <label
                  htmlFor="xurl"
                  className="input-label"
                >
                  Twitter URL
                </label>
                <div className="input-input">
                  <input
                    id="xurl"
                    name="xurl"
                    type="text"
                    autoComplete="xurl"
                    className="input-text"
                    value={xurl}
                    onChange={(e) => {
                      setXURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Discord URL */}
              <div className="input-container">
                <label
                  htmlFor="discordurl"
                  className="input-label"
                >
                  Discord URL
                </label>
                <div className="input-input">
                  <input
                    id="discordurl"
                    name="discordurl"
                    type="text"
                    autoComplete="discordurl"
                    className="input-text"
                    value={discordurl}
                    onChange={(e) => {
                      setDiscordURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Telegram URL */}
              <div className="input-container">
                <label
                  htmlFor="teleurl"
                  className="input-label"
                >
                  Telegram URL
                </label>
                <div className="input-input">
                  <input
                    id="teleurl"
                    name="teleurl"
                    type="text"
                    autoComplete="teleurl"
                    className="input-text"
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
