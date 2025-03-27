import React from "react";
import RightIcon from "../../_components/Icons/Right";
// import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Features from "../Pay/Features";

export default function Graves() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center lg:pt-20 lg:px-24 z-10 bg-[#F0F0F5] text-[#15202A] overflow-visible">
      <div className="absolute bottom-0 left-0 right-0 bg-white h-52"></div>
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white py-12 rounded-lg border border-[#CECECE66] z-10 ">
        <div className="relative">
          <h1 className="relative text-[#0B0A2C] font-bold text-[40px] leading-[40px] tracking-[-0.5px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-0.8px] z-10">
            {t("usecase_forth_section_title")}
          </h1>
          <div className="absolute w-20 h-4 bg-green bottom-0 left-8"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 xl:grid grid-cols-2 lg:gap-2">
            <Features />
            <div className="relative flex flex-col items-start justify-center bg-[#F9FF3859] min-h-[340px]  py-4 px-11 lg:px-14 gap-8">
              <div className="relative flex flex-col gap-2 items-start">
                <img src="images/left-bracket.png"></img>
                <span className="max-w-[150px] lg:max-w-[300px] z-10 text-[10px] leading-[9px] lg:text-[15px] lg:leading-[20.5px] lg:tracking-[-0.25px]">
                  {t("usecase_forth_section_word")}
                </span>
                <img
                  src="images/right-bracket.png"
                  className="absolute bottom-0 right-0"
                ></img>
              </div>
              <div className="bg-white flex items-center gap-2 lg:gap-4 p-2 px-2 lg:px-4 rounded-xl">
                <img src="images/upwork.png"></img>
                <div className="flex flex-col rounded-md">
                  <span className="text-sm leading-[17.7px] tracking-[-0.2px] lg:text-[25px] lg:leading-[32px] lg:tracking-[-0.4px]">
                    Lewis Graves
                  </span>
                  <span className="text-[#C0C0C0] text-[8px] leading-[11px] tracking-[-0.1px] font-bold lg:text-[15px] lg:leading-[20px] lg:tracking-[-0.2px]">
                    {t("upwork_freelancer")}
                  </span>
                </div>
              </div>
              <img
                src="images/freelancer.png"
                className="absolute bottom-0 right-0 h-full z-10"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
