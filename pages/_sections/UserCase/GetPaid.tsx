import React from "react";
import RightIcon from "../../_components/Icons/Right";
// import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function GetPaid() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center relative z-20 bg-[#F0F0F5] text-[#15202A]">
      <div className="getpaid relative w-full flex flex-col items-start px-4 lg:px-12 2xl:px-20 py-[80px] md:gap-12 h-[500px] md:h-full">
        <div className="relative flex">
          <span className="relative text-[40px] leading-[40px] tracking-[-0.5px] lg:text-[90px] lg:leading-[77px] lg:tracking-[-2px] font-bold text-black z-10">
            {t("usecase_third_section_title")}
          </span>
          <div className="bg-[#F9FF38] absolute w-20 h-3 top-6 left-20 lg:w-40 lg:h-6 lg:top-12 lg:left-40"></div>
          <div className="bg-[#F9FF38] absolute w-20 h-3 bottom-4 lg:w-40 lg:h-6 lg:bottom-8 lg:right-40"></div>
        </div>
        <div className="flex w-full justify-end items-center py-40 invisible md:visible">
          <div className="max-w-[800px] flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-white rounded-lg p-4">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[10.3px] leading-[12px] tracking-[-0.13px] lg:text-[20px] lg:leading-[20.6px] lg:tracking-[-0.26px]">
                {t("usecase_third_section_content_1")}
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-lg p-4">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[10.3px] leading-[12px] tracking-[-0.13px] lg:text-[20px] lg:leading-[20.6px] lg:tracking-[-0.26px]">
                {t("usecase_third_section_content_2")}
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-lg p-4">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[10.3px] leading-[12px] tracking-[-0.13px] lg:text-[20px] lg:leading-[20.6px] lg:tracking-[-0.26px]">
                {t("usecase_third_section_content_3")}
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-lg p-4">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[10.3px] leading-[12px] tracking-[-0.13px] lg:text-[20px] lg:leading-[20.6px] lg:tracking-[-0.26px]">
                {t("usecase_third_section_content_4")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center bg-[#6c6e6c] px-6 pb-12 border-none md:invisible md:h-0 -mt-5 z-10">
        <div className="max-w-[800px] w-full flex flex-col gap-2">
          <div className="flex items-center gap-4 bg-white rounded-lg p-4">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="black"
                />
              </svg>
            </div>
            <span className="text-[10px] md:text-[20px]">
              {t("usecase_third_section_content_1")}
            </span>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-lg p-4">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="black"
                />
              </svg>
            </div>
            <span className="text-[10px] md:text-[20px]">
              {t("usecase_third_section_content_2")}
            </span>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-lg p-4">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="black"
                />
              </svg>
            </div>
            <span className="text-[10px] md:text-[20px]">
              {t("usecase_third_section_content_3")}
            </span>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-lg p-4">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91421 13.5858C8.13317 14.3668 6.86683 14.3668 6.08579 13.5858L1.41421 8.91421C0.633165 8.13317 0.633165 6.86683 1.41421 6.08579L6.08579 1.41421C6.86683 0.633165 8.13316 0.633165 8.91421 1.41421L13.5858 6.08579C14.3668 6.86683 14.3668 8.13316 13.5858 8.91421L8.91421 13.5858Z"
                  fill="black"
                />
              </svg>
            </div>
            <span className="text-[10px] md:text-[20px]">
              {t("usecase_third_section_content_4")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
