import React from "react";
import BuySteps from "./BuySteps";
import RightIcon from "../../_components/Icons/Right";
import Silder from "./Slider";
import Link from "next/link";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function HowtoBuy() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center z-10 text-black">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-[#F2F5F6] py-12">
        {/* <Element name="howtobuy"> */}
          <div className="flex flex-col items-center">
            <div className="relative w-fit">
              <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
                {/* {t("seventh_section_how_to_buy")} */}
                How to work
              </span>
              {/* <div className="absolute h-4 w-24 bg-yellow top-6 -right-4 lg:right-0 lg:top-16 z-0" /> */}
            </div>
            <span className="text-[15px] lg:text-xl font-normal text-center">
              {/* {t("seventh_section_how_to_buy_content")} */}
              Follow these n simple steps to x x x x x
            </span>
          </div>
        {/* </Element> */}
        <div className="flex-grow mt-12">
          <BuySteps />
        </div>
      </div>

      {/* <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white">
        <div className="flex relative mt-12">
          <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
            {t("eighth_section_powered_by")}
          </span>
          <div className="absolute h-5 w-28 bg-yellow left-0 bottom-0 lg:bottom-6 z-0" />
        </div>
        <Silder />
      </div> */}

      {/* <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-[#F2F5F6] py-12">
        <div className="flex flex-col items-center relative">
          <div className="relative">
            <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10 text-center">
              {t("ninth_section_remittix_in_detail")}
            </span>
            <div className="absolute h-5 w-36 bg-yellow right-12 bottom-0 lg:bottom-7 z-0" />
          </div>
          <span className="text-[15px] tracking-[-0.8px] lg:text-xl font-normal text-center">
            {t("ninth_section_remittix_in_detail_content_1")}{" "}
            <span className="font-bold">{t("whitepaper")}</span>{" "}
            {t("ninth_section_remittix_in_detail_content_2")}
          </span>
        </div>

        <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-4 mt-8">
          <Link
            href={
              "https://blocksafu.com/audit/0xC7f59c4bD6927996186696A0A9cF95dD1727b54E"
            }
            className="flex justify-center w-full"
            target="_blank"
          >
            <div className="flex items-center justify-center relative bg-black rounded-lg text-white w-full lg:w-[321px] h-[71px] cursor-pointer">
              <span className="text-[21px] font-semibold">
                {t("ninth_section_remittix_in_detail_audit")}
              </span>
              <div className="absolute right-4">
                <RightIcon className="scale-50" />
              </div>
            </div>
          </Link>

          <Link
            href={"https://remittix-organization.gitbook.io/remittix"}
            className="flex justify-center w-full"
            target="_blank"
          >
            <div className="flex items-center justify-center relative bg-black rounded-lg text-white w-full lg:w-[321px] h-[71px] cursor-pointer">
              <span className="text-[21px] font-semibold">
                {t("whitepaper")}
              </span>
              <div className="absolute right-4">
                <RightIcon className="scale-50" />
              </div>
            </div>
          </Link>
        </div>
      </div> */}
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white py-12">
        <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
          {/* {t("seventh_section_how_to_buy")} */}
          Profit Calculator
        </span>
        <span>
          profit content
        </span>
        {/* <div className="flex flex-col bg-[#041019] rounded-[10px] relative text-white bg-competition">
          <img
            className="w-full rounded-[10px]"
            src="/images/competition.png"
            alt="competition"
          />

          <div className="flex flex-col lg:absolute gap-12 p-4 lg:p-24">
            <span className="text-[30px] lg:text-[44.44px] leading-[37.05px] lg:leading-[45px] tracking-[-1.78px] font-bold max-w-[510px]">
              {t("ninth_section_remittix_in_detail_competition")}{" "}
              <span className="text-yellow">$250K</span>
            </span>

            <span className="text-[15px] lg:text-xl font-normal tracking-[-0.8px] max-w-[585px]">
              {t("ninth_section_remittix_in_detail_competition_content")}
            </span>

            <Link
              href={"https://gleam.io/FHtn5/250000-remittix-giveaway"}
              target="_blank"
              className="w-full"
            >
              <button className="third w-full lg:w-[343px] h-[62.98px] lg:h-[71px] relative">
                <span className="text-[14.61px] lg:text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                  {t("ninth_section_remittix_in_detail_competition_button")}
                </span>
                <RightIcon className="absolute right-4 scale-50" />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </main>
  );
}
