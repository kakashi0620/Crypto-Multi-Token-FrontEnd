import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const ErrorPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-12 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow text-center">
          {t("error_common_error_and_fix")}
        </h1>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("error_common_error_and_fix_1")}</p>
              <span className="text-gray font-medium">
                {t("error_common_error_and_fix_1_1")}
              </span>
              <ul className="text-gray font-medium ml-4">
                <li className="mt-0">{t("error_common_error_and_fix_1_2")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_1_3")}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("error_common_error_and_fix_2")}</p>
              <span className="text-gray font-medium">
                {t("error_common_error_and_fix_2_1")}
              </span>
              <ul className="text-gray font-medium ml-4">
                <li className="mt-0">{t("error_common_error_and_fix_2_2")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_2_3")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_2_4")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_2_5")}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("error_common_error_and_fix_3")}</p>
              <span className="text-gray font-medium">
                {t("error_common_error_and_fix_3_1")}
              </span>
              <ul className="text-gray font-medium ml-4">
                <li className="mt-0">{t("error_common_error_and_fix_3_2")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_3_3")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_3_4")}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("error_common_error_and_fix_4")}</p>
              <span className="text-gray font-medium">
                {t("error_common_error_and_fix_4_1")}
              </span>
              <ul className="text-gray font-medium ml-4">
                <li className="mt-0">{t("error_common_error_and_fix_4_2")}</li>
                <li className="mt-0">{t("error_common_error_and_fix_4_3")}</li>
              </ul>
            </div>

            {/* <div className="flex flex-col gap-2">
              <p className="text-xl">{t("error_common_error_and_fix_5")}</p>
              <span className="text-gray font-medium">
                {t("error_common_error_and_fix_5_1")}
              </span>
              <div className="ml-4">
                <span className="text-gray font-medium">
                  {t("error_common_error_and_fix_5_2")}
                </span>
                <div className="flex flex-col pl-4 mt-2">
                  <span>
                    <b>{t("error_common_error_and_fix_5_3")}</b> Remittix
                  </span>
                  <span>
                    <b>{t("error_common_error_and_fix_5_4")}</b> RTX
                  </span>
                  <span>
                    <b>{t("error_common_error_and_fix_5_5")}</b> Ethereum
                    (ERC20)
                  </span>
                  <span>
                    <b>{t("error_common_error_and_fix_5_6")}</b> 18
                  </span>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                    <b>{t("error_common_error_and_fix_5_7")}</b>{" "}
                    0xC7f59c4bD6927996186696A0A9cF95dD1727b54E{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">{t("error_still_need_help")}</p>
              <span className="font-normal">
                {t("error_still_need_help_1")}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
