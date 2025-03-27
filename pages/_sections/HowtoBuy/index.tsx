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
                How to work
              </span>
            </div>
            <span className="text-[15px] lg:text-xl font-normal text-center">
              Follow these n simple steps to x x x x x
            </span>
          </div>
        {/* </Element> */}
        <div className="flex-grow mt-12">
          <BuySteps />
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white py-12">
        <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
          Profit Calculator
        </span>
        <span>
          profit content
        </span>
      </div>
    </main>
  );
}
