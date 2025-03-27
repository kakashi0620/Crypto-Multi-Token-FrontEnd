import * as React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function Silder() {
  const { t } = useTranslation();

  const LevelInfos = [
    [
      t("tenth_section_explore_our_level_1_1"),
      t("tenth_section_explore_our_level_1_2"),
      t("tenth_section_explore_our_level_1_3"),
      t("tenth_section_explore_our_level_1_4"),
      t("tenth_section_explore_our_level_1_5"),
    ],
    [
      t("tenth_section_explore_our_level_2_1"),
      t("tenth_section_explore_our_level_2_2"),
      t("tenth_section_explore_our_level_2_3"),
      t("tenth_section_explore_our_level_2_4"),
      t("tenth_section_explore_our_level_2_5"),
    ],
    [
      t("tenth_section_explore_our_level_3_1"),
      t("tenth_section_explore_our_level_3_2"),
      t("tenth_section_explore_our_level_3_3"),
      t("tenth_section_explore_our_level_3_4"),
      t("tenth_section_explore_our_level_3_5"),
    ],
    [
      t("tenth_section_explore_our_level_4_1"),
      t("tenth_section_explore_our_level_4_2"),
      t("tenth_section_explore_our_level_4_3"),
      t("tenth_section_explore_our_level_4_4"),
    ],
  ];
  const LevelComponent = ({ infos, index }) => {
    return (
      <div className="roadmap-card p-12 text-left">
        <div className="flex items-center justify-between">
          <div className="level-title flex items-center px-4 uppercase text-green text-[13.63px] md:text-[15px] font-normal">
            level
          </div>
          <div className="level-number text-green text-[24px] font-semibold flex items-center justify-center">
            0{index + 1}
          </div>
        </div>
        <div className="divider" />
        <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
          {infos.map((info, index) => (
            <li key={`sub-${index}`}>{info}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-full lg:hidden flex flex-col items-center justify-center gap-2">
      <Swiper
        loop
        slidesPerView={1}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="flex justify-center justify-items-center"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-2 max-w-[420px]">
            <LevelComponent infos={LevelInfos[0]} index={0} />
            <LevelComponent infos={LevelInfos[1]} index={1} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-2 max-w-[420px]">
            <LevelComponent infos={LevelInfos[2]} index={2} />
            <LevelComponent infos={LevelInfos[3]} index={3} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
