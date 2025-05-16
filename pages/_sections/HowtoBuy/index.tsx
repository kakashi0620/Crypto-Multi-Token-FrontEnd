import React, { useState } from "react";
import BuySteps from "./BuySteps";
import RightIcon from "../../_components/Icons/Right";
import Silder from "./Slider";
import Link from "next/link";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HowtoBuy() {
  const { t } = useTranslation();
  const [buyPrice, setBuyPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [investment, setInvestment] = useState<string>("");
  const [profit, setProfit] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(0);
  const [showProfit, setShowProfit] = useState<boolean>(false);

  const calculateProfit = () => {
    const buyPriceNum = parseFloat(buyPrice);
    const sellPriceNum = parseFloat(sellPrice);
    const investmentNum = parseFloat(investment);

    if (isNaN(buyPriceNum) || isNaN(sellPriceNum) || isNaN(investmentNum)) {
      return;
    }

    const calculatedProfit = (sellPriceNum - buyPriceNum) * (investmentNum / buyPriceNum);
    const calculatedMultiplier = sellPriceNum / buyPriceNum;

    setProfit(calculatedProfit);
    setMultiplier(calculatedMultiplier);
    setShowProfit(true);
  };

  return (
    <main className="flex flex-col items-center justify-center z-10 text-black">
      <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-12 2xl:px-20 lg:gap-12 bg-[#02080E80] py-4 lg:pt-12">
        {/* <Element name="howtobuy"> */}
        <div className="flex flex-col items-center">
          <div className="relative w-fit text-center">
            <span className="text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[60px] xl:text-[80px] leading-[34px] sm:leading-[38px] md:leading-[46px] lg:leading-[66px] xl:leading-[86px] font-bold relative z-10">
              How to be a part of Wealthy Capital
            </span>
          </div>
        </div>
        {/* </Element> */}
        <div className="flex-grow mt-4">
          <BuySteps />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2 mt-4 relative z-10"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[50px] xl:text-[70px] leading-[1.2] tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.8px] text-white font-semibold mb-3 sm:mb-4">
            Calculate Profit
          </h2>
          <p className="text-white text-base sm:text-lg">
            Calculate your potential returns from token trading
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-5xl w-full relative z-10"
        >
          <div className="relative p-4 sm:p-8 md:p-10 lg:p-16 mb-8 sm:mb-10 md:mb-12 rounded-xl faq-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                <label className="text-white text-sm sm:text-base">Token Buy Price</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={buyPrice}
                    onChange={(e) => {
                      setBuyPrice(e.target.value);
                      calculateProfit();
                    }}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm sm:text-base">USD</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                <label className="text-white text-sm sm:text-base">Investment Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={investment}
                    onChange={(e) => {
                      setInvestment(e.target.value);
                      calculateProfit();
                    }}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm sm:text-base">USD</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                <label className="text-white text-sm sm:text-base">Token Sell Price</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sellPrice}
                    onChange={(e) => {
                      setSellPrice(e.target.value);
                      calculateProfit();
                    }}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm sm:text-base">USD</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                <label className="text-white text-sm sm:text-base">Calculate</label>
                <button
                  onClick={calculateProfit}
                  className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Calculate Profit
                </button>
              </motion.div>
            </div>

            {showProfit && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-white text-sm sm:text-base mb-1">Profit</p>
                    <p className="text-2xl sm:text-3xl font-bold text-green-600">
                      ${typeof profit === 'number' ? profit.toFixed(2) : '0.00'}
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-white text-sm sm:text-base mb-1">Multiplier</p>
                    <p className="text-2xl sm:text-3xl font-bold text-green-600">
                      {typeof multiplier === 'number' ? multiplier.toFixed(2) : '0.00'}x
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
