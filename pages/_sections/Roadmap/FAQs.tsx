import { useState } from "react";
import DownRightIcon from "../../_components/Icons/DownRight";
import UpIcon from "../../_components/Icons/Up";
import FAQIcon from "../../_components/Icons/FAQIcon";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function FAQs() {
  const { t } = useTranslation();

  const [tabIndex, setTabIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  const FAQ_TYPES = [
    // t("tenth_section_frequently_questions_general"),
    // t("tenth_section_frequently_questions_presale"),
    // t("tenth_section_frequently_questions_dashboard"),
    // t("tenth_section_frequently_questions_other"),
  ];
  const FAQ_CONTENTS = [
    [
      {
        title: 'question 1', //t("tenth_section_frequently_questions_general_1"),
        content: 'answer 1'//t("tenth_section_frequently_questions_general_1_1"),
      },
      {
        title: 'question 2', //t("tenth_section_frequently_questions_general_2"),
        content: 'answer 2'//t("tenth_section_frequently_questions_general_2_1"),
      },
      {
        title: 'question 3', //t("tenth_section_frequently_questions_general_3"),
        content: 'answer 3'//t("tenth_section_frequently_questions_general_3_1"),
      },
      // {
      //   title: 'question 4', //t("tenth_section_frequently_questions_general_4"),
      //   contractAddress: "0xC7f59c4bD6927996186696A0A9cF95dD1727b54E",
      // },
      // {
      //   title: 'question 5', //t("tenth_section_frequently_questions_general_5"),
      //   content: t("tenth_section_frequently_questions_general_5_1"),
      //   url: "https://remittix-organization.gitbook.io/remittix/tokenomics/vip-program",
      // },
    ],
    // [
    //   {
    //     title: t("tenth_section_frequently_questions_presale_1"),
    //     content: t("tenth_section_frequently_questions_presale_1_1"),
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_presale_2"),
    //     content: t("tenth_section_frequently_questions_presale_2_1"),
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_presale_3"),
    //     content: t("tenth_section_frequently_questions_presale_3_1"),
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_presale_4"),
    //     content: t("tenth_section_frequently_questions_presale_4_1"),
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_presale_5"),
    //     content: t("tenth_section_frequently_questions_presale_5_1"),
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_presale_6"),
    //     content: t("tenth_section_frequently_questions_presale_6_1"),
    //   },
    // ],
    // [
    //   {
    //     title: t("tenth_section_frequently_questions_dashboard_1"),
    //     content: t("tenth_section_frequently_questions_dashboard_1_1"),
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_dashboard_2"),
    //     content: t("tenth_section_frequently_questions_dashboard_2_1"),
    //   },
    // ],
    // [
    //   {
    //     title: t("tenth_section_frequently_questions_other_1"),
    //     content: t("tenth_section_frequently_questions_other_1_1"),
    //     email: "support@remittix.io",
    //   },
    //   {
    //     title: t("tenth_section_frequently_questions_other_2"),
    //     content: t("tenth_section_frequently_questions_other_2_1"),
    //     url: "https://gleam.io/FHtn5/250000-remittix-giveaway",
    //   },
    // ],
  ];

  return (
    <div className="bg-faq p-4 md:p-20">
      <div className="flex flex-col w-full text-center gap-4">
        <div className="flex flex-col w-full gap-4">
          <span className="text-center text-[40px] leading-[46px] md:text-[80px] md:leading-[86px] tracking-[-2px]">
            {t("tenth_section_frequently")}{" "}
            <span className="text-green">
              {t("tenth_section_frequently_questions")}
            </span>
          </span>
          <span className="text-[15px] md:text-xl font-normal text-center">
            {t("tenth_section_frequently_questions_content")}
          </span>
        </div>

        <div className="flex gap-1 md:gap-4 justify-center py-4 md:py-12">
          {FAQ_TYPES.map((type, index) => (
            <span
              className={`px-2 md:px-8 py-1 md:py-2 text-[14.55px] md:text-[25px] font-semibold border border-white rounded-full cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis ${
                index === tabIndex ? "bg-green text-black" : ""
              }`}
              onClick={() => {
                setTabIndex(index);
                setSubIndex(0);
              }}
              key={index}
            >
              {type}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 md:gap-8">
          {FAQ_CONTENTS[tabIndex].map((faq, index) => (
            <div className="grid md:grid-cols-[80px_1fr]" key={`0-${index}`}>
              <div className="hidden md:flex faq-item mt-2 items-center justify-center linear-border-top-left">
                <FAQIcon className="text-[#D4FC34]" />
              </div>
              <div
                className="flex flex-col text-left faq-content px-8 py-4 gap-4 relative cursor-pointer"
                onClick={() => setSubIndex(index)}
              >
                {index === subIndex ? (
                  <>
                    <span className=" text-[24px] font-bold text-green tracking-[-0.8px] linear-border-top-left">
                      {faq.title}
                    </span>
                    <UpIcon className="absolute right-4 bottom-4 border rounded-full border-[#EDEDED1F] bg-[#FFFFFF0F]" />
                  </>
                ) : (
                  <>
                    <span className="text-[20px] font-normal text-[#FFFFFF94] tracking-[-0.8px] pr-4">
                      {faq.title}
                    </span>
                    <DownRightIcon className="absolute right-4 bottom-4 border rounded-full border-[#EDEDED1F] bg-[#FFFFFF0F]" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
