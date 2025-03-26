import React from "react";
import RightIcon from "../../_components/Icons/Right";
import { Link as ScrollLink } from "react-scroll";
import Video from "./Video";
import { useTranslation } from "react-i18next";

export default function Community() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center py-20 z-10 bg-[#F0F0F5] text-[#15202A]">
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 items-center">
        <div className="flex flex-col-reverse md:flex-col items-center justify-center">
          <div className="text-[39.59px] md:text-[60px] tracking-[-0.8px] font-bold text-black relative flex">
            <span className="relative z-10 text-center">
              {t("fifth_section_community")}
            </span>
            <div className="bg-yellow h-4 w-32 absolute top-8 left-12" />
            <div className="bg-yellow h-4 w-28 absolute bottom-5 -right-2 hidden md:flex" />
          </div>
          <img src="/images/fivestar.png" alt="star" />
        </div>

        <div className="grid md:grid-cols-2 w-full gap-4">
          <div className="flex justify-center md:justify-end h-[320px]">
            <iframe
              className="max-w-[560px] w-full"
              width="98%"
              height=""
              src="https://www.youtube.com/embed/QheQsp3Si-o"
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <iframe
              className="max-w-[560px] w-full h-[320px]"
              width="98%"
              height=""
              src="https://www.youtube.com/embed/w_6fe38l0IQ"
            />
          </div>
        </div>

        <div className="flex justify-center w-full">
          {/* <ScrollLink
            to="presale"
            className="flex items-center justify-center relative bg-black rounded-lg text-white w-full md:w-[321px] h-[71px] cursor-pointer"
          >
            <span className="text-[21px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
              {t("join_presale")}
            </span>
            <div className="absolute right-4">
              <RightIcon className="scale-50" />
            </div>
          </ScrollLink> */}
        </div>
      </div>
    </main>
  );
}
