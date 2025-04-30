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
      className="text-xl font-normal text-light-white flex items-center gap-2"
    >
      <span className="text-[#6EC1E4]">✔</span>
      {text}
    </motion.div>
  );
}

export default function Overview() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center py-20 z-10 relative">
      <div className="w-full flex flex-col gap-6 relative z-10 font-semibold justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 px-4 lg:px-20">
            {/* Stats Section */}
            <div className="w-full lg:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[15px] lg:text-[50px] leading-[54px] lg:leading-[96px] tracking-[-2px] text-light-white whitespace-nowrap min-w-fit"
              >
                Invest in Crypto Private Deal
              </motion.h1>
              <div className="text-gray-500 mb-1 text-2xl">at VC price</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 pt-4">
                <StatsItem value="$515K" label="Invested" delay={0.1} />
                <StatsItem value="26" label="Deals" delay={0.2} />
                <StatsItem value="135" label="Investors" delay={0.3} />
                <StatsItem value="71" label="Leaders" delay={0.4} />
              </div>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <div className="onStep flex justify-center z-10 w-full">
                <video
                  className="w-full max-w-[576px] pointer-events-none rounded-[11.27px]"
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
      </div>

      <div className="w-full py-10 hidden lg:flex">
        <Divider />
      </div>

      <div className="w-full px-4 lg:px-20">
        <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20">
          <div className="flex w-full justify-center mb-10 relative z-0">
            <div className="onStep flex justify-end z-10 w-full">
              <video
                className="max-w-[576px] w-full pointer-events-none rounded-[11.27px]"
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
          
          <div className="flex flex-col gap-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[36px] lg:text-[50px] leading-[1.2] tracking-[-0.8px] text-light-white font-semibold"
            >
              Why choose us?
            </motion.h2>
            <div className="flex flex-col gap-4">
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
