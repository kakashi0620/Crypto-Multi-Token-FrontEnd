import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React from "react";
import { useDeal } from "../hooks/dealContext";
import ImageView from "./_components/ImageView";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const DealDetailPage: NextPage = () => {

  const { deal } = useDeal()

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
                    disabled
                    className="input-text"
                    value={deal?.name}
                  />
                </div>
              </div>

              {/* Empty space */}
              <div className="hidden sm:gap-y-2 sm:grid sm:grid-cols-5" />

              {/* Logo */}
              <div className="input-container">
                <label
                  htmlFor="logo"
                  className="input-label"
                >
                  Logo
                </label>
                <div className="input-input">
                  <ImageView imgurl={deal?.logo} />
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
                  <ImageView imgurl={deal?.banner} />
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
                    disabled
                    autoComplete="round"
                    className="input-text"
                    value={deal?.round}
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
                    disabled
                    autoComplete="tokenprice"
                    className="input-text"
                    value={deal?.tokenprice}
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
                    disabled
                    autoComplete="fdv"
                    className="input-text"
                    value={deal?.fdv}
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
                    disabled
                    autoComplete="mc"
                    className="input-text"
                    value={deal?.mc}
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
                    disabled
                    autoComplete="vest"
                    className="input-text"
                    value={deal?.vest}
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
                    disabled
                    autoComplete="fundrasing"
                    className="input-text"
                    value={deal?.fundrasing}
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
                    disabled
                    autoComplete="fee"
                    className="input-text"
                    value={deal?.fee}
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
                    disabled
                    autoComplete="investmin"
                    className="input-text"
                    value={deal?.investmin}
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
                    disabled
                    autoComplete="investmax"
                    className="input-text"
                    value={deal?.investmax}
                  />
                </div>
              </div>
            </div>

            {/* Deal Summary */}
            <div className="subtitle">
              Deal Summary
            </div>

            {/* Description */}
            <div className="flex flex-col mx-5">
              <label
                htmlFor="test"
                className="input-label"
              >
                Description
              </label>
              <div className="input-input">
                <textarea
                  id="test"
                  name="test"
                  disabled
                  autoComplete="test"
                  className="input-text h-[200px]"
                  value={deal?.test}
                />
              </div>
            </div>

            <div className="input-part">

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
                    disabled
                    autoComplete="weburl"
                    className="input-text"
                    value={deal?.weburl}
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
                    disabled
                    autoComplete="xurl"
                    className="input-text"
                    value={deal?.xurl}
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
                    disabled
                    autoComplete="discordurl"
                    className="input-text"
                    value={deal?.discordurl}
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
                    disabled
                    autoComplete="teleurl"
                    className="input-text"
                    value={deal?.teleurl}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DealDetailPage;