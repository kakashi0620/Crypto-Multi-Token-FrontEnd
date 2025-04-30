import React from "react";
import RightIcon from "../../_components/Icons/Right";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Competition() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center z-10 bg-[#F0F0F5] text-[#15202A]">
      <div className="w-full flex flex-col items-center px-4 2xl:px-20 md:gap-2 bg-white pt-6">
        <div className="w-full flex items-center gap-2 pb-4 max-w-[1200px]">
          <div className="relative">
            <span className="relative text-4xl z-10 ml-2 font-bold md:leading-[38px] md:tracking-[-1px]">
              {t("blog")}
            </span>
            <div className="bg-[#6EC1E4] md:h-4 w-14 absolute bottom-0 left-0" />
          </div>
          <hr className="w-full border border-[#DADADA]"></hr>
        </div>
        <div className="blog-header flex flex-col bg-[#041019] rounded-[10px] relative text-white bg-competition max-w-[1200px]">
          <div className="flex flex-col gap-12 p-4 md:p-24">
            <span className="text-[30px] md:text-[44.44px] leading-[37.05px] md:leading-[45px] tracking-[-1.46px] md:tracking-[-1.78px] font-bold max-w-[510px]">
              {t("blogpage_first_section_enter_our_copmetition")}{" "}
              <span className="text-[#6EC1E4]">$250K</span>{" "}
              {t("blogpage_first_section_trading_account")}
            </span>

            <span className="text-[15px] md:text-xl font-normal leading-[24.7px] md:leading-[30px] tracking-[-0.66px] md:tracking-[-0.8px] max-w-[585px]">
              {t("blogpage_first_section_join_our_competition")}
            </span>

            <Link
              href={"https://gleam.io/FHtn5/250000-remittix-giveaway"}
              target="_blank"
              className="w-full"
            >
              <button className="third w-full md:w-[343px] h-[62.98px] md:h-[71px] relative">
                <span className="text-[14.65px] leading-[33px] md:leading-[45px] md:text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                  {t("ninth_section_remittix_in_detail_competition_button")}
                </span>
                <RightIcon className="absolute right-4 scale-50" />
              </button>
            </Link>
          </div>
        </div>

        <div className="my-4 w-full md:invisible">
          <Link
            href={"https://gleam.io/FHtn5/250000-remittix-giveaway"}
            target="_blank"
            className="w-full"
          >
            <button className="third w-full md:w-[343px] h-[62.98px] md:h-[71px] relative !bg-black !text-[#6EC1E4]">
              <span className="text-[14.61px] md:text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                {t("join_presale")}
              </span>
              <RightIcon className="absolute right-4 scale-50" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
