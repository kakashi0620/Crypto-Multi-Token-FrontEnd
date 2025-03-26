import { useTranslation } from "react-i18next";
import Divider from "../../_components/Icons/Divider";
import ExternalDarkIcon from "../../_components/Icons/ExternalDark";
import ExternalLightIcon from "../../_components/Icons/ExternalLight";
import FeatureIcon1 from "../../_components/Icons/Feature1";
import FeatureIcon2 from "../../_components/Icons/Feature2";
import FeatureIcon3 from "../../_components/Icons/Feature3";
import FeatureIcon4 from "../../_components/Icons/Feature4";

export default function Features() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col relative max-w-[335px] p-8 bg-[#F1F1F6] rounded-lg">
          <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
            <FeatureIcon1 />
          </div>
          <span className="text-[#040F19] text-[18.42px] font-bold mt-12 md:mt-20">
            {t("third_section_user_friendly_interface")}
          </span>
          <span className="text-[#040F19] text-[17.27px] font-normal mt-4 w-[240px]">
            {t("third_section_user_friendly_interface_content")}
          </span>
          <div className="absolute bottom-4 right-4">
            <ExternalLightIcon />
          </div>
        </div>

        <div className="flex flex-col relative max-w-[335px] p-8 bg-[#040F19] rounded-lg bg-[url(/images/featurecard.png)] bg-cover">
          <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
            <FeatureIcon2 />
          </div>
          <span className="text-yellow text-[18.42px] font-bold mt-12 md:mt-20">
            {t("third_section_zero_fx_fees")}
          </span>
          <Divider />
          <span className="text-white text-[17.27px] font-normal mt-2 w-[240px]">
            {t("third_section_zero_fx_fees_content")}
          </span>
          <div className="absolute bottom-4 right-4">
            <ExternalDarkIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
        <div className="flex flex-col relative max-w-[335px] p-8 bg-[#040F19] rounded-lg bg-[url(/images/featurecard.png)] bg-cover">
          <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
            <FeatureIcon3 />
          </div>
          <span className="text-yellow text-[18.42px] font-bold mt-12 md:mt-20">
            {t("third_section_seamlessly_simple_1")}
          </span>
          <Divider />
          <span className="text-white text-[17.27px] font-normal mt-2 w-[240px]">
            {t("third_section_seamlessly_simple_2")}
          </span>
          <div className="absolute bottom-4 right-4">
            <ExternalDarkIcon />
          </div>
        </div>

        <div className="flex flex-col relative max-w-[335px] p-8 bg-[#F1F1F6] rounded-lg">
          <div className="bg-[#1A2228] rounded-md p-2 w-fit h-fit">
            <FeatureIcon4 />
          </div>
          <span className="text-[#040F19] text-[18.42px] font-bold mt-12 md:mt-20">
            {t("third_section_super_fast_1")}
          </span>
          <span className="text-[#040F19] text-[17.27px] font-normal mt-4 w-[240px]">
            {t("third_section_super_fast_2")}
          </span>
          <div className="absolute bottom-4 right-4">
            <ExternalLightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
