import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Twitter from "../Icons/Twitter";
import Telegram from "../Icons/Telegram";
import Facebook from "../Icons/Facebook";
import LogoIcon from "../Icons/Logo";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Instagram from "../Icons/Instagram";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

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
          href="https://x.com/wealth_capital"
          className="hover:scale-110"
          target="_blank"
        >
          <Twitter className="size-6" />
        </Link>
        <Link
          href="https://wealthy.capital/TG"
          className="hover:scale-110"
          target="_blank"
        >
          <Telegram className="size-7" />
        </Link>
        <Link
          href="https://www.facebook.com/wealthycapital"
          className="hover:scale-110"
          target="_blank"
        >
          <Facebook className="size-6" />
        </Link>
        <Link
          href={"https://linktr.ee/wealthycapital"}
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
        <Link href={"mailto:Info@Wealthy.Capital"}>Info@Wealthy.Capital</Link>
      </>
    );
  };

  return (
    <div className="relative z-10 pb-4 sm:pb-6 md:pb-[103px] bg-[#041019]">
      <Fade duration={300} className="relative z-10">
        <footer className="relative flex items-center justify-center">
          <div className="flex flex-col w-[92%] sm:w-[88%] text-base sm:text-lg">
            {/* Logo and Links Section */}
            <div className="flex flex-col md:flex-row justify-between w-full md:items-end pb-4 sm:pb-6 md:pb-8 border-b border-white">
              <Link href="/" className="flex items-center">
                <img
                  className="w-32 mb-4 sm:w-36 md:w-40 lg:w-44 xl:w-46 2xl:w-50 h-auto object-contain"
                  src={"./images/logo.png"}
                  draggable={false}
                  alt="logo"
                />
              </Link>
              <div className="hidden md:flex text-white gap-x-4 lg:gap-x-5 text-[14px] md:text-[15px]">
                <Link href={"/privacy"}>
                  <span className="border-b hover:text-gray-300 transition-colors">
                    {t("eleventh_section_privacy_policy")}
                  </span>
                </Link>
                <Link href={"/terms"}>
                  <span className="border-b hover:text-gray-300 transition-colors">
                    {t("eleventh_section_terms_of_service")}
                  </span>
                </Link>
              </div>
              <div className="flex md:hidden flex-col text-white gap-2">
                <p className="text-[18px] sm:text-[20px] mb-1">
                  News Letter Box
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-white/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Mobile Social Links Section */}
            <div className="flex flex-col md:hidden justify-between w-full items-start border-b border-white py-4 sm:py-6 gap-2">
              <p className="text-[11px] sm:text-[12px] text-white leading-5 sm:leading-6">
                {t("eleventh_section_follow_us_on")}:
              </p>
              <div className="flex gap-x-4 sm:gap-x-[18px] w-full text-white items-center">
                <SocialLinks />
              </div>
            </div>

            {/* Mobile Links Section */}
            <div className="flex flex-col gap-3 sm:gap-4 md:hidden justify-between w-full items-start border-b border-white py-4 sm:py-6 text-[11px] sm:text-[12px] text-white">
              <div className="grid grid-cols-2 w-full gap-2 sm:gap-4">
                {/* <PageLinks /> */}
              </div>
              <div className="grid grid-cols-2 w-full gap-2 sm:gap-4">
                <Link href={"/privacy"}>
                  <span className="border-b hover:text-gray-300 transition-colors">
                    {t("eleventh_section_privacy_policy")}
                  </span>
                </Link>
                <Link href={"/terms"}>
                  <span className="border-b hover:text-gray-300 transition-colors">
                    {t("eleventh_section_terms_of_service")}
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile Contact Section */}
            <div className="grid grid-cols-2 md:hidden justify-between w-full items-start border-b border-white py-4 sm:py-6 text-white">
              <div className="text-[11px] sm:text-[12px] text-white">
                {t("eleventh_section_contact_info")}:
              </div>
              <div className="flex flex-col text-[10px] sm:text-[11px] text-white">
                <ContactLinks />
              </div>
            </div>

            {/* Desktop Newsletter and Contact Section */}
            <div className="hidden md:flex justify-between w-full items-start border-b border-white py-8 md:py-10 lg:py-12 text-[14px] md:text-[15px]">
              <div className="flex flex-col text-white w-[40%]">
                <p className="text-[24px] md:text-[28px] lg:text-[32px] mb-4">
                  News letter box
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-base bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-white/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="flex flex-col text-white leading-7 md:leading-8 lg:leading-9">
                <p className="text-white pb-2 md:pb-[6px]">
                  {t("eleventh_section_contact_info")}:
                </p>
                <ContactLinks />
              </div>
              <div className="flex flex-col text-white">
                <p className="text-white leading-7 md:leading-8 lg:leading-9 pb-3 md:pb-[15px]">
                  {t("eleventh_section_follow_us_on")}:
                </p>
                <div className="flex gap-x-3 md:gap-x-4 w-full items-center text-white">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="flex justify-between w-full pt-4 sm:pt-6 md:pt-[31px] lg:pt-[51px]">
              <div className="hidden md:flex gap-2 lg:gap-4 text-white items-start text-left text-wrap text-[14px] md:text-[15px]">
                {/* <PageLinks /> */}
              </div>
              <div className="text-left md:text-right text-wrap w-full md:w-auto">
                <p className="text-[11px] sm:text-[12px] md:text-[15px] leading-5 sm:leading-6 text-white">
                  © All Rights reserved by 2024 - 2025
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Fade>
    </div>
  );
}
