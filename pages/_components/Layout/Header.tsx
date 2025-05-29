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

  // State for dropdown menus
  const [referralDropdown, setReferralDropdown] = useState(false);
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const referralRef = useRef(null);
  const settingsRef = useRef(null);
  
  // Close dropdowns when clicking outside
  useClickAway(referralRef, () => setReferralDropdown(false));
  useClickAway(settingsRef, () => setSettingsDropdown(false));

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

  const handleWalletAction = () => {
    if (isConnected) {
      web3Modal.disconnect();
      // Clear user state when signing out
      setUser(null);
    } else {
      web3Modal.open();
    }
  };

  useEffect(() => {
    if (isConnected) {
      routeDashboard();
    }
    else {
      router.push('/')
    }
  }, [isConnected]);

  // Close all dropdowns when main menu is closed
  useEffect(() => {
    if (!isOpen) {
      setReferralDropdown(false);
      setSettingsDropdown(false);
    }
  }, [isOpen]);

  return (
    <main
      className={`relative z-20 w-full px-4 lg:px-12 2xl:px-20 py-5 bg-[#041019]`}
    >
      <div className="flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
          <img
            className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-46 2xl:w-50 h-auto object-contain max-h-16"
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
          {isConnected && (
            <>
              <Link
                href="/portfolio"
                className={`cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition hidden lg:inline-block`}
              >
                Portfolios
              </Link>
              
              {/* Admin-specific menu items */}
              {user && user.isAdmin && (
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
                </>
              )}
              
              {/* Referral Dropdown Menu - shown for all signed-in users */}
              <div className="relative hidden lg:inline-block" ref={referralRef}>
                <button 
                  className="cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition flex items-center gap-1"
                  onClick={() => setReferralDropdown(!referralDropdown)}
                >
                  Referral
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${referralDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {referralDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#0d2331] rounded-md shadow-lg py-1 z-50">
                    <Link 
                      href="/referral" 
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a3d54] hover:text-[#6EC1E4]"
                      onClick={() => setReferralDropdown(false)}
                    >
                      Ref. Information
                    </Link>
                    <Link 
                      href="/referral/withdraw" 
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a3d54] hover:text-[#6EC1E4]"
                      onClick={() => setReferralDropdown(false)}
                    >
                      Ref. Withdraw
                    </Link>
                  </div>
                )}
              </div>

              {/* Settings Dropdown Menu - shown for all signed-in users */}
              <div className="relative hidden lg:inline-block" ref={settingsRef}>
                <button 
                  className="cursor-pointer text-lg text-light-white hover:text-[#6EC1E4] transition flex items-center gap-1"
                  onClick={() => setSettingsDropdown(!settingsDropdown)}
                >
                  Setting
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${settingsDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {settingsDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#0d2331] rounded-md shadow-lg py-1 z-50">
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a3d54] hover:text-[#6EC1E4]"
                      onClick={() => setSettingsDropdown(false)}
                    >
                      Profile
                    </Link>
                    <Link 
                      href="/userranking" 
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a3d54] hover:text-[#6EC1E4]"
                      onClick={() => setSettingsDropdown(false)}
                    >
                      User Ranking
                    </Link>
                    <Link 
                      href="/" 
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a3d54] hover:text-[#6EC1E4]"
                      onClick={() => setSettingsDropdown(false)}
                    >
                      KYC
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          {/* Mobile Menu Button */}
          {/* <button
            className="lg:hidden flex items-center justify-center w-8 h-8 text-white"
            onClick={() => setOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button> */}

          {/* Simple Sign In/Out Button */}
          <div className="hidden xl:flex">
            <button
              className={`flex items-center justify-center relative bg-gradient-to-r from-[#6EC1E4] to-[#4A9BC1] text-black rounded-lg 
              w-[160px] h-[40px] md:w-[250px] md:h-[48px] text-[16px] font-semibold
              hover:from-[#4A9BC1] hover:to-[#6EC1E4] transition-all duration-300`}
              onClick={handleWalletAction}
            >
              {!isConnected ? (
                "Sign In"
              ) : (
                <div className="flex items-center justify-between w-full px-4">
                  <span>Sign Out</span>
                  <span className="text-xs text-opacity-70">({shortenAddress(address)})</span>
                </div>
              )}
            </button>
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
              {isConnected && (
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
                  
                  {/* Admin-specific menu items */}
                  {user && user.isAdmin && (
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
                    </>
                  )}
                  
                  {/* Mobile Referral submenu - shown for all signed-in users */}
                  <div className="ml-2">
                    <div 
                      className="text-base text-gray-300 hover:text-[#6EC1E4] transition flex items-center gap-1 cursor-pointer"
                      onClick={() => setReferralDropdown(!referralDropdown)}
                    >
                      Referral
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${referralDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {referralDropdown && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        <Link
                          href="/referral"
                          className="text-sm text-gray-400 hover:text-[#6EC1E4] transition"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            router.push('/referral');
                          }}
                        >
                          Ref. Information
                        </Link>
                        <Link
                          href="/referral/withdraw"
                          className="text-sm text-gray-400 hover:text-[#6EC1E4] transition"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            router.push('/referral/withdraw');
                          }}
                        >
                          Ref. Withdraw
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Settings submenu - shown for all signed-in users */}
                  <div className="ml-2">
                    <div 
                      className="text-base text-gray-300 hover:text-[#6EC1E4] transition flex items-center gap-1 cursor-pointer"
                      onClick={() => setSettingsDropdown(!settingsDropdown)}
                    >
                      Setting
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${settingsDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {settingsDropdown && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        <Link
                          href="/profile"
                          className="text-sm text-gray-400 hover:text-[#6EC1E4] transition"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            router.push('/profile');
                          }}
                        >
                          Profile
                        </Link>
                        <Link
                          href="/userranking"
                          className="text-sm text-gray-400 hover:text-[#6EC1E4] transition"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            router.push('/userranking');
                          }}
                        >
                          User Ranking
                        </Link>
                        <Link
                          href="/"
                          className="text-sm text-gray-400 hover:text-[#6EC1E4] transition"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            router.push('/');
                          }}
                        >
                          KYC
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {/* Mobile Sign In/Out button */}
              <button
                className="text-base text-gray-300 hover:text-[#6EC1E4] transition cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  handleWalletAction();
                }}
              >
                {!isConnected ? (
                  "Sign In"
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Sign Out</span>
                    <span className="text-xs">({shortenAddress(address)})</span>
                  </div>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main >
  );
}