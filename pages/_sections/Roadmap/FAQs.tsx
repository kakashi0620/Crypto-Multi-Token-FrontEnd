import { useState } from "react";
import DownRightIcon from "../../_components/Icons/DownRight";
import UpIcon from "../../_components/Icons/Up";
import FAQIcon from "../../_components/Icons/FAQIcon";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
  const { t } = useTranslation();

  const [tabIndex, setTabIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  const FAQ_TYPES = [
    // t("tenth_section_frequently_questions_general"),
    // t("tenth_section_frequently_questions_presale"),
    // t("tenth_section_frequently_questions_dashboard"),
    // t("tenth_section_frequently_questions_other"),
  ];
  const FAQ_CONTENTS = [
    [
      {
        title: 'How Private Deal Works?',
        content: 'Crypto project owner sell token at lowest price before ICO, IDO or exchanges listing to VC.'
      },
      {
        title: 'What is role of Wealthy Capital for Private Deal?',
        content: 'First, Wealthy capital invest in new crypto token as VC at lowest price. Then, Sell these token to community memebers at same price with lowest fees.'
      },
      {
        title: 'How to invest in Private deal?',
        content: 'Join in Wealthy Capital Portal. Stay connected in Telegram group. Once we will get profitabel deal, we will update is group about invetment date, time & detail about project. Manage your USDT in metamask. Invest your desire amount in Wealthy Capital Portal payment through metamask.'
      },
      {
        title: 'What is risk of private deal?',
        content: 'Cryptocurrency market is volatile. But we have a strong research team to pick best project. Also we deal directly with project team to minimize the risk.'
      },
      {
        title: 'What is risk of private deal?',
        content: 'The profitability of crypto private deal is unlimited that vary deals to deals e.g: SUI token price was $0.10 in private round. Within 12 months from listing, its price was $5.3. That means its 53X.'
      },
    ],
  ];

  return (
    <div className="relative verflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl w-full relative z-10 mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6EC1E4]/10 via-[#673DE6]/10 to-[#5804FA]/10 rounded-xl blur-xl" />
        <div className="relative p-8 md:p-16 rounded-xl border border-[#673DE6]/20 bg-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col w-full gap-4">
              <span className="text-center text-[32px] leading-[38px] md:text-[60px] md:leading-[66px] tracking-[-2px] text-light-white">
                {t("tenth_section_frequently")}{" "}
                <span className="text-[#6EC1E4]">
                  {t("tenth_section_frequently_questions")}
                </span>
              </span>
            </div>

            <div className="flex gap-1 md:gap-4 justify-center">
              {FAQ_TYPES.map((type, index) => (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`px-2 md:px-8 py-1 md:py-2 text-[14.55px] md:text-[25px] font-semibold border border-[#673DE6]/20 rounded-full cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis transition-all duration-300 ${
                    index === tabIndex 
                      ? "bg-gradient-to-r from-[#6EC1E4] via-[#673DE6] to-[#5804FA] text-white" 
                      : "text-light-white hover:border-[#673DE6]/40"
                  }`}
                  onClick={() => {
                    setTabIndex(index);
                    setSubIndex(0);
                  }}
                  key={index}
                >
                  {type}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col gap-2 md:gap-8">
              {FAQ_CONTENTS[tabIndex].map((faq, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="grid md:grid-cols-[80px_1fr]"
                  key={`0-${index}`}
                >
                  <div className="hidden md:flex faq-item mt-2 items-center justify-center">
                    <FAQIcon className="text-white" />
                  </div>
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => setSubIndex(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6EC1E4]/5 via-[#673DE6]/5 to-[#5804FA]/5 rounded-lg blur-sm" />
                    <div className="relative flex flex-col text-left px-8 py-4 gap-4 border border-[#673DE6]/20 rounded-lg bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:border-[#673DE6]/40">
                      <AnimatePresence mode="wait">
                        {index === subIndex ? (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-[24px] font-bold text-light-white tracking-[-0.8px]">
                              {faq.title}
                            </span>
                            <div className="flex flex-col pb-12 pr-4">
                              <div className="text-[15px] md:text-[18px] text-gray-400 font-normal max-w-[580px] md:max-w-[90%] tracking-[-0.8px]">
                                {faq.content}
                              </div>
                            </div>
                            <motion.div 
                              className="absolute right-4 bottom-4 p-2 rounded-full border border-white bg-black/20 text-white transition-all duration-300 group-hover:border-white"
                              animate={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <UpIcon />
                            </motion.div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-[20px] font-normal text-light-white tracking-[-0.8px] pr-4">
                              {faq.title}
                            </span>
                            <motion.div 
                              className="absolute right-4 bottom-4 p-2 rounded-full border border-white bg-black/20 text-white transition-all duration-300 group-hover:border-white"
                              animate={{ rotate: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <DownRightIcon />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
