import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Twitter from "../Icons/Twitter";
import Telegram from "../Icons/Telegram";
import Medium from "../Icons/Medium";
import LogoIcon from "../Icons/Logo";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Instagram from "../Icons/Instagram";

export default function Footer() {
  const { t } = useTranslation();

  // const PageLinks = () => {
  //   return (
  //     <>
  //       <ScrollLink className="cursor-pointer" to="about">
  //         {t("eleventh_section_about")}
  //       </ScrollLink>
  //       <ScrollLink className="cursor-pointer" to="tokenomics">
  //         {t("tokenomics")}
  //       </ScrollLink>
  //       <ScrollLink className="cursor-pointer" to="roadmap">
  //         {t("roadmap")}
  //       </ScrollLink>
  //       <Link
  //         href={"https://remittix-organization.gitbook.io/remittix"}
  //         target="_blank"
  //       >
  //         {t("whitepaper")}
  //       </Link>
  //       <ScrollLink className="cursor-pointer" to="howtobuy">
  //         {t("how_to_buy")}
  //       </ScrollLink>
  //     </>
  //   );
  // };

  const SocialLinks = () => {
    return (
      <>
        <Link
          href="https://x.com/remittix"
          className="hover:scale-110"
          target="_blank"
        >
          <Twitter className="size-6" />
        </Link>
        <Link
          href="https://t.me/remittixofficial"
          className="hover:scale-110"
          target="_blank"
        >
          <Telegram className="size-7" />
        </Link>
        <Link
          href="https://medium.com/@remittix"
          className="hover:scale-110"
          target="_blank"
        >
          <Medium className="size-6" />
        </Link>
        <Link
          href={"https://linktr.ee/remittix"}
          className="hover:scale-110 cursor-pointer"
          target="_blank"
        >
          <Instagram className="size-6" />
        </Link>
      </>
    );
  };

  const ContactLinks = () => {
    return (
      <>
        <Link href={"mailto:support@xxx.io"}>support@xxx.io</Link>
        <Link href={"mailto:marketing@xxx.io"}>marketing@xxx.io</Link>
      </>
    );
  };

  return (
    <div className="relative z-10 pt-[43px] md:pt-[55px] pb-[26px] md:pb-[103px] bg-white">
      <Fade duration={300} className="relative z-10">
        <footer className="relative flex items-center justify-center">
          <div className="flex flex-col w-[88%] text-lg">
            <div className="flex flex-col md:flex-row justify-between w-full md:items-end pb-8 md:pb-12 border-b-2 border-black">
              <div className="flex items-center text-black pb-4 md:pb-0">
                <LogoIcon className="w-[31.01px] h-[16.02px] md:w-[55.71px] md:h-[28.78px]" />
                <span className="text-[20.9px] md:text-[37.55px] ml-1 md:ml-2">
                  {/* Remittix */}
                  News letter box
                </span>
              </div>
              <div className="hidden md:flex text-black gap-x-5 text-[15px]">
                <Link href={"/privacy"}>
                  <span className="border-b">
                    {t("eleventh_section_privacy_policy")}
                  </span>
                </Link>
                <Link href={"/terms"}>
                  <span className="border-b">
                    {t("eleventh_section_terms_of_service")}
                  </span>
                </Link>
              </div>
              <div className="flex md:hidden flex-col text-black md:w-[40%] gap-2 md:gap-4">
                <p className="text-[12px] text-[#4C4C4C]">
                  {/* {t("eleventh_section_disclaimer_1")}: */}
                  Title:
                </p>
                <p className="text-wrap leading-4 text-[12px] md:text-lg">
                  {/* {t("eleventh_section_disclaimer_1_1")} */}
                  Content
                </p>
              </div>
            </div>
            <div className="flex flex-col md:hidden justify-between w-full items-start border-b-2 py-6 border-black gap-2 md:gap-4">
              <p className="text-[12px] text-[#4C4C4C] leading-6">
                {t("eleventh_section_follow_us_on")}:
              </p>
              <div className="flex gap-x-[18.8px] w-full text-[#030303] items-center">
                <SocialLinks />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:hidden justify-between w-full items-start border-b-2 py-6 border-black text-[12px] text-black">
              <div className="grid grid-cols-2 w-full">
                {/* <PageLinks /> */}
              </div>
              <div className="grid grid-cols-2 w-full">
                <Link href={"/privacy"}>
                  <span className="border-b">
                    {t("eleventh_section_privacy_policy")}
                  </span>
                </Link>
                <Link href={"/terms"}>
                  <span className="border-b">
                    {t("eleventh_section_terms_of_service")}
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:hidden justify-between w-full items-start border-b-2 py-6 border-black text-[#030303]">
              <div className="text-[12px] text-[#4C4C4C]">
                {t("eleventh_section_contact_info")}:
              </div>
              <div className="flex flex-col text-[11px]">
                <ContactLinks />
              </div>
            </div>
            <div className="hidden md:flex justify-between w-full items-start border-b-2 py-12 border-black text-[15px]">
              <div className="flex flex-col text-black w-[40%]">
                <p className="text-[#4C4C4C] pb-[24px]">
                  {/* {t("eleventh_section_disclaimer_1")}: */}
                  Title:
                </p>
                <p className="text-wrap leading-6">
                  {/* {t("eleventh_section_disclaimer_1_1")} */}
                  Content
                </p>
              </div>
              <div className="flex flex-col text-black leading-9">
                <p className="text-[#4C4C4C] pb-[6px]">
                  {t("eleventh_section_contact_info")}:
                </p>
                <ContactLinks />
              </div>
              <div className="flex flex-col text-black">
                <p className="text-[#4C4C4C] leading-9 pb-[15px]">
                  {t("eleventh_section_follow_us_on")}:
                </p>
                <div className="flex gap-x-4 w-full items-center text-[#030303]">
                  <SocialLinks />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full pt-[31px] md:pt-[51px]">
              <div className="hidden md:flex gap-2 lg:gap-4 text-black items-start text-left text-wrap text-[15px]">
                {/* <PageLinks /> */}
              </div>
              <div className="text-left md:text-right text-wrap">
                <p className="text-[12px] md:text-[15px] leading-6 text-[#4C4C4C]">
                  {/* © {t("eleventh_section_all_right")} - 2024 */}
                  © All Rights reserved by x x x x - 2025
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Fade>
    </div>
  );
}
