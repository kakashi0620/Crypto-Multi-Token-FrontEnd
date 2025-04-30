import { toast } from "react-toastify";
import { PresaleConfig } from "../../../config/presaleConfig";
import CopyIcon from "../../_components/Icons/Copy";
import { copyToClipboard } from "../../utils";
import { useTranslation } from "react-i18next";

const TokenInfo = {
  address: "0xC7f59c4bD6927996186696...",
  name: "Remittix",
  symbol: "RTX",
  supply: "1,500,000,000",
  network: "Ethereum",
  decimals: 18,
};

export default function TokenDetails() {
  const { t } = useTranslation();

  const handleCopyContract = () => {
    copyToClipboard(PresaleConfig.tokenAddress, () => {
      toast.success("Address copied");
    });
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-col lg:items-center">
        <span className="text-[40px] leading-[46px] lg:leading-[86px] lg:text-[80px] font-bold text-center">
          <span className="text-[#6EC1E4]">{t("remittix")}</span>
          <br className="block lg:hidden" /> {t("sixth_section_token_details")}
        </span>
        <span className="text-[15px] lg:text-xl font-normal text-center">
          {t("sixth_section_token_details_content")}
        </span>
      </div>
      <div className="token-details gap-4 py-12 lg:py-20">
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <div className="flex w-full gap-4">
            <span className="item-title w-full linear-border-top-left">
              {t("sixth_section_token_details_contract_address")}
            </span>
            <div
              className="item-title w-[53px] cursor-pointer"
              onClick={handleCopyContract}
            >
              <CopyIcon />
            </div>
          </div>
          <div className="item-content">{TokenInfo.address}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="item-title linear-border-bottom-left">
            {t("sixth_section_token_details_token_name")}
          </div>
          <div className="item-content">{TokenInfo.name}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="item-title linear-border-top-left">
            {t("sixth_section_token_details_token_symbol")}
          </div>
          <div className="item-content">{TokenInfo.symbol}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="item-title linear-border-bottom-right overflow-hidden whitespace-nowrap text-ellipsis">
            {t("sixth_section_token_details_token_supply")}
          </div>
          <div className="item-content">{TokenInfo.supply}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="item-title linear-border-top-right">
            {t("sixth_section_token_details_network")}
          </div>
          <div className="item-content">{TokenInfo.network}</div>
        </div>
        <div className="flex lg:flex-col gap-4 col-span-2 lg:col-span-1">
          <div className="item-title flex-grow linear-border-bottom-left overflow-hidden whitespace-nowrap text-ellipsis">
            {t("sixth_section_token_details_decimal")}
          </div>
          <div className="item-content flex-grow">{TokenInfo.decimals}</div>
        </div>
      </div>
    </div>
  );
}
