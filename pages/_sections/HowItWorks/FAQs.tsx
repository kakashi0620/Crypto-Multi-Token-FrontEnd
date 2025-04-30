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
    t("tenth_section_frequently_questions_general"),
    t("tenth_section_frequently_questions_presale"),
    t("tenth_section_frequently_questions_dashboard"),
    t("tenth_section_frequently_questions_other"),
  ];
  const FAQ_CONTENTS = [
    [
      {
        title: t("tenth_section_frequently_questions_general_1"),
        content: t("tenth_section_frequently_questions_general_1_1"),
      },
      {
        title: t("tenth_section_frequently_questions_general_2"),
        content: t("tenth_section_frequently_questions_general_2_1"),
      },
      {
        title: t("tenth_section_frequently_questions_general_3"),
        content: t("tenth_section_frequently_questions_general_3_1"),
      },
      {
        title: t("tenth_section_frequently_questions_general_4"),
        contractAddress: "0xC7f59c4bD6927996186696A0A9cF95dD1727b54E",
      },
      {
        title: t("tenth_section_frequently_questions_general_5"),
        content: t("tenth_section_frequently_questions_general_5_1"),
        url: "https://remittix-organization.gitbook.io/remittix/tokenomics/vip-program",
      },
    ],
    [
      {
        title: t("tenth_section_frequently_questions_presale_1"),
        content: t("tenth_section_frequently_questions_presale_1_1"),
      },
      {
        title: t("tenth_section_frequently_questions_presale_2"),
        content: t("tenth_section_frequently_questions_presale_2_1"),
      },
      {
        title: t("tenth_section_frequently_questions_presale_3"),
        content: t("tenth_section_frequently_questions_presale_3_1"),
      },
      {
        title: t("tenth_section_frequently_questions_presale_4"),
        content: t("tenth_section_frequently_questions_presale_4_1"),
      },
      {
        title: t("tenth_section_frequently_questions_presale_5"),
        content: t("tenth_section_frequently_questions_presale_5_1"),
      },
      {
        title: t("tenth_section_frequently_questions_presale_6"),
        content: t("tenth_section_frequently_questions_presale_6_1"),
      },
    ],
    [
      {
        title: t("tenth_section_frequently_questions_dashboard_1"),
        content: t("tenth_section_frequently_questions_dashboard_1_1"),
      },
      {
        title: t("tenth_section_frequently_questions_dashboard_2"),
        content: t("tenth_section_frequently_questions_dashboard_2_1"),
      },
    ],
    [
      {
        title: t("tenth_section_frequently_questions_other_1"),
        content: t("tenth_section_frequently_questions_other_1_1"),
        email: "support@remittix.io",
      },
      {
        title: t("tenth_section_frequently_questions_other_2"),
        content: t("tenth_section_frequently_questions_other_2_1"),
        url: "https://gleam.io/FHtn5/250000-remittix-giveaway",
      },
    ],
  ];

  return (
    <main className="howitworks flex flex-col items-center justify-center pb-20 z-10 bg-[#F0F0F5] text-[#15202A]">
      <div className="bg-faq p-4 md:p-20 pt-[72px] md:pt-[130px] md:!-mt-10 z-20">
        <div className="flex flex-col w-full text-center gap-4">
          <div className="flex flex-col w-full gap-3 md:gap-7">
            <div className="relative">
              <span className="relative text-center text-[40px] leading-[46px] tracking-[-0.8px] md:text-[80px] md:leading-[80px] md:tracking-[-0.8px] font-bold text-black z-10">
                {t("tenth_section_frequently")}{" "}
                {t("tenth_section_frequently_questions")}
              </span>
              <div className="absolute bg-[#6EC1E4] w-20 h-4 top-5 left-40 lg:w-32 lg:h-4 lg:top-10 lg:left-80"></div>
              <div className="absolute bg-[#6EC1E4] w-20 h-4 bottom-3 right-40 lg:w-32 lg:h-6 lg:bottom-6 lg:right-72"></div>
            </div>
            <span className="text-[15px] md:text-xl font-normal text-center text-black">
              {t("tenth_section_frequently_questions_content")}
            </span>
          </div>

          <div className="flex gap-1 md:gap-4 justify-center py-4 md:py-12">
            {FAQ_TYPES.map((type, index) => (
              <span
                className={`px-2 md:px-8 py-1 md:py-2 text-[14.55px] md:text-[25px] font-semibold border border-black rounded-full cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis ${
                  index === tabIndex ? "bg-black text-[#6EC1E4]" : ""
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
                  <FAQIcon className="text-black" />
                </div>
                <div
                  className="flex flex-col text-left faq-content px-8 py-4 gap-4 relative cursor-pointer"
                  onClick={() => setSubIndex(index)}
                >
                  {index === subIndex ? (
                    <>
                      <span className=" text-[24px] font-bold text-[#1A1A1A] tracking-[-0.8px] linear-border-top-left">
                        {faq.title}
                      </span>
                      <div className="flex flex-col pb-12 pr-4">
                        {faq.url && (
                          <div className="text-[15px] md:text-[18px] text-[#00000094] font-normal max-w-[580px] md:max-w-[90%] tracking-[-0.8px]">
                            {faq.content}{" "}
                            <Link
                              className="underline text-[#00000094] font-normal hover:text-white break-all"
                              href={faq.url}
                              target="_blank"
                            >
                              {t("here")}
                            </Link>
                            {"."}
                          </div>
                        )}
                        {!faq.url && faq.content && (
                          <span className="text-[15px] md:text-[18px] text-[#00000094] font-normal max-w-[580px] md:max-w-[90%] tracking-[-0.8px]">
                            {faq.content}
                          </span>
                        )}
                        {faq.contractAddress && (
                          <span className="text-[15px] md:text-[18px] text-[#00000094] font-normal max-w-[580px] md:max-w-[90%] tracking-[-0.8px] break-all">
                            {faq.contractAddress}
                          </span>
                        )}
                        {faq.email && (
                          <Link
                            className="underline text-[#00000094] font-normal hover:text-white break-all"
                            href={`mailto:${faq.email}`}
                            target="_blank"
                          >
                            {faq.email}
                          </Link>
                        )}
                      </div>
                      <UpIcon className="absolute right-4 bottom-4 border rounded-full border-[#0000001F] bg-[#FFFFFF0F]" />
                    </>
                  ) : (
                    <>
                      <span className="text-[20px] font-normal text-[#000000] tracking-[-0.8px] pr-4">
                        {faq.title}
                      </span>
                      <DownRightIcon className="absolute right-4 bottom-4 border rounded-full border-[#0000001F] bg-[#FFFFFF0F]" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
