import React from "react";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import LogoIcon from "../Icons/Logo";
import NavbarIcon from "../Icons/Navbar";
import Link from "next/link";
import RightIcon from "../Icons/Right";
import { useTranslation } from "react-i18next";

const NavList = [
  {
    title: "How It Works",
    href: "/howitworks",
    page: true,
  },
  {
    title: "Tokenomics",
    href: "tokenomics",
  },
  {
    title: "Use Cases",
    href: "/usecase",
    page: true,
  },
  {
    title: "$250k Giveaway",
    href: "https://gleam.io/FHtn5/250000-remittix-giveaway",
    target: "_blank",
  },
  {
    title: "Whitepaper",
    href: "https://remittix-organization.gitbook.io/remittix",
    target: "_blank",
  },
  {
    title: "Blog",
    href: "/blog",
    page: true,
  },
];

export default function HamburgerMenu() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="relative flex items-center gap-4 lg:hidden z-40 pr-4 lg:pr-12"
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
                <LogoIcon className="text-yellow size-24" />
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
                          onClick={() => setOpen((prev) => !prev)}
                          href={item.href}
                          className={
                            "flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                          }
                        >
                          <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                            {item.title}
                          </span>
                        </Link>
                      ) : item.target ? (
                        <Link
                          onClick={() => setOpen((prev) => !prev)}
                          href={item.href}
                          target="_blank"
                          className={
                            "flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                          }
                        >
                          <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                            {item.title}
                          </span>
                        </Link>
                      ) : (
                        <ScrollLink
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-center w-full text-[#98B0B1] hover:text-[#9DE2FF] cursor-pointer"
                          }
                          to={item.href}
                        >
                          <span className="flex hover:color-[#9DE2FF] color-[#98B0B1] text-lg">
                            {item.title}
                          </span>
                        </ScrollLink>
                      )}
                    </motion.li>
                  );
                })}
              </ul>

              <ScrollLink to="presale" onClick={() => setOpen((prev) => !prev)}>
                <button className="third h-[48px] w-[321px] relative mb-12">
                  <span className="text-[21px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                    {t("join_presale")}
                  </span>
                  <RightIcon className="absolute right-8 scale-50" />
                </button>
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
