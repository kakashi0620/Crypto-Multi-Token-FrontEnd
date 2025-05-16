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
import { motion } from "framer-motion";

function StatsItem({
  value,
  label,
  delay
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center p-2"
    >
      <span className="text-xl md:text-2xl font-bold text-[#6EC1E4]">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </motion.div>
  );
}

function FeatureItem({
  text,
  delay
}: {
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-base sm:text-xl font-normal text-light-white flex items-center gap-2"
    >
      <span className="text-[#6EC1E4]">✔</span>
      {text}
    </motion.div>
  );
}

export default function Overview() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center lg:pt-32 z-10 relative">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 lg:-mt-10">
          <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
            {/* Stats Section */}
            <div className="flex flex-col gap-2 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] leading-[38px] sm:leading-[46px] md:leading-[54px] lg:leading-[76px] xl:leading-[96px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] text-light-white max-w-[700px] text-center lg:text-left"
              >
                Invest in Crypto Private Deal at VC Price
                {/* <span className="text-lg sm:text-xl md:text-2xl">at VC price</span> */}
              </motion.h1>
              <div className="flex gap-2 md:gap-4 lg:gap-8 items-center justify-center lg:justify-start">
                <StatsItem value="$515K" label="Invested" delay={0.1} />
                <StatsItem value="26" label="Deals" delay={0.2} />
                <StatsItem value="135" label="Investors" delay={0.3} />
                <StatsItem value="71" label="Leaders" delay={0.4} />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center relative z-10">
            {/* Video Section */}
            <div className="onStep flex justify-center z-10 w-full">
              <div className="relative w-full max-w-[576px]">
                <video
                  className="relative w-full pointer-events-none rounded-[11.27px] border border-[#6EC1E4]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/video/welcome.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10 flex">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#6EC1E4] to-transparent opacity-50 sm:opacity-75 md:opacity-100" />
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 mb-6 sm:mb-8 md:mb-10">
          <div className="flex w-full justify-center relative z-0">
            <div className="onStep flex justify-center z-10 w-full">
              <div className="relative w-full max-w-[576px]">
                <video
                  className="relative w-full pointer-events-none rounded-[11.27px] border border-[#6EC1E4]"
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
          </div>
          <div className="flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-6 relative z-10 font-semibold justify-center items-center lg:items-start text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[45px] xl:text-[50px] leading-[34px] sm:leading-[38px] md:leading-[42px] lg:leading-[52px] xl:leading-[60px] tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.8px] text-light-white max-w-[700px]"
            >
              Why choose us?
            </motion.h2>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 lg:items-start">
              <FeatureItem text="Dedicated Telegram Group" delay={0.1} />
              <FeatureItem text="Launched Hyped Project" delay={0.2} />
              <FeatureItem text="Low Fees" delay={0.3} />
              <FeatureItem text="Supported by Metamask" delay={0.4} />
              <FeatureItem text="Referral Commission(Up to 3rd level)" delay={0.5} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
