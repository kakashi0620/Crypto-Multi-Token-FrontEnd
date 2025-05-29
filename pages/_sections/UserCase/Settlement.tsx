import React from "react";
import { useTranslation } from "react-i18next";
import RightIcon from "../../_components/Icons/Right";
import Link from "next/link";

export default function Settlement() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col justify-center py-12 md:py-32 z-10 relative gap-24 ">
      <div className="usecase w-full flex flex-col px-4 lg:px-12 2xl:px-20 relative z-10 gap-6">
        <div className="text-[40px] leading-[40px] lg:leading-[66px] tracking-[0.5px] lg:tracking-[-0.8px] lg:text-[80px] font-bold">
          <span>{t("usecase_second_section_title")}</span>{" "}
          <span className="text-[#F9FF38]">
            {t("usecase_second_section_title_green")}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="lg:grid grid-cols-3 gap-5">
            <div className="blog-card p-9 pb-12 flex flex-col gap-9">
              <div className="px-4 py-9 flex justify-between gap-2 border border-[#F9FF38] rounded-lg bg-[#00000082] h-[200px]">
                <div className="card flex flex-col items-center gap-2 bg-[#11181E52] p-4 rounded-xl">
                  <div className="flex flex-col items-center">
                    <span className="text-[#84FF38] text-[18px] lg:text-xl font-bold">
                      $2000
                    </span>
                    <span className="text-[9px] lg:text-[10px] leading-[18.5px] lg:leading-[20.5px] tracking-[-0.2px] lg:tracking-[-0.25px]">
                      2000 USDT
                    </span>
                  </div>
                  <div className="w-1/2 border border-[#2A3031]"></div>
                  <div className="flex gap-1">
                    <img src="images/ethereum_icon.svg"></img>
                    <span className="text-[10.5px] lg:text-[11.5px] leading-[14.5px] lg:leading-[16px] tracking-[-0.2px] lg:tracking-[-0.2px]">
                      0x827..7120
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <button className="bg-[rgb(249,255,56)] text-[#040B0F] text-[13.5px] lg:text-[15px] leading-[18.5px] lg:leading-[20.5px] tracking-[-0.2px] lg:tracking-[-0.25px] font-bold px-5 py-1 rounded-full">
                    {t("switch")}
                  </button>
                  <span className="text-[9px] leading-[12.5px] tracking-[-0.2px] lg:text-[10px] lg:leading-[14px] lg:tracking-[-0.25px]">
                    {t("usecase_second_section_card_your_payment")}{" "}
                    <span className="text-[#F9FF38]">Ethereum Network</span>
                  </span>
                  <div className="card text-[10px] flex flex-col py-1 px-2 rounded-lg">
                    <span className="text-[9.5px] lg:text-[10.8px] leading-[13.4px] lg:leading-[14.8px] tracking-[-0.2px] text-[#FFFFFF5E]">
                      {t("usecase_first_section_card_ux_ui_development")}
                    </span>
                    <span className="text-[9.5px] lg:text-[10.8px] leading-[13.4px] lg:leading-[14.8px] tracking-[-0.2px] text-white">
                      LEWIS GRAVES
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[#FCFF8C] font-bold text-[22.6px] leading-[18.6px] tracking-[-0.25px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("usecase_second_section_first_card_title")}
                </span>
                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                  {t("usecase_second_section_first_card_content_1")}
                </span>
                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                  {t("usecase_second_section_first_card_content_2")}
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <img src="images/more.png"></img>
              </div>
            </div>

            <div className="blog-card p-9 pb-12 flex flex-col gap-9">
              <div className="px-4 py-9 flex flex-col items-center gap-3 border border-[#F9FF38] rounded-lg bg-[#00000082] h-[200px]">
                <button className="bg-[#F9FF38] text-sm text-black font-bold px-7 py-3 rounded-[4.5px]">
                  {t("connect_wallet")}
                </button>
                <div className="flex items-center gap-4">
                  <img src="images/phantom.png" className="w-10 h-10 object-contain"></img>
                  <img src="images/metamask.png" className="w-10 h-10 object-contain"></img>
                  <img src="images/trustwallet.png" className="w-11 h-11 object-contain"></img>
                </div>
                <span>
                  and <b>50</b>+ more
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[#FCFF8C] font-bold text-[22.6px] leading-[18.6px] tracking-[-0.25px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("usecase_second_section_second_card_title")}
                </span>
                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                  {t("usecase_second_section_second_card_content_1")}
                </span>
                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                  {t("usecase_second_section_second_card_content_2")}
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <img src="images/more.png"></img>
              </div>
            </div>

            <div className="blog-card p-9 pb-12 flex flex-col gap-9">
              <div className="px-4 py-9 flex flex-col items-center gap-3 border border-[#F9FF38] rounded-lg bg-[#00000082] h-[200px]">
                <img
                  src="images/check.svg"
                  className="w-[48px] scale-[250%]"
                ></img>
                <span className="text-sm max-w-48">
                  {t("usecase_second_section_third_card_you_are_now")}
                </span>
                <span className="text-[12px] text-[#F9FF38]">
                  {t("view_payment_link")}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[#FCFF8C] font-bold text-[22.6px] leading-[18.6px] tracking-[-0.25px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("usecase_second_section_third_card_title")}
                </span>
                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                  {t("usecase_second_section_third_card_content_1")}
                </span>
                <span className="text-[13.5px] leading-[18.5px] tracking-[-0.2px] lg:text-[15px] lg:leading-[20.5px]">
                  {t("usecase_second_section_third_card_content_2")}
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <img src="images/more.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-overview">
        <img
          className="top-left"
          src="/images/background/header.svg"
          alt="header"
        />
        <img
          className="bottom-left"
          src="/images/background/bank-account.svg"
          alt="bank"
        />
        {/* <img
          className="bottom-right"
          src="/images/background/cross-border.svg"
          alt="border"
        /> */}
      </div>
    </main>
  );
}
