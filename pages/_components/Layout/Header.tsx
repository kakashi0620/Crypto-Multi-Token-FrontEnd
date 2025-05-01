import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useClickAway, useLocation } from "react-use";
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { LanugageConfig } from "../../../config/languageConfig";

import { useAccount } from "wagmi";
import { web3Modal } from "../../_app";
import {
  getBackend,
  shortenAddress,
} from "../../utils";
import DisconnectIcon from "../../_components/Icons/Disconnect";

import { useRouter } from 'next/navigation' // move to profile
import { useUser } from "../../../hooks/userContext";


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
          console.log('setUser(res.data)', res.data)
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
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-[#1A1A1A] via-[#242424] to-[#1A1A1A] backdrop-blur-sm`}
    >
      <div className="marquee-container flex items-center h-8 w-full gap-5 overflow-x-hidden">
        <div className="marquee-bar flex text-sm whitespace-nowrap animate-marquee hover:animation-paused">
          🚀 We sell crypto tokens to our customer before launching this token. 🤑 So my business is crypto private deal. 🔥
        </div>
      </div>
      
      <div className="flex items-center justify-between relative z-10 px-4 lg:px-12 2xl:px-20 py-5">
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
            className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
          >
            Dashboard
          </Link>
          {
            user ?
              <>
                {
                  user.isAdmin ?
                    <>
                      <Link
                        href="/"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        All members
                      </Link>
                      <Link
                        href="/"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        All investors
                      </Link>
                      <Link
                        href="/dealcreate"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        Create New Deal
                      </Link>
                      <Link
                        href="/alldeals"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        All Deals
                      </Link>
                      <Link
                        href="/distribution"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        Distribution
                      </Link>
                      <Link
                        href="/referral"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        Referral
                      </Link>
                    </> :
                    <>
                      <Link
                        href="/portfolio"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        Portfolios
                      </Link>
                      <Link
                        href="/"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        Withdraw
                      </Link>
                      <Link
                        href="/referral"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        Referral
                      </Link>
                      <Link
                        href="/"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        KYC
                      </Link>
                      <Link
                        href="/userranking"
                        className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                      >
                        User Ranking
                      </Link>
                    </>
                }
              </> :
              <></>
          }
          {
            isConnected ?
              <Link
                href="/profile"
                className={`cursor-pointer text-lg text-gray-300 hover:text-[#6EC1E4] transition hidden lg:inline-block`}
              >
                Profile
              </Link> :
              <></>
          }
        </div>

        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          <div
            className={`flex items-center justify-center relative bg-gradient-to-r from-[#6EC1E4] to-[#4A9BC1] text-black rounded-lg w-[250px] h-[48px] cursor-pointer text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis hover:from-[#4A9BC1] hover:to-[#6EC1E4] transition-all duration-300`}
          >
            <div className="flex w-full justify-between gap-2">
              {!isConnected ? (
                <button
                  className="h-[30.78px] md:h-[45px] w-full"
                  onClick={() => web3Modal.open()}
                >
                  Sign In
                </button>
              ) : (
                <button
                  className="h-[30.78px] md:h-[45px] w-full relative"
                  onClick={() => web3Modal.disconnect()}
                >
                  <span>{shortenAddress(address)}</span>
                  <DisconnectIcon className="size-3 md:size-5 absolute right-2 md:right-4" />
                </button>
              )}
            </div>
          </div>
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
