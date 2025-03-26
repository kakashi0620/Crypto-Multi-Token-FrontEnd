import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const PrivacyPage: NextPage = () => {
  const { t } = useTranslation();

  const Privacy = [
    {
      title: t("privacy_introduction_1"),
      content: t("privacy_introduction_1_1"),
    },
    {
      title: t("privacy_acceptance_of_terms_1"),
      content: t("privacy_acceptance_of_terms_1_1"),
    },
    {
      title: t("privacy_definitions_1"),
      content: "",
      items: [
        t("privacy_definitions_1_1"),
        t("privacy_definitions_1_2"),
        t("privacy_definitions_1_3"),
        t("privacy_definitions_1_4"),
        t("privacy_definitions_1_5"),
        t("privacy_definitions_1_6"),
        t("privacy_definitions_1_7"),
        t("privacy_definitions_1_8"),
        t("privacy_definitions_1_9"),
      ],
    },
    {
      title: t("privacy_types_of_information_collected_1"),
      content: t("privacy_types_of_information_collected_1_1"),
      items: [
        t("privacy_types_of_information_collected_1_2"),
        t("privacy_types_of_information_collected_1_3"),
        t("privacy_types_of_information_collected_1_4"),
        t("privacy_types_of_information_collected_1_5"),
        t("privacy_types_of_information_collected_1_6"),
        t("privacy_types_of_information_collected_1_7"),
      ],
      more: t("privacy_types_of_information_collected_1_8"),
    },
    {
      title: t("privacy_collection_and_use_1"),
      content: t("privacy_collection_and_use_1_1"),
    },
    {
      title: t("privacy_use_of_collected_information_1"),
      content: t("privacy_use_of_collected_information_1_1"),
      items: [
        t("privacy_use_of_collected_information_1_2"),
        t("privacy_use_of_collected_information_1_3"),
        t("privacy_use_of_collected_information_1_4"),
        t("privacy_use_of_collected_information_1_5"),
        t("privacy_use_of_collected_information_1_6"),
      ],
      more: t("privacy_use_of_collected_information_1_7"),
    },
    {
      title: t("privacy_transfer_of_personal_information_1"),
      content: t("privacy_transfer_of_personal_information_1_1"),
    },
    {
      title: t("privacy_disclosure_of_personal_information_1"),
      content: t("privacy_disclosure_of_personal_information_1_1"),
      items: [
        t("privacy_disclosure_of_personal_information_1_2"),
        t("privacy_disclosure_of_personal_information_1_3"),
        t("privacy_disclosure_of_personal_information_1_4"),
      ],
      more: t("privacy_disclosure_of_personal_information_1_5"),
    },
    {
      title: t("privacy_data_security_1"),
      content: t("privacy_data_security_1_1"),
    },
    {
      title: t("privacy_use_data_rights_and_choices_1"),
      content: t("privacy_use_data_rights_and_choices_1_1"),
      items: [
        t("privacy_use_data_rights_and_choices_1_2"),
        t("privacy_use_data_rights_and_choices_1_3"),
        t("privacy_use_data_rights_and_choices_1_4"),
      ],
      more: t("privacy_use_data_rights_and_choices_1_5"),
    },
    {
      title: t("privacy_childrens_privacy_1"),
      content: t("privacy_childrens_privacy_1_1"),
    },
    {
      title: t("privacy_third_party_1"),
      content: t("privacy_third_party_1_1"),
    },
    {
      title: t("privacy_policy_updates_1"),
      content: t("privacy_policy_updates_1_1"),
    },
    {
      title: t("privacy_contact_us_1"),
      content: t("privacy_contact_us_1_1"),
    },
  ];
  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow text-center">
          {t("eleventh_section_privacy_policy")}
        </h1>
        <div className="flex flex-col gap-12">
          {Privacy.map((privacy) => (
            <div className="flex flex-col gap-4 md:gap-8" key={privacy.title}>
              <span className="text-2xl md:text-3xl font-semibold">
                {privacy.title}
              </span>
              {(privacy.content || privacy.items) && (
                <div className="flex flex-col">
                  {privacy.content && (
                    <span className="text-gray font-medium">
                      {privacy.content}
                    </span>
                  )}
                  {privacy.items && (
                    <ul className="text-gray font-medium list-disc px-6">
                      {privacy.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {privacy.more && (
                <span className="text-gray font-medium">{privacy.more}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
