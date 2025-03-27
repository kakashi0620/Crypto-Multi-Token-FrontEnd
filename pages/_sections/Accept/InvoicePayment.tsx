import { t } from "i18next";
import StarCheckIcon from "../../_components/Icons/StarCheck";

export default function InvoicePayment() {
  return (
    <div className="card-box border-none">
      <div className="card-content">
        <div className="flex flex-col">
          <span className="text-green text-[13.69px] md:text-xl font-bold">
            {t("fourth_section_invloice_payment")}
          </span>
          <span className="text-[9.72px] md:text-[14.2px]">
            {t("fourth_section_payment_request")}
          </span>
        </div>
        <div className="flex justify-end -mt-4">
          <div className="bg-[#BAFEB338] rounded-[35px] flex items-center p-1 gap-1">
            <StarCheckIcon />
            <span className="text-[4.22px] md:text-[6.16px] text-green leading-[5.38px] md:leading-[7.85px]">
              {t("fourth_section_verified_payment_link")}
            </span>
          </div>
        </div>
        <hr className="text-[#2D3536]" />
        <span className="text-[28.54px] md:text-[41.69px] text-[#84FF38] font-bold leading-[53.15px] ml-2">
          $84.99
        </span>
        <span className="text-[15.11px] md:text-[22.07px] font-normal leading-[28.14px] ml-2">
          85 USDT
        </span>
        <div className="flex flex-col">
          <div className="flex justify-between ml-2">
            <span className="text-[7.03px] md:text-[10.26px]">
              {t("fourth_section_transaction_receipt")}{" "}
              <span className="text-green">brad@alphacorp.com</span>
            </span>
            <span className="text-[9.72px] md:text-[14.2px]">
              {t("fourth_section_wallet_address")}
            </span>
          </div>
          <div className="input">
            <input
              placeholder="0xC7f5***95dD1727b54E"
              className="text-[14.06px] md:text-[20.53px] font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-[9.72px] md:text-[14.2px] font-bold ml-2">
            {t("fourth_section_order")}
          </span>
          <div className="grid grid-cols-[1fr_60px_1fr] xl:grid-cols-[1fr_100px_1fr] items-center">
            <div className="input border-[#F9FF3845] justify-center">
              <div className="text-green bg-[#F9FF3829] text-[13.43px] md:text-[19.61px] font-bold px-3 py-1 rounded-full">
                $84.99
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-green px-4 text-black text-[13.69px] md:text-xl font-bold rounded-full">
                +
              </div>
              <span className="text-[8.44px] md:text-[12.32px] font-bold">
                {t("fourth_section_gas_price")}
              </span>
            </div>
            <div className="input border-[#F9FF3845] justify-between">
              <div className="text-green bg-[#F9FF3829] text-[13.43px] md:text-[19.61px] font-bold px-3 py-1 rounded-full">
                $0.18
              </div>
              <span className="text-[9.72px] md:text-[14.2px] font-bold">
                $85.17
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <button className="third text-[9.72px] md:text-[14.2px] h-[44.51px] md:h-[65px]">
            {t("fourth_section_complete_payment")}
          </button>
          <button className="secondary text-[9.72px] md:text-[14.2px] h-[44.51px] md:h-[65px]">
            {t("fourth_section_pay_manually")}
          </button>
        </div>
      </div>
    </div>
  );
}
