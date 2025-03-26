import React from "react";
import RightIcon from "../../_components/Icons/Right";
import { useTranslation } from "react-i18next";

export default function Accept() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center z-10 bg-[#F0F0F5] text-[#15202A]">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-white py-6 lg:py-24">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-8 lg:gap-20">
          <div className="flex flex-col items-start gap-4 overflow-hidden">
            <div className="relative">
              <h1 className="relative text-[46px] lg:text-[90px] text-start text-black font-bold leading-[39.5px] lg:leading-[77px] tracking-[-1px] lg:traking-[-2px] max-w-[700px]  lg:text-left z-10">
                {t("usecase_first_section_title")}
              </h1>
              <div className="bg-[#F9FF38] top-5 left-40 w-28 h-4 absolute lg:top-10 lg:left-80 lg:w-52 lg:h-8"></div>
              <div className="bg-[#F9FF38] absolute bottom-12 left-24 w-32 h-6 lg:bottom-24 lg:left-36 lg:w-32 lg:h-6"></div>
            </div>
            <h2 className="text-sm lg:text-xl leading-[20.5px] tracking-[-0.25px] mt-6 font-normal max-w-[700px] lg:text-left">
              {t("usecase_first_section_content")}
            </h2>
            <div className="flex items-center justify-center relative bg-black rounded-lg text-[#F9FF38] w-full lg:w-[405px] max-w-[405px] h-[71px] cursor-pointer">
              <span className="font-semibold text-[21px] leading-[27px] overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                {t("usecase_first_section_button_start")}
              </span>
              <div className="absolute right-4">
                <RightIcon className="scale-50" />
              </div>
            </div>
          </div>
          <div className="usecase flex flex-col gap-[14px] lg:relative lg:flex-grow lg:h-[450px]">
            <div className="infoCard lg:absolute top-0 left-0">
              <div className="flex justify-end -mb-3 mr-3">
                <span className="font-medium text-[8.6px] leading-[11px] text-[#F9FF38] bg-black lg:text-[10.4px] lg:leading-[13.3px] rounded-[4px] px-[20px] py-[5px]">
                  {t("usecase_first_section_card_payment_information")}
                </span>
              </div>
              <div className="flex flex-col gap-4 border border-[#D9D9D9] rounded-lg bg-[#F9F9F9] p-5">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[8.5px] leading-[11px] lg:text-[10.5px] lg:leading-[13.3px]">
                    {t("usecase_first_section_card_ux_ui_development")}
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium text-[12.5px] leading-[16px] lg:text-[15px] lg:leading-[19.2px] bg-white rounded-lg px-4 py-3 ">
                      Lewis Graves
                    </div>
                    <div className="lg:text-[12.6px] lg:leading-[16px] text-[10.4px] leading-[13.3px] flex flex-col items-end justify-center bg-white rounded-lg px-2">
                      <span className="font-extrabold">$88.99</span>
                      <span className="text-[#00000059] font-medium">
                        88.99 USDT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[8.6px] leading-[11px] lg:text-[10px]">
                    {t("fourth_section_wallet_address")}
                  </span>

                  <div className="text-[12.5px] lg:text-[15px] leading-[16px] lg:leading-[19px] bg-white text-[#00000059] rounded-lg px-4 py-3 font-medium">
                    8X8Q***n754AFC9362
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[8.6px] leading-[11px] lg:text-[10px]">
                    {t("chain")}
                  </span>

                  <div className="font-medium text-[12.5px] leading-[16px] lg:text-[15px] lg:leading-[19.2px] bg-white rounded-lg px-4 py-3">
                    Solana
                  </div>
                </div>
              </div>
            </div>

            <div className="infoCard lg:absolute bottom-0 right-0">
              <div className="flex justify-end -mb-3 mr-3">
                <span className="font-medium text-[8.6px] leading-[11px] text-white bg-black lg:text-[10.4px] lg:leading-[13.3px] rounded-[4px] px-[20px] py-[5px]">
                  {t("customer_information")}
                </span>
              </div>
              <div className="flex flex-col gap-4 border border-[#D9D9D9] rounded-lg bg-[#F9F9F9] p-5">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[8.5px] leading-[11px] lg:text-[10.5px] lg:leading-[13.3px]">
                    {t("email")}
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-[12.5px] lg:text-[15px] leading-[16px] lg:leading-[19.2px] bg-white rounded-lg px-4 py-3 font-medium">
                      andyjeton@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[8.5px] leading-[11px] lg:text-[10.5px] lg:leading-[13.3px]">
                    {t("customer_name")}
                  </span>

                  <div className="text-[12.5px] lg:text-[15px] leading-[16px] lg:leading-[19px] bg-white text-[#00000059] rounded-lg px-4 py-3 font-medium">
                    Andrew B Jeton
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[8.5px] leading-[11px] lg:text-[10.5px] lg:leading-[13.3px]">
                    {t("referrer")}
                  </span>

                  <div className="font-medium text-[12.5px] leading-[16px] lg:text-[15px] lg:leading-[19.2px] bg-white rounded-lg px-4 py-3">
                    Luke Ward
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
