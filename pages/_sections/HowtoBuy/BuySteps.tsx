import { useTranslation } from "react-i18next";
import BuyClaimIcon from "../../_components/Icons/BuyClaim";
import SelectCurrencyIcon from "../../_components/Icons/SelectCurrency";
import SignUpIcon from "../../_components/Icons/SignUp";

export default function BuySteps() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-[90%] sm:w-[95%] xl:w-fit mx-auto gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
      <div className="flex flex-col relative w-full xl:w-[370px] h-[140px] sm:h-[180px] md:h-[200px] xl:h-[318px] p-3 sm:p-4 gap-2 sm:gap-3 bg-[#3E3E1F59] rounded-lg">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <SignUpIcon />
          </div>
          <span className="text-[16px] sm:text-[18px] md:text-[21px] font-semibold text-white">
            Step-1
          </span>
        </div>
        <span className="flex-grow text-white text-[14px] sm:text-[16px] md:text-[22px] leading-tight sm:leading-normal">
          Sign in via Metamask and complete profile
        </span>
      </div>

      <div className="flex flex-col relative w-full xl:w-[370px] h-[140px] sm:h-[180px] md:h-[200px] xl:h-[318px] p-3 sm:p-4 gap-2 sm:gap-3 bg-[#3E3E1F59] rounded-lg">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <SelectCurrencyIcon />
          </div>
          <span className="text-[16px] sm:text-[18px] md:text-[21px] font-semibold text-white">
            Step-2
          </span>
        </div>
        <span className="flex-grow text-white text-[14px] sm:text-[16px] md:text-[22px] leading-tight sm:leading-normal">
          Stay updated in our Telegram group to get latest deal update.
        </span>
      </div>

      <div className="flex flex-col relative w-full xl:w-[370px] h-[140px] sm:h-[180px] md:h-[200px] xl:h-[318px] p-3 sm:p-4 gap-2 sm:gap-3 bg-[#3E3E1F59] rounded-lg sm:col-span-2 xl:col-span-1">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <BuyClaimIcon />
          </div>
          <span className="text-[16px] sm:text-[18px] md:text-[21px] font-semibold text-white">
            Step-3
          </span>
        </div>
        <span className="flex-grow text-white text-[14px] sm:text-[16px] md:text-[22px] leading-tight sm:leading-normal">
          Invest through Metamask & track your portfolio
        </span>
      </div>
    </div>
  );
}
