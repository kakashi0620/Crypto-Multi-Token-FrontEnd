import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const HowToBuyPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-12 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
        <h1 className="text-3xl md:text-5xl font-bold text-[#6EC1E4] text-center">
          {t("how_to_buy_remittix_1")}
        </h1>
        <div className="flex flex-col gap-8">
          <span className="font-normal">
            <b>{t("how_to_buy_remittix_note")}</b>{" "}
            {t("how_to_buy_remittix_note_1")}
          </span>
          <p className="text-xl">{t("how_to_buy_remittix_steps")}</p>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_1")}</p>
            <span className="text-gray font-medium">
              {t("how_to_buy_remittix_steps_1_1")}{" "}
              <b>{t("how_to_buy_remittix_steps_1_2")}</b>{" "}
              {t("how_to_buy_remittix_steps_1_3")}{" "}
              <b>{t("how_to_buy_remittix_steps_1_4")}</b>.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_2")}</p>
            <span className="text-gray font-medium">
              {t("how_to_buy_remittix_steps_2_1")}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_3")}</p>
            <ul className="text-gray font-medium ml-4">
              <li className="mt-0">{t("how_to_buy_remittix_steps_3_1")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_3_2")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_3_3")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_4")}</p>
            <span className="text-gray font-medium">
              {t("how_to_buy_remittix_steps_4_1")}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_5")}</p>
            <ul className="text-gray font-medium ml-4">
              <li className="mt-0">{t("how_to_buy_remittix_steps_5_1")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_5_2")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_5_3")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_6")}</p>
            <ul className="text-gray font-medium ml-4">
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_1")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_2")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_3")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_4")}</li>
            </ul>
            <span className="font-normal">
              <b>{t("how_to_buy_remittix_steps_6_5")}</b>{" "}
              {t("how_to_buy_remittix_steps_6_6")}
            </span>
            <ul className="text-gray font-medium ml-4">
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_7")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_8")}</li>
              <li className="mt-0">{t("how_to_buy_remittix_steps_6_9")}</li>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_7")}</p>
            <span className="text-gray font-medium">
              {t("how_to_buy_remittix_steps_7_1")}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">{t("how_to_buy_remittix_steps_7_2")}</p>
            <span className="text-gray font-medium">
              {t("how_to_buy_remittix_steps_7_3")}
            </span>
            <div className="flex flex-col pl-4 mt-2">
              <span>
                <b>{t("how_to_buy_remittix_steps_7_4")}</b> Remittix
              </span>
              <span>
                <b>{t("how_to_buy_remittix_steps_7_6")}</b> RTX
              </span>
              <span>
                <b>{t("how_to_buy_remittix_steps_7_7")}</b> Ethereum (ERC20)
              </span>
              <span>
                <b>{t("how_to_buy_remittix_steps_7_9")}</b> 18
              </span>
              <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                <b>{t("how_to_buy_remittix_steps_7_10")}</b>{" "}
                0xC7f59c4bD6927996186696A0A9cF95dD1727b54E{" "}
              </span>
            </div>
            <span className="text-gray font-medium">
              {t("how_to_buy_remittix_steps_7_11")}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;
