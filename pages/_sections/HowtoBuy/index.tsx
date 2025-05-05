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
  const [tokenBuy, setTokenBuy] = useState("0.10");
  const [investAmount, setInvestAmount] = useState("1000");
  const [tokenSell, setTokenSell] = useState("0.25");
  const [profit, setProfit] = useState("2500.00");
  const [multiplier, setMultiplier] = useState("2.5");

  const calculateProfit = () => {
    const buyPrice = parseFloat(tokenBuy);
    const amount = parseFloat(investAmount);
    const sellPrice = parseFloat(tokenSell);
    
    if (isNaN(buyPrice) || isNaN(amount) || isNaN(sellPrice) || buyPrice <= 0) {
      setProfit("0.00");
      setMultiplier("0.0");
      return;
    }
    
    const tokensReceived = amount / buyPrice;
    const sellValue = tokensReceived * sellPrice;
    const profitValue = sellValue - amount;
    const multiplierValue = sellValue / amount;
    
    setProfit(sellValue.toFixed(2));
    setMultiplier(multiplierValue.toFixed(1));
  };

  return (
    <main className="flex flex-col items-center justify-center z-10 text-black">
      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 bg-[#F2F5F6] py-12">
        {/* <Element name="howtobuy"> */}
          <div className="flex flex-col items-center">
            <div className="relative w-fit">
              <span className="text-[#041019] text-[40px] leading-[46px] lg:text-[80px] lg:leading-[86px] font-bold relative z-10">
                How to be a part of Wealthy Capital
              </span>
            </div>
          </div>
        {/* </Element> */}
        <div className="flex-grow mt-12">
          <BuySteps />
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 lg:gap-12 relative overflow-hidden bg-[#F2F5F6]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 relative z-10"
        >
          <h2 className="text-[38px] lg:text-[70px] leading-[1.2] tracking-[-0.8px] text-black font-semibold mb-4">
            Profit Calculator
          </h2>
          <p className="text-gray-400 text-lg">
            Calculate your potential returns from token trading
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-5xl w-full relative z-10"
        >
          <div className="relative p-10 lg:p-16 mb-12 rounded-xl border border-white bg-white backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="md:col-span-1"
              >
                <label className="block text-gray-400 text-lg mb-2">Token Buy Price</label>
                <div className="relative">
                  <div className="relative flex items-center bg-black/40 rounded-lg border border-white/10 overflow-hidden group transition-all duration-300 hover:border-white/20">
                    <span className="pl-4 text-gray-400">$</span>
                    <input
                      type="number"
                      value={tokenBuy}
                      onChange={(e) => {
                        setTokenBuy(e.target.value);
                        calculateProfit();
                      }}
                      className="w-full bg-transparent px-4 py-3 text-light-white outline-none"
                      placeholder="0.10"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="md:col-span-1"
              >
                <label className="block text-gray-400 text-lg mb-2">Investment Amount</label>
                <div className="relative">
                  <div className="relative flex items-center bg-black/40 rounded-lg border border-white/10 overflow-hidden group transition-all duration-300 hover:border-white/20">
                    <span className="pl-4 text-gray-400">$</span>
                    <input
                      type="number"
                      value={investAmount}
                      onChange={(e) => {
                        setInvestAmount(e.target.value);
                        calculateProfit();
                      }}
                      className="w-full bg-transparent px-4 py-3 text-light-white outline-none"
                      placeholder="1000"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="md:col-span-1"
              >
                <label className="block text-gray-400 text-lg mb-2">Token Sell Price</label>
                <div className="relative">
                  <div className="relative flex items-center bg-black/40 rounded-lg border border-white/10 overflow-hidden group transition-all duration-300 hover:border-white/20">
                    <span className="pl-4 text-gray-400">$</span>
                    <input
                      type="number"
                      value={tokenSell}
                      onChange={(e) => {
                        setTokenSell(e.target.value);
                        calculateProfit();
                      }}
                      className="w-full bg-transparent px-4 py-3 text-light-white outline-none"
                      placeholder="0.25"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-end md:col-span-1"
              >
                <button
                  onClick={calculateProfit}
                  className="w-full py-3 px-6 text-lg bg-[#6EC1E4] text-white rounded-lg hover:bg-[#4A9BC1] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Calculate
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="inline-block relative p-6 rounded-lg">
                <div className="relative text-xl text-light-white">
                  <span className="text-[#6EC1E4] font-bold">${profit}</span> <span className="text-black">is your sell volume from this deal.{' '}
                  Its </span><span className="text-[#6EC1E4] font-bold">{multiplier}X</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
