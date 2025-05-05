import React from "react";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import LogoIcon from "../Icons/Logo";
import NavbarIcon from "../Icons/Navbar";
import Link from "next/link";
import RightIcon from "../Icons/Right";
import { useTranslation } from "react-i18next";

import { shortenAddress } from "../../utils";
import { useAccount } from "wagmi";
import { web3Modal } from "../../_app";
import DisconnectIcon from "../../_components/Icons/Disconnect";

interface NavItem {
  title: string;
  href: string;
  page?: boolean;
  target?: string;
}

const NavList: NavItem[] = [
  {
    title: "Home",
    href: "/",
    page: true,
  },
  {
    title: "Profile",
    href: "/profile",
    page: true,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    page: true,
  },
  {
    title: "Referral",
    href: "/referral",
    page: true,
  }
];

export default function HamburgerMenu(): JSX.Element {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { address, isConnected } = useAccount();

  useClickAway(ref, () => setOpen(false));

  const handleScrollToElement = (elementId: string): void => {
    setOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      scroll.scrollTo(element.offsetTop, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <div
      ref={ref}
      className="relative flex items-center gap-2 lg:hidden z-40 pr-4 lg:pr-12"
    >
      <NavbarIcon className="size-6" onClick={() => setOpen(true)} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-0 pt-[5rem] z-50 backdrop-blur-[50px] bg-[#040A127F]"
          >
            <motion.div
              className="absolute top-0 right-0 px-8 py-8 z-40 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.div>
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <LogoIcon className="text-[#6EC1E4] size-24" />
              </div>
              <ul className="grid gap-4 mb-8">
                {NavList.map((item, idx) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={item.title}
                      className="w-full p-[0.08rem] rounded-xl z-40"
                    >
                      {item.page ? (
                        <Link
                          onClick={() => setOpen(false)}
                          href={item.href}
                          className={
                            "flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                          }
                        >
                          <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                            {item.title}
                          </span>
                        </Link>
                      ) : (<></>)}
                    </motion.li>
                  );
                })}
              </ul>

              {/* Replace ScrollLink with a button that uses the scroll function */}
              <div 
                onClick={() => handleScrollToElement("presale")}
                className={`flex items-center justify-center relative bg-gradient-to-r from-[#6EC1E4] to-[#4A9BC1] text-black rounded-lg 
                          w-[160px] h-[40px] md:w-[250px] md:h-[48px] mb-2 cursor-pointer text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis 
                        hover:from-[#4A9BC1] hover:to-[#6EC1E4] transition-all duration-300`}
              >
                <div className="flex w-full justify-between gap-2">
                  {!isConnected ? (
                    <button
                      className="h-[30.78px] md:h-[45px] w-full"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent onClick
                        web3Modal.open();
                      }}
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      className="h-[30.78px] md:h-[45px] w-full relative"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent onClick
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}