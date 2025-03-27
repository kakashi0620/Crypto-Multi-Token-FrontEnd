import Levels from "./Levels";
import FAQs from "./FAQs";
import RightIcon from "../../_components/Icons/Right";
import Slider from "./Silder";
import { Element, Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center py-20 z-10 relative bg-roadmap">
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10">
        {/* <div className="text-[40px] lg:text-[80px] font-bold leading-[46px] w-full flex justify-center">
          <span className="text-center">
            {t("tenth_section_explore_our")}{" "}
            <span className="text-green">{t("roadmap")}</span>
          </span>
        </div>

        <Levels />
        <Slider />

        <div className="flex justify-center">
          <ScrollLink to="presale">
            <button className="third h-[71px] w-[321px] relative">
              <span className="text-[21px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                {t("join_presale")}
              </span>
              <RightIcon className="absolute right-8 scale-50" />
            </button>
          </ScrollLink>
        </div> */}

        <div >
          <FAQs />
        </div>
      </div>
    </main>
  );
}
