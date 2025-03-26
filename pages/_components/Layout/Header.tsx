import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import HamburgerMenu from "./Hamburger";
import Link from "next/link";
import RightIcon from "../Icons/Right";
import { useClickAway, useLocation } from "react-use";
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { LanugageConfig } from "../../../config/languageConfig";

export default function Header() {
  const { t } = useTranslation();

  const [showLang, setShowLang] = useState<boolean>(false);
  const [lang, setLang] = useState({
    flag: "en",
    language: "en",
    name: "English",
  });

  const ref = useRef(null);

  const location = useLocation();

  const onChangeLanguage = (language: any) => {
    changeLanguage(language.language);
    setLang(language);
    setShowLang(false);
  };

  useEffect(() => {
    const currentLang = LanugageConfig.filter(
      (lang) => lang.language === i18next.language
    );
    if (currentLang && currentLang.length) {
      setLang(currentLang[0]);
    }
  }, [, location]);

  useClickAway(ref, () => setShowLang(false));

  return (
    <main
      className={`relative z-20 w-full px-4 lg:px-12 2xl:px-20 py-5 bg-[#041019]`}
    >
      <div className="flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
          <img
            className="w-[31.01px] h-[16.02px] md:w-[55.71px] md:h-[28.78px]"
            src={"./images/logo.svg"}
            draggable={false}
            alt="logo"
          />
          <div
            className={`text-[20.9px] md:text-[37.55px] font-bold ml-1 md:ml-2 text-white`}
          >
            Remittix
          </div>
        </Link>
        <div className="flex items-center gap-2 lg:gap-4 xl:gap-6 text-base">
          <Link
            href="/howitworks"
            className={`cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block`}
          >
            {t("how_it_works")}
          </Link>
          <ScrollLink
            to="tokenomics"
            className={`cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block`}
          >
            {t("tokenomics")}
          </ScrollLink>
          <Link
            href="/usecase"
            className={`cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block`}
          >
            {t("usecase")}
          </Link>
          <Link
            href="https://gleam.io/FHtn5/250000-remittix-giveaway"
            className={`cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block`}
            target="_blank"
          >
            $250k {t("giveaway")}
          </Link>
          <Link
            href="https://remittix-organization.gitbook.io/remittix"
            className={`cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block`}
            target="_blank"
          >
            {t("whitepaper")}
          </Link>
          <Link
            href="/blog"
            className={`cursor-pointer text-sm text-light-white hover:text-yellow transition hidden lg:inline-block`}
          >
            {t("blog")}
          </Link>
        </div>
        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          <ScrollLink to="presale" className="hidden xl:flex">
            <div
              className={`flex items-center justify-center relative bg-yellow text-black rounded-lg  w-[250px] h-[48px] cursor-pointer`}
            >
              <span className="text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                {t("join_presale")}
              </span>
              <div className="absolute right-4">
                <RightIcon className="scale-50" />
              </div>
            </div>
          </ScrollLink>

          <div className="relative">
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => setShowLang((prev) => !prev)}
            >
              <img
                src={`./images/flags/${lang.flag}.svg`}
                className="w-6 h-6 rounded-lg"
                alt="flag"
              />
              <span className={`leading-6 hidden md:block text-white`}>
                {lang?.flag.toUpperCase()}
              </span>
            </div>

            {showLang && (
              <div
                className="absolute flex flex-col right-0 top-8 bg-[#0d213bd0] h-[240px] overflow-y-scroll overflow-x-hidden rounded-lg w-[200px]"
                ref={ref}
              >
                {LanugageConfig.map((language) => (
                  <div
                    className="flex gap-2 hover:bg-[#0d213b] px-2 py-1 cursor-pointer"
                    key={language.language}
                    onClick={() => onChangeLanguage(language)}
                  >
                    <img
                      src={`./images/flags/${language.flag}.svg`}
                      className="w-6 h-6 rounded-lg"
                      alt="flag"
                    />
                    <span>{language.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-overview">
        <img
          className="top-left"
          src="/images/background/header.svg"
          alt="header"
        />
      </div>
    </main>
  );
}
