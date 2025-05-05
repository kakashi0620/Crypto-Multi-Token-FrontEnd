import { useTranslation } from "react-i18next";
import BuyClaimIcon from "../../_components/Icons/BuyClaim";
import SelectCurrencyIcon from "../../_components/Icons/SelectCurrency";
import SignUpIcon from "../../_components/Icons/SignUp";

export default function BuySteps() {
  const { t } = useTranslation();
  return (
    <div className="grid xl:grid-cols-3 w-fit m-auto gap-12">
      <div className="flex flex-col relative w-full xl:w-[370px] h-[318px] p-4 gap-4 lg:mt-12 bg-white rounded-lg">
        <div className="flex flex-col gap-2">
          <SignUpIcon />
          <span className="text-[21px] font-semibold">
            {/* {t("seventh_section_how_to_buy_sign_up")} */}
            Step 1
          </span>
        </div>
        <span className="flex-grow text-[#5F5F5FC2] text-[22px]">
          {/* {t("seventh_section_how_to_buy_sign_up_content")} */}
          Sign in via Metamask and complete profile
        </span>
      </div>

      <div className="flex flex-col relative w-full xl:w-[370px] h-[318px] p-4 gap-4 bg-white rounded-lg">
        <div className="flex flex-col gap-2">
          <SelectCurrencyIcon />
          <span className="text-[21px] font-semibold">
            {/* {t("seventh_section_how_to_buy_select_currency")} */}
            Step 2
          </span>
        </div>
        <span className="flex-grow text-[#5F5F5FC2] text-[22px]">
          {/* {t("seventh_section_how_to_buy_select_currency_content")} */}
          Stay updated in our Telegram group to get latest deal update.
        </span>
      </div>

      <div className="flex flex-col relative w-full xl:w-[370px] h-[318px] p-4 gap-4 lg:mt-12 bg-white rounded-lg">
        <div className="flex flex-col gap-2">
          <BuyClaimIcon />
          <span className="text-[21px] font-semibold">
            {/* {t("seventh_section_how_to_buy_buy_claim")} */}
            Step 3
          </span>
        </div>
        <span className="flex-grow text-[#5F5F5FC2] text-[22px]">
          {/* {t("seventh_section_how_to_buy_buy_claim_content")} */}
          Invest through Metamask & track your portfolio
        </span>
      </div>
    </div>
  );
}
