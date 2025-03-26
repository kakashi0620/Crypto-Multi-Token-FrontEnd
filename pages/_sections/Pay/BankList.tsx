import { useTranslation } from "react-i18next";
import LogoIcon from "../../_components/Icons/Logo";

export default function BankList() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 w-[97%] md:w-[546px] max-w-[546px]">
      <div className="w-full flex justify-between bg-[#6860FF] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
        <img
          className="w-[63.88px] md:w-fit"
          src="/images/bank/stripe.png"
          alt="stripe"
        />
        <span className="text-[9.71px] md:text-[14.18px] tracking-[0.7px] text-white py-[21.2px] md:py-[32px]">
          {t("third_section_fiat_fiat_payments")}
        </span>
      </div>
      <div className="w-full flex justify-between bg-[#A0E071] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
        <img
          className="w-[73.25px] md:w-fit"
          src="/images/bank/wise.png"
          alt="wise"
        />
        <span className="text-[9.71px] md:text-[14.18px] tracking-[0.7px] text-black py-[21.2px] md:py-[32px]">
          {t("third_section_fiat_fiat_transfers")}
        </span>
      </div>
      <div className="w-full flex justify-between bg-[#F9FF38] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
        <div className="flex gap-1 items-center">
          <LogoIcon className="text-black w-[24.31px]" />
          <span className="text-[16.38px] md:text-[23.93px] tracking-[0.7px] text-black font-bold">
            Remittix
          </span>
        </div>
        <span className="text-[9.71px] md:text-[14.18px] text-black py-[21.2px] md:py-[32px]">
          {t("third_section_crypto_fiat_transfers")}
        </span>
      </div>
      <div className="w-full flex justify-between bg-[#0052FE] rounded-[9.84px] md:rounded-[13.72px] h-[53.86px] md:h-[78.67px] items-center px-8 md:px-12">
        <img
          className="w-[88.93px] md:w-fit"
          src="/images/bank/coinbase.png"
          alt="coinbase"
        />
        <span className="text-[9.71px] md:text-[14.18px] tracking-[0.7px] text-white py-[21.2px] md:py-[32px]">
          {t("third_section_crypto_crypto_transfers")}
        </span>
      </div>
    </div>
  );
}
