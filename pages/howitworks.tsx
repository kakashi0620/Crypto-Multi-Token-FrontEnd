import { Poppins } from "next/font/google";
import { Element } from "react-scroll";
import type { NextPage } from "next";
import Overview from "./_sections/Overview";
import Pay from "./_sections/Pay";
import Community from "./_sections/Community";
import Tokenomics from "./_sections/Tokenomics";
import HowtoBuy from "./_sections/HowtoBuy";
import Roadmap from "./_sections/Roadmap";
import Header from "./_sections/HowItWorks/Header";
import Process from "./_sections/HowItWorks/Process";
import FAQs from "./_sections/HowItWorks/FAQs";
import Accept from "./_sections/HowItWorks/Accept";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const HowItWorks: NextPage = () => {
  return (
    <div className={poppins.className}>
      <Header />
      <Process />
      <FAQs />
      <Accept />
    </div>
  );
};

export default HowItWorks;
