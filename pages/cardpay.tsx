import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const CardPayPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-12 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
        <h1 className="text-3xl md:text-5xl font-bold text-green text-center">
          {t("cardpay_pay_with_card")}
        </h1>
        <div>
          <div className="flex flex-col gap-8">
            <span className="font-normal">{t("cardpay_pay_with_card_1")}</span>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("cardpay_pay_with_card_2")}</p>
              <span className="text-gray font-medium">
                {t("cardpay_pay_with_card_3")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("cardpay_pay_with_card_step_1")}</p>
              <span className="text-gray font-medium">
                {t("cardpay_pay_with_card_step_1_1")}
              </span>
              <ul className="ml-4">
                <li className="mt-0">
                  <Link
                    className="text-blue-500 border-b border-blue-500"
                    href={"https://ramp.network/"}
                  >
                    {t("cardpay_pay_with_card_step_1_2")}
                  </Link>
                </li>
                <li className="mt-0">
                  <Link
                    className="text-blue-500 border-b border-blue-500"
                    href={"https://global.transak.com/"}
                  >
                    {t("cardpay_pay_with_card_step_1_3")}
                  </Link>
                </li>
                <li className="mt-0">
                  <Link
                    className="text-blue-500 border-b border-blue-500"
                    href={"https://www.moonpay.com/buy"}
                  >
                    {t("cardpay_pay_with_card_step_1_4")}
                  </Link>
                </li>
              </ul>
              <span className="text-gray font-medium">
                {t("cardpay_pay_with_card_step_1_5")}
              </span>
              <span className="text-gray font-medium">
                <b>{t("cardpay_pay_with_card_step_1_6")}</b>{" "}
                {t("cardpay_pay_with_card_step_1_7")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("cardpay_pay_with_card_step_2")}</p>
              <span className="text-gray font-medium">
                {t("cardpay_pay_with_card_step_2_1")}
              </span>
              <ul className="text-gray font-medium ml-4">
                <li className="mt-0">{t("cardpay_pay_with_card_step_2_2")}</li>
                <li className="mt-0">{t("cardpay_pay_with_card_step_2_3")}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray font-medium">
                <b>{t("cardpay_pay_with_card_note")}</b>{" "}
                {t("cardpay_pay_with_card_note_1")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayPage;
