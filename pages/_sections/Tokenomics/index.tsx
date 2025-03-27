import React from "react";
import Percentage from "./Percentage";
import TokenDetails from "./TokenDetails";
import Divider from "../../_components/Icons/Divider";
import { useTranslation } from "react-i18next";

export default function Tokenomics() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center py-10 z-10 relative">
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10">
        <div className="flex flex-col items-center">
          <span className="text-green text-[40px] lg:text-[80px] font-bold text-center">
            {t("tokenomics")}
          </span>
          <span className="text-[15px] lg:text-xl font-normal text-center">
            {t("sixth_section_tokenomics")}
          </span>
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-20">
          <div className="flex-grow lg:mt-12 w-full">
            <Percentage />
          </div>
          <div className="hidden lg:flex">
            <img src="/images/tokenomic.png" alt="tokenomic" />
          </div>
          <div className="flex lg:hidden">
            <img src="/images/tokenomic-small.png" alt="tokenomic" />
          </div>
        </div>

        <Divider className="hidden lg:flex -mx-12" />

        <TokenDetails />
      </div>

      <div className="bg-tokenomics">
        <img
          className="absolute -bottom-1/3 -left-1/3"
          src="/images/noise.png"
          alt="noise"
        />
        <img
          className="absolute -bottom-40 -right-1/3"
          src="/images/noise.png"
          alt="noise"
        />
      </div>
    </main>
  );
}
