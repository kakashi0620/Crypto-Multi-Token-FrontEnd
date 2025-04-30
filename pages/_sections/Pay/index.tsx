import React, { useEffect } from "react";
import Features from "./Features";
import SelectBank from "./SelectBank";
import BankList from "./BankList";
import { useTranslation } from "react-i18next";

export default function Pay() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center relative z-30 text-[#15202A]">
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 bg-white py-20">
        <div className="flex flex-col max-w-[557px]">
          <span className="font-extrabold bg-[#6EC1E4] w-fit pl-4">
            {t("third_section_pay_remittix")}
          </span>
          <span className="text-[40px] md:text-[50px] leading-[40px] md:leading-[50px] tracking-[-0.8px] font-bold relative">
            <span className="relative z-10">{t("third_section_title_1")}</span>
            <div className="h-[21px] w-[183px] bg-[#6EC1E4] absolute bottom-0 left-2 md:right-16 md:top-1/2 z-0" />
          </span>
        </div>
        <div className="grid xl:grid-cols-2 gap-20 w-fit m-auto">
          <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
            <Features />
          </div>
          <div className="flex w-full justify-center mb-10 relative z-10">
            <SelectBank />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 bg-[#F1F1F6]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 py-8 md:py-24">
          <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
            <div className="flex flex-col relative gap-4">
              <span className="text-[#15202A] text-[40px] md:text-[50px] tracking-[-0.8px] leading-[52px] max-w-[588px] relative z-10 font-bold">
                {t("third_section_crypto_to_fiat_1")}
              </span>
              <span className="text-[#040F19] text-xl font-normal max-w-[673px] relative z-10">
                <b>{t("remittix")}</b> {t("third_section_crypto_to_fiat_2")}
              </span>
              <div className="bg-[#6EC1E4] h-4 w-24 absolute top-32 left-0 md:top-2 md:left-20 z-0" />
            </div>
          </div>
          <div className="flex w-full justify-center mb-10 relative z-10">
            <BankList />
          </div>
        </div>
      </div>
    </main>
  );
}
