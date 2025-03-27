import { useTranslation } from "react-i18next";
import LogoIcon from "../../_components/Icons/Logo";
import VerticalDivider from "../../_components/Icons/VerticalDivider";

export default function Percentage() {
  const { t } = useTranslation();

  const TOKENOMIC = [
    {
      name: t("sixth_section_tokenomics_presale"),
      million: "750",
      percent: "50%",
    },
    {
      name: t("sixth_section_tokenomics_marketing"),
      million: "225",
      percent: "15%",
    },
    {
      name: t("sixth_section_tokenomics_exchange_listings"),
      million: "180",
      percent: "12%",
    },
    {
      name: t("sixth_section_tokenomics_ecosystem"),
      million: "150",
      percent: "10%",
    },
    {
      name: t("sixth_section_tokenomics_team"),
      million: "135",
      percent: "9%",
    },
    {
      name: t("sixth_section_tokenomics_rewards"),
      million: "60",
      percent: "4%",
    },
  ];
  return (
    <div className="percent-table flex flex-col max-w-[544px] w-full gap-2">
      <div className="header row items-center h-[33.76px] md:h-[49.28px]">
        <div className="flex text-green items-center gap-2">
          <LogoIcon className="w-[31.19px] h-[16.12px] md:w-[45.53px] md:h-[23.52px]" />
          <span className="text-[11.2px] md:text-[16.34px]">
            {t("sixth_section_tokenomics_coins")}
          </span>
          <VerticalDivider />
        </div>
        <span className="w-full text-right">
          {t("sixth_section_tokenomics_million")}
        </span>
        <div className="flex justify-center">
          <VerticalDivider />
        </div>
        <span className="w-full text-center">%</span>
      </div>

      <div className="body flex flex-col font-normal py-4 gap-2 md:gap-4 linear-border-top-left">
        {TOKENOMIC.map((item) => (
          <div
            key={item.name}
            className={
              "row " +
              (item.name === "Exchange Listings" ? "text-[#50EBFF]" : "")
            }
          >
            <span>{item.name}</span>
            <span className="w-full text-right">{item.million}</span>
            <span />
            <span className="text-center">{item.percent}</span>
          </div>
        ))}
      </div>

      <div className="header row items-center h-[38.07px] md:h-[55.57px] linear-border-top-left linear-border-bottom-right">
        <span>{t("sixth_section_tokenomics_total")}</span>
        <span className="w-full text-right">1,500</span>
        <span />
        <span>100%</span>
      </div>
    </div>
  );
}
