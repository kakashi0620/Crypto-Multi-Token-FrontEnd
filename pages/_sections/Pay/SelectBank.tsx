import { useTranslation } from "react-i18next";
import RightIcon from "../../_components/Icons/Right";

export default function SelectBank() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full max-w-[564px] p-4 md:p-12 gap-10 shadow-[0_20px_20px_#00000040] rounded-xl">
      <div className="flex gap-2">
        {/* <span className="text-[26px] md:text-[32px] font-bold">
          {t("third_section_select_bank")}
        </span> */}
        <div className="bg-black text-white rounded-lg h-[30px] w-[109px] flex justify-center items-center cursor-pointer">
          <span className="text-[12.95px] font-medium">
            {t("third_section_select_bank")}
          </span>
        </div>
        {/* <div className="text-gray h-[30px] w-[109px] flex justify-center items-center cursor-pointer">
          <span className="text-[12.95px] font-medium">
            {t("third_section_Instructions")}
          </span>
        </div> */}
      </div>

      <div className="relative px-4">
        <span className="relative z-10 text-[18px] md:text-[19.11px] font-semibold">
          {t("third_section_which_bank_account_1")} <br />{" "}
          {t("third_section_which_bank_account_2")}
        </span>
        <div className="bg-yellow h-4 w-24 absolute top-2 left-20 z-0"></div>
      </div>

      <div className="flex flex-col px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-black text-[12.32px] md:text-[17.91px] font-extrabold">
              {t("third_section_chase")}
            </span>
            <div className="text-[6.57px] md:text-[9.55px] font-bold">
              <span className="text-gray mr-2">IBAN:</span>
              <span>US18 0977 0868 0021 3544 18</span>
            </div>
            <div className="text-[6.57px] md:text-[9.55px] font-bold">
              <span className="text-gray mr-2">SWIFT/BIC:</span>
              <span>CSEUS22</span>
            </div>
          </div>
          <img
            className="size-[37.1px] md:size-[53.94px]"
            src="/images/flags/us.png"
            alt="us"
          />
        </div>

        <div className="grid grid-cols-[1fr_67px_1fr] items-center px-2 gap-2">
          <div className="h-[1px] bg-[#C3C3C3]" />
          <img src="/images/bank-transfer.png" alt="bank" />
          <div className="h-[1px] bg-[#C3C3C3]" />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-black text-[12.32px] md:text-[17.91px] font-extrabold uppercase">
              {t("third_section_deutsche_bank")}
            </span>
            <div className="text-[6.57px] md:text-[9.55px] font-bold">
              <span className="text-gray mr-2">IBAN:</span>
              <span>EU11 0576 1824 2250 1517 44</span>
            </div>
            <div className="text-[6.57px] md:text-[9.55px] font-bold">
              <span className="text-gray mr-2">SWIFT/BIC:</span>
              <span>DBAFS18</span>
            </div>
          </div>
          <img
            className="size-[37.1px] md:size-[53.94px]"
            src="/images/flags/ge.png"
            alt="ge"
          />
        </div>
      </div>

      <div className="flex items-center justify-center h-[44.15px] md:h-[64.17px] relative bg-black rounded-[10.7px] cursor-pointer hover:bg-yellow text-white hover:text-black transition-all">
        <img
          className="absolute left-4"
          src="/images/background/button-left.svg"
          alt="background"
        />
        <span className="text-[16px] md:text-[21.39px]">
          {t("third_section_add_new_bank")}
        </span>
        <RightIcon className="h-[20.38px] absolute right-4" />
      </div>
    </div>
  );
}
