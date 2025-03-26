import { Poppins } from "next/font/google";
import { Element } from "react-scroll";
import type { NextPage } from "next";
import Overview from "./_sections/Overview";
import Pay from "./_sections/Pay";
import Community from "./_sections/Community";
import Tokenomics from "./_sections/Tokenomics";
import HowtoBuy from "./_sections/HowtoBuy";
import Roadmap from "./_sections/Roadmap";
import Accept from "./_sections/UserCase/Accept";
import Settlement from "./_sections/UserCase/Settlement";
import GetPaid from "./_sections/UserCase/GetPaid";
import Graves from "./_sections/UserCase/Graves";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const Usercase: NextPage = () => {
  return (
    <div className={poppins.className}>
      <Accept />
      <Settlement />
      <GetPaid />
      <Graves />
    </div>
  );
};

export default Usercase;
