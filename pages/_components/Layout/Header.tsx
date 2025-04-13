import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import HamburgerMenu from "./Hamburger";
import Link from "next/link";
import RightIcon from "../Icons/Right";
import { useClickAway, useLocation } from "react-use";
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { LanugageConfig } from "../../../config/languageConfig";

// vadym add for wallet
import { useAccount, useBalance } from "wagmi";
import {
  disconnect,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
import { wagmiConfig, web3Modal } from "../../_app";
import {
  calculateTokenPrice,
  formatLocalString,
  getBackend,
  shortenAddress,
} from "../../utils";
import DisconnectIcon from "../../_components/Icons/Disconnect";

import { useRouter } from 'next/navigation' // move to profile
import { useUser } from "../../../hooks/userContext";
// vadym wallet end

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

  // vadym add for wallet
  const { address, isConnected } = useAccount();
  const { user, setUser } = useUser();
  const router = useRouter()
  const routeDashboard = async () => {
    axios.post(
      `${getBackend()}/api/users/getuser`, { address }
    )
      .then(res => {
        if (res.data === "")
          router.push('/profile')
        else {
          setUser(res.data)
          router.push('/dashboard')
        }
          
      })
      .catch(e => {
        console.log('user get error =>', e)
      });
  }

  useEffect(() => {
    if (isConnected) {
      routeDashboard();
    }
    else {
      router.push('/')
    }
  }, [, isConnected]);
  // vadym wallet end

  // bg-[#041019]
  return (
    <main
      className={`relative z-20 w-full px-4 lg:px-12 2xl:px-20 py-5 bg-[#101010]`}
    >
      <div className="flex items-center justify-between relative z-10">
        <Link href="/" className="md:flex hidden md:items-center">
          <img
            className=""
            src={"./images/logo.png"}
            draggable={false}
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-2 lg:gap-4 xl:gap-6 text-base">
          <Link
            href="/"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            Home
          </Link>
          {
            isConnected ?
              <Link
                href="/profile"
                className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
              >
                Profile
              </Link> :
              <></>
          }

          <Link
            href="/dashboard"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            Dashboard
          </Link>
          <Link
            href="/referral"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            Referral
          </Link>
          <Link
            href="/memberinfo"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            MemberInfo
          </Link>
          <Link
            href="/alldeals"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            All Deals
          </Link>
          <Link
            href="/everydeal"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            Every Deal
          </Link>
          <Link
            href="/userranking"
            className={`cursor-pointer text-lg text-light-white hover:text-green transition hidden lg:inline-block`}
          >
            User Ranking
          </Link>
        </div>

        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          {/* <Link to="presale" className="hidden xl:flex"> */}
          <div
            className={`flex items-center justify-center relative bg-green text-black rounded-lg  w-[250px] h-[48px] cursor-pointer text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis`}
          >
            <div className="flex w-full justify-between gap-2">
              {!isConnected ? (
                // primary 
                <button
                  className="h-[30.78px] md:h-[45px] w-full"
                  onClick={() => web3Modal.open()}
                >
                  Sign In
                </button>
              ) :
                (
                  // secondary
                  <button
                    className="h-[30.78px] md:h-[45px] w-full relative"
                    onClick={() => disconnect(wagmiConfig)}
                  >
                    <span>{shortenAddress(address)}</span>
                    <DisconnectIcon className="size-3 md:size-5 absolute right-2 md:right-4" />
                  </button>
                )}
            </div>
          </div>
          {/* </Link> */}

          {/* <div className="relative">
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
          </div> */}
        </div>
      </div>

      {/* <div className="bg-overview">
        <img
          className="top-right"
          src="/images/background/header.svg"
          alt="header"
        />
      </div> */}
    </main>
  );
}
