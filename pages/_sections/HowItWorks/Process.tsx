import React from "react";
import { useTranslation } from "react-i18next";
import RightIcon from "../../_components/Icons/Right";
import Link from "next/link";

export default function Settlement() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col justify-center py-10 lg:py-32 z-10 relative lg:gap-12 ">
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 relative z-10 gap-6">
        <div className="divider mb-4"></div>
        <div className="text-[40px] leading-[40px] tracking-[-0.5px] lg:text-[80px] lg:leading-[66px] lg:tracking-[-0.8px]">
          <span className="text-[#F9FF38] font-bold">
            {t("howitworks_second_section_title")}
          </span>
        </div>
        <div className="divider lg:w-[500px] opacity-30"></div>
      </div>

      <div className="flex flex-col items-center z-10 p-8 overflow-hidden">
        <div className="flex flex-col gap-2 lg:relative lg:w-[900px] lg:h-[900px]">
          <div className="blog-card lg:absolute lg:top-0 lg:right-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
            <div className="p-6 flex flex-col gap-2 border-[0.5px] border-[#F9FF38] rounded-lg bg-[#00000082]">
              <div className="h-[40px]"></div>
              <div className="flex flex-col gap-1 lg:gap-2">
                <span className="text-[7px] lg:text-[10px] font-medium leading-[9.3px]">
                  {t("account_number_Iban")}
                </span>
                <span className="bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2 text-[#FFFFFF59] text-[10px] lg:text-[14px]">
                  23242324232423242324
                </span>
              </div>

              <div className="flex flex-col gap-1 lg:gap-2">
                <span className="text-[7px] lg:text-[10px]">
                  {t("Swift_BIC_Number")}
                </span>
                <span className="bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2 text-[10px] lg:text-[14px]">
                  BANKO102
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 lg:mt-2"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="#F9FF38"
                />
              </svg>
              <div className="flex flex-col gap-5">
                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("process_step1_title")}
                </span>

                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step1_content1")}
                </span>
                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step1_content2")}
                </span>
              </div>
            </div>
            <div className="level-number absolute text-green text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
              01
            </div>

            <div className="absolute text-[#F9FF38] text-[16px] lg:leading-[-0.8px] lg:text-[20px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
              {t("step")} 01
            </div>
          </div>

          <div className="relative mb-12">
            <img
              src="images/line4.png"
              className="lg:h-0 absolute -right-16 top-3"
            ></img>
          </div>

          <div className="blog-card lg:absolute lg:bottom-0 lg:left-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
            <div className="p-6 flex flex-col gap-2 border-[0.5px] border-[#F9FF38] rounded-lg bg-[#00000082]">
              <div className="flex flex-col gap-2">
                <span className="text-[7px] lg:text-[10px]">
                  {t("process_step2_chris_receives")}
                </span>
                <div className="flex justify-between bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2 text-[#FFFFFF59]">
                  <span className="text-[10px] lg:text-[14px]">€ 3,800</span>
                  <span className="text-[10px] lg:text-[14px]">EUR</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[7px] lg:text-[10px]">
                  {t("payment_currency")}
                </span>
                <div className="flex items-center gap-1 bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2">
                  <img src="images/xrp.png"></img>
                  <span className="text-[10px] lg:text-[14px]">XRP</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[7px] lg:text-[10px]">
                  {t("reference")}
                </span>
                <div className="bg-[#111B1F] rounded-lg border border-[#FFFFFF1F] p-2">
                  <span className="text-[10px] lg:text-[14px]">
                    Legal fees (INV_0123)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 lg:mt-2"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="#F9FF38"
                />
              </svg>
              <div className="flex flex-col gap-5">
                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("process_step2_title")}
                </span>

                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step2_content1")}
                </span>
                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step2_content2")}
                </span>
              </div>
            </div>
            <div className="level-number absolute text-green text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
              02
            </div>

            <div className="absolute text-[#F9FF38] text-[16px] lg:leading-[-0.8px] lg:text-[20px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
              {t("step")} 02
            </div>
          </div>
          <div className="relative mb-12">
            <img
              src="images/line4.png"
              className="lg:h-0 absolute -right-16 top-3"
            ></img>
          </div>
          <img
            src="images/line1.png"
            className="h-0 lg:h-[350px] lg:w-[420px] lg:absolute bottom-0 right-[70px]"
          ></img>
        </div>

        <div className="flex flex-col gap-2 lg:relative lg:w-[900px] lg:h-[900px] mb-4">
          <div className="blog-card lg:absolute lg:top-0 lg:right-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
            <div className="px-6 py-3 flex flex-col gap-2 border border-[#F9FF38] rounded-lg bg-[#00000082]">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center justify-between gap-2 pt-4">
                  <div className="flex flex-col items-center gap-1 text-[7px] lg:text-[9px]">
                    <span>{t("you")}</span>
                    <img src="images/solana.png"></img>
                    <span className="text-[#F9FF38]">4,312.71 USDC</span>
                  </div>
                  <div className="w-full bg-green rounded-md text-[6px] lg:text-[10px] text-black text-center font-semibold py-3">
                    {t("pay_manually")}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between pt-4">
                  <div className="flex flex-col items-center gap-3 text-[7px] lg:text-[9px]">
                    <span>Carter Legal</span>
                    <img src="images/bitcoin.png"></img>
                    <span className="text-[#F9FF38]">4,000 EUR</span>
                  </div>
                  <div className="w-full bg-[#11181E52] rounded-md text-[6px] lg:text-[10px] text-green text-center font-semibold py-3 border border-[#F9FF3845]">
                    {t("Use_Connected_Wallet")}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 lg:mt-2"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="#F9FF38"
                />
              </svg>
              <div className="flex flex-col gap-5">
                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("process_step3_title")}
                </span>

                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step3_content")}
                </span>
                <span className="text-sm h-10"></span>
              </div>
            </div>
            <div className="level-number absolute text-green text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
              03
            </div>

            <div className="absolute text-[#F9FF38] text-[16px] lg:text-[20px] lg:leading-[-0.8px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
              {t("step")} 03
            </div>
          </div>

          <div className="relative mb-12">
            <img
              src="images/line4.png"
              className="lg:h-0 absolute -right-16 top-3"
            ></img>
          </div>

          <div className="blog-card lg:absolute lg:bottom-0 lg:left-0 p-7 lg:p-9 pb-12 flex flex-col gap-9 z-10 lg:min-h-[530px]">
            <div className="px-6 py-6 flex flex-col items-center gap-2 border border-[#F9FF38] rounded-lg bg-[#00000082]">
              <img
                src="images/check.svg"
                className="w-[50px] scale-[300%]"
              ></img>
              <span className="text-[12px] text-[#F9FF38]">
                {t("Payment_Successful")}
              </span>
              <span className="text-center max-w-[200px]">
                {t("usecase_second_section_third_card_you_are_now")}
              </span>
            </div>
            <div className="flex gap-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 lg:mt-2"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="#F9FF38"
                />
              </svg>
              <div className="flex flex-col gap-5">
                <span className="text-[#FCFF8C] font-bold text-[19.7px] leading-[19px] tracking-[-0.2px] lg:text-2xl lg:leading-[20.5px] lg:tracking-[-0.26px]">
                  {t("process_step4_title")}
                </span>

                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step4_content1")}
                </span>
                <span className="text-[11.8px] leading-[16.24px] tracking-[-0.2px] lg:text-sm lg:leading-[20.6px] lg:tracking-[0.26px]">
                  {t("process_step4_content2")}
                </span>
              </div>
            </div>
            <div className="level-number absolute text-green text-[34px] lg:text-[24px] font-semibold flex items-center justify-center scale-150 -bottom-8 left-10 lg:-left-6">
              04
            </div>

            <div className="absolute text-[#F9FF38] text-[16px] lg:leading-[-0.8px] lg:text-[20px] bg-[#16232E] rounded-xl py-2 lg:py-3 px-11 lg:px-14 -bottom-5 lg:-bottom-7 right-12 lg:-right-4">
              {t("step")} 04
            </div>
          </div>

          <div className="relative mb-7">
            <img
              src="images/line4.png"
              className="lg:h-0 absolute -right-16 top-3"
            ></img>
          </div>

          <img
            src="images/line2.png"
            className="h-0 lg:h-auto lg:absolute lg:top-0 lg:left-[320px] w-[180px]"
          ></img>
          <img
            src="images/line3.png"
            className="h-0 lg:h-auto lg:absolute lg:bottom-0 lg:right-[70px]"
          ></img>
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
        <img
          className="top-right"
          src="/images/background/cross-border.svg"
          alt="border"
        />
        <img
          className="bottom-left"
          src="/images/background/cross-border.svg"
          alt="border"
        />
        <img
          className="top-right"
          src="/images/background/cross-border.svg"
          alt="border"
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
