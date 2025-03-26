import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import InvoicePayment from "../Accept/InvoicePayment";

export default function Accept() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center pt-20 z-10 bg-accept">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20 lg:py-12">
          <div className="flex w-full justify-center mb-10 relative z-10">
            <InvoicePayment />
          </div>
          <div className="flex flex-col gap-6 relative z-10 font-semibold justify-center">
            <div className="text-[40px] lg:text-[50px] leading-[45px] lg:leading-[62px] traking-[-0.8px] text-white max-w-[529px]">
              {t("fourth_section_easily_accept")}{" "}
              <span className="text-yellow">
                {t("fourth_section_crypto_payments")}
              </span>
            </div>
            <ul className="text-[15px] lg:text-[16px] font-normal text-white tracking-[-0.26px] max-w-[529px] pl-4">
              <li>{t("fourth_section_crypto_payments_content_1")}</li>
              <li>{t("fourth_section_crypto_payments_content_2")}</li>
              <li>{t("fourth_section_crypto_payments_content_3")}</li>
              <li>{t("fourth_section_crypto_payments_content_4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
