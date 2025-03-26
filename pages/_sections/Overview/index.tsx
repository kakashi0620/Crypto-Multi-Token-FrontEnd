import React from "react";
import Divider from "../../_components/Icons/Divider";
import Twitter from "../../_components/Icons/Twitter";
import Telegram from "../../_components/Icons/Telegram";
import Medium from "../../_components/Icons/Medium";
import RightIcon from "../../_components/Icons/Right";
import Link from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";
import Instagram from "../../_components/Icons/Instagram";
import { useTranslation } from "react-i18next";
import BuyNow from "./BuyNow";

export default function Overview() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center lg:pt-32 z-10 relative">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 lg:-mt-10">
          <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
            <div className="flex flex-col gap-2 overflow-hidden">
              <h1 className="text-[50px] lg:text-[90px] leading-[54px] lg:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center lg:text-left">
                {t("first_section_title")}{" "}
                <span className="text-yellow">
                  {t("first_section_title_reinvented")}
                </span>
              </h1>
              <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center lg:text-left">
                {t("first_section_content")}
              </h2>
              <div className="text-xl text-yellow text-center lg:text-left">
                {t("first_section_welcome")}
              </div>
              <div className="flex gap-12 items-center justify-center lg:justify-start">
                <Link
                  href="https://x.com/remittix"
                  className="hover:scale-110 cursor-pointer"
                  target="_blank"
                >
                  <Twitter />
                </Link>
                <Link
                  href={"https://t.me/remittixofficial"}
                  className="hover:scale-110 cursor-pointer"
                  target="_blank"
                >
                  <Telegram />
                </Link>
                <Link
                  href={"https://medium.com/@remittix"}
                  className="hover:scale-110 cursor-pointer"
                  target="_blank"
                >
                  <Medium />
                </Link>
                <Link
                  href={"https://linktr.ee/remittix"}
                  className="hover:scale-110 cursor-pointer"
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mb-10 relative z-10">
            <Element name="presale">
              <BuyNow />
            </Element>
          </div>
        </div>

        <div className="w-full py-10 hidden lg:flex">
          <Divider />
        </div>

        <Element name="about">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20 mt-10">
            <div className="flex w-full justify-center mb-10 relative z-0">
              <div className="onStep flex justify-end z-10 w-full">
                <video
                  className="max-w-[576px] w-full pointer-events-none ounded-[11.27px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/video/tutorial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
              <div className="text-yellow text-xl">{t("why_remittix")}</div>
              <div className="text-[36px] lg:text-[50px] leading-[46px] traking-[-0.8px] text-light-white max-w-[700px]">
                {t("second_section_title")}
              </div>
              <div className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px]">
                {t("remittix_defintion_1")}
              </div>
              <div className="text-xl font-normal max-w-[700px]">
                {t("remittix_definition_2")}
              </div>
              <Link
                href={"https://remittix-organization.gitbook.io/remittix"}
                className="flex items-center justify-center relative bg-yellow rounded-lg text-black w-[250px] h-[48px] cursor-pointer"
                target="_blank"
              >
                <span className="text-[16px] font-semibold">
                  {t("whitepaper")}
                </span>
                <div className="absolute right-4">
                  <RightIcon className="scale-50" />
                </div>
              </Link>
            </div>
          </div>
        </Element>
      </div>

      <div className="bg-overview">
        <img
          className="bottom-left"
          src="/images/background/bank-account.svg"
          alt="bank"
        />
        <img
          className="bottom-right"
          src="/images/background/cross-border.svg"
          alt="border"
        />
      </div>
    </main>
  );
}
