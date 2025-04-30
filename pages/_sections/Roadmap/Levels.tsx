import { useTranslation } from "react-i18next";

export default function Levels() {
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
    ],
  ];

  return (
    <div className="hidden flex-col lg:grid lg:grid-cols-4">
      {LevelInfos.map((infos, index) => (
        <div className="roadmap-card p-12" key={index}>
          <div className="flex items-center justify-between">
            <div className="level-title flex items-center px-4 uppercase text-[#6EC1E4] text-[13.63px] lg:text-[15px] font-normal">
              {t("tenth_section_explore_our_level")}
            </div>
            <div className="level-number text-[#6EC1E4] text-[24px] font-semibold flex items-center justify-center">
              0{index + 1}
            </div>
          </div>
          <div className="divider" />
          <ul className="text-[15px] text-[#FFFFFFC2] font-normal">
            {infos.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
