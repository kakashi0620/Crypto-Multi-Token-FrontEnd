import Levels from "./Levels";
import FAQs from "./FAQs";
import RightIcon from "../../_components/Icons/Right";
import Slider from "./Silder";
import { Element, Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Roadmap() {
  const { t } = useTranslation();

  // bg-roadmap
  return (
    <main className="flex flex-col items-center justify-center py-20 z-10 relative bg-[#101010]">
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10">
        <FAQs />
      </div>
    </main>
  );
}
