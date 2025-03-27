import React from "react";
import { useTranslation } from "react-i18next";
import RightIcon from "../../_components/Icons/Right";
import Link from "next/link";

export default function DigDeep() {
  const { t } = useTranslation();

  const Blogs = [
    {
      image: "images/blog/blog-pic1.png",
      title: t("blogpage_second_section_card_title_1"),
      content: t("blogpage_second_section_card_content_1"),
      date: "September 20, 2024",
    },
    {
      image: "images/blog/blog-pic2.png",
      title: t("blogpage_second_section_card_title_1"),
      content: t("blogpage_second_section_card_content_1"),
      date: "September 20, 2024",
    },
    {
      image: "images/blog/blog-pic3.png",
      title: t("blogpage_second_section_card_title_1"),
      content: t("blogpage_second_section_card_content_1"),
      date: "September 20, 2024",
    },
    {
      image: "images/blog/blog-pic4.png",
      title: t("blogpage_second_section_card_title_1"),
      content: t("blogpage_second_section_card_content_1"),
      date: "September 20, 2024",
    },
    {
      image: "images/blog/blog-pic5.png",
      title: t("blogpage_second_section_card_title_1"),
      content: t("blogpage_second_section_card_content_1"),
      date: "September 20, 2024",
    },
    {
      image: "images/blog/blog-pic6.png",
      title: t("blogpage_second_section_card_title_1"),
      content: t("blogpage_second_section_card_content_1"),
      date: "September 20, 2024",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center py-9 md:py-32 z-10 relative gap-24 ">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10 gap-3 md:gap-6">
        <div className="text-[40px] md:text-4xl leading-[46px] md:leading-[77px] tracking-[-0.5px] md:tracking-[-0.8px] font-bold">
          <span className="text-yellow">
            {t("blogpage_second_section_digging_deep")}
          </span>{" "}
          <span>{t("blogpage_second_section_a_dive_into")}</span>
        </div>
        <span className="text-[#A6B1C5] text-[18px] md:text-[19px] leading-[18px] md:leading-[30.7px] tracking-[-0.38px]">
          {t("blogpage_second_section_the_future_mining")}
        </span>

        <div className="md:w-full">
          <div className="divider" />
        </div>

        <div className="flex flex-col md:grid grid-cols-3 gap-5 ">
          {Blogs.map((item, index) => (
            <div className="blog-card p-3" key={index}>
              <div className="relative">
                <div className="absolute flex items-center top-2 left-2 text-2xl gap-2 z-10">
                  <img src="images/logo.png" className="h-5"></img>
                  <span className="text-[22px] leading-[28.3px] md:leadnig-[30.7px] md:text-[24px] font-bold">
                    {t("remittix")}
                  </span>
                </div>
                <div className="shadow absolute -top-1 left-0 right-0 h-2/3"></div>
                <img src={item.image}></img>
              </div>
              <span className="title">{item.title}</span>
              <div className="divider" />
              <span className="content">{item.content}</span>
              <div className="flex flex-grow justify-between items-center">
                <span className="date">{item.date}</span>
                <div className="flex items-center">
                  <span className="text-[#FBFF25] font-bold md:text-[18.3px] md:leading-[23.3px] md:tracking-[-0.7px]">
                    {t("seventh_section_how_to_buy_read_more")}
                  </span>
                  <RightIcon className="scale-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center relative bg-yellow rounded-lg text-black w-[250px] h-[48px] cursor-pointer">
        <span className="text-[16.5px] lg:text-[21px] font-bold leading-[37px] lg:leading-[27px] overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
          {t("learn_more")}
        </span>
        <div className="absolute right-4">
          <RightIcon className="scale-50" />
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
      </div>
    </main>
  );
}
