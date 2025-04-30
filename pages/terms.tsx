import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const TermsPage: NextPage = () => {
  const { t } = useTranslation();

  const Terms = [
    {
      title: t("terms_of_use_1"),
      content: t("terms_of_use_1_1"),
    },
    {
      title: t("terms_copyright_1"),
      content: t("terms_copyright_1_1"),
    },
    {
      title: t("terms_email_communication_1"),
      content: t("terms_email_communication_1_1"),
    },
    {
      title: t("terms_no_warranty_1"),
      content: t("terms_no_warranty_1_1"),
    },
    {
      title: t("terms_no_liability_1"),
      content: t("terms_no_liability_1_1"),
    },
    {
      title: t("terms_changes_to_information_1"),
      content: t("terms_changes_to_information_1_1"),
    },
    {
      title: t("terms_intellectual_property_1"),
      content: t("terms_intellectual_property_1_1"),
    },
    {
      title: t("terms_third_party_1"),
      content: t("terms_third_party_1_1"),
    },
    {
      title: t("terms_accounts_1"),
      content: t("terms_accounts_1_1"),
    },
    {
      title: t("terms_termination_1"),
      content: t("terms_termination_1_1"),
    },
    {
      title: t("terms_disclaimer_1"),
      content: t("terms_disclaimer_1_1"),
    },
    {
      title: t("terms_changes_to_terms_1"),
      content: t("terms_changes_to_terms_1_1"),
    },
  ];
  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]">
        <h1 className="text-3xl md:text-5xl font-bold text-[#6EC1E4] text-center">
          {t("eleventh_section_terms_of_service")}
        </h1>
        <div className="flex flex-col gap-12">
          {Terms.map((privacy) => (
            <div className="flex flex-col gap-2 md:gap-8" key={privacy.title}>
              <span className="text-2xl md:text-3xl font-semibold">
                {privacy.title}
              </span>
              {privacy.content && (
                <span className="text-gray font-medium">{privacy.content}</span>
              )}
            </div>
          ))}
          <span className="text-gray font-medium">
            {t("terms_contact_us")} support@remittix.io
          </span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="bg-term"></div>
      </div>
    </div>
  );
};

export default TermsPage;
