import Levels from "./Levels";
import FAQs from "./FAQs";
import RightIcon from "../../_components/Icons/Right";
import Slider from "./Silder";
import { Element, Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center py-20 z-10 relative bg-gradient-to-b from-[#1A1A1A] via-[#242424] to-[#1A1A1A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2A2A2A]/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2A2A2A]/20 via-transparent to-transparent" />
      <div className="w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10">
        <FAQs />
      </div>
    </main>
  );
}
