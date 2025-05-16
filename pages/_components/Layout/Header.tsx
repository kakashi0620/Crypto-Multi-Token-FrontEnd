import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useClickAway } from "react-use";
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { LanugageConfig } from "../../../config/languageConfig";
import { motion, AnimatePresence } from "framer-motion";
// Import scroller instead of ScrollLink
import { scroller } from "react-scroll";

import { useAccount } from "wagmi";
import { web3Modal } from "../../_app";
import {
  getBackend,
  shortenAddress,
} from "../../utils";
import DisconnectIcon from "../../_components/Icons/Disconnect";

import { useRouter } from 'next/navigation'
import { useUser } from "../../../hooks/userContext";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickAway(menuRef, () => setOpen(false));

  const { address, isConnected } = useAccount();
  const { user, setUser } = useUser();
  const router = useRouter();

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

  // Scroll handler function
  const scrollToPresale = () => {
    scroller.scrollTo('presale', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70, // Adjust based on header height
    });
  };

  useEffect(() => {
    if (isConnected) {
      routeDashboard();
    }
    else {
      router.push('/')
    }
  }, [isConnected]);

  return (
    <main
      className={`relative z-20 w-full px-4 lg:px-12 2xl:px-20 py-5 bg-[#041019]`}
    >
      <div className="flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
          <img
            className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-46 2xl:w-50 h-auto object-contain"
            src={"./images/logo.png"}
            draggable={false}
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-2 lg:gap-4 xl:gap-6 text-base">
          <Link
            href="/"
            className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
          >
            Dashboard
          </Link>
          {user && (
            <>
              {user.isAdmin ? (
                <>
                  <Link
                    href="/"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    All members
                  </Link>
                  <Link
                    href="/"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    All investors
                  </Link>
                  <Link
                    href="/dealcreate"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    Create New Deal
                  </Link>
                  <Link
                    href="/alldeals"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    All Deals
                  </Link>
                  <Link
                    href="/distribution"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    Distribution
                  </Link>
                  <Link
                    href="/referral"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    Referral
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/portfolio"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    Portfolios
                  </Link>
                  <Link
                    href="/"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    Withdraw
                  </Link>
                  <Link
                    href="/referral"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    Referral
                  </Link>
                  <Link
                    href="/"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    KYC
                  </Link>
                  <Link
                    href="/userranking"
                    className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
                  >
                    User Ranking
                  </Link>
                </>
              )}
            </>
          )}
          {isConnected && (
            <Link
              href="/profile"
              className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
            >
              Profile
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          {/* Wallet Button - Replaced ScrollLink with div and onClick handler */}
          <div className="hidden xl:flex">
            <div
              className={`flex items-center justify-center relative bg-gradient-to-r from-[#6EC1E4] to-[#4A9BC1] text-black rounded-lg 
              w-[160px] h-[40px] md:w-[250px] md:h-[48px] cursor-pointer text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis 
              hover:from-[#4A9BC1] hover:to-[#6EC1E4] transition-all duration-300`}
              onClick={scrollToPresale}
            >
              <div className="flex w-full justify-between gap-2">
                {!isConnected ? (
                  <button
                    className="h-[30.78px] md:h-[45px] w-full"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the parent's onClick
                      web3Modal.open();
                    }}
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    className="h-[30.78px] md:h-[45px] w-full relative"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the parent's onClick
                      web3Modal.disconnect();
                    }}
                  >
                    <span>{shortenAddress(address)}</span>
                    <DisconnectIcon className="size-3 md:size-5 absolute right-2 md:right-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[72px] bg-[#242424] border-t border-white/10 md:hidden"
            ref={menuRef}
          >
            <div className="flex flex-col p-4 gap-4">
              <Link
                href="/"
                className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  router.push('/');
                }}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  router.push('/dashboard');
                }}
              >
                Dashboard
              </Link>
              {user && (
                <>
                  {user.isAdmin ? (
                    <>
                      <Link
                        href="/"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/');
                        }}
                      >
                        All members
                      </Link>
                      <Link
                        href="/"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/');
                        }}
                      >
                        All investors
                      </Link>
                      <Link
                        href="/dealcreate"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/dealcreate');
                        }}
                      >
                        Create New Deal
                      </Link>
                      <Link
                        href="/alldeals"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/alldeals');
                        }}
                      >
                        All Deals
                      </Link>
                      <Link
                        href="/distribution"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/distribution');
                        }}
                      >
                        Distribution
                      </Link>
                      <Link
                        href="/referral"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/referral');
                        }}
                      >
                        Referral
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/portfolio"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/portfolio');
                        }}
                      >
                        Portfolios
                      </Link>
                      <Link
                        href="/"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/');
                        }}
                      >
                        Withdraw
                      </Link>
                      <Link
                        href="/referral"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/referral');
                        }}
                      >
                        Referral
                      </Link>
                      <Link
                        href="/"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/');
                        }}
                      >
                        KYC
                      </Link>
                      <Link
                        href="/userranking"
                        className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          router.push('/userranking');
                        }}
                      >
                        User Ranking
                      </Link>
                    </>
                  )}
                </>
              )}
              {isConnected && (
                <Link
                  href="/profile"
                  className="text-base text-gray-300 hover:text-[#6EC1E4] transition"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    router.push('/profile');
                  }}
                >
                  Profile
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main >
  );
}