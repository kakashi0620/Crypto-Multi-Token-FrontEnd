import { Poppins } from "next/font/google";
import { Element } from "react-scroll";
import type { NextPage } from "next";
import Overview from "./_sections/Overview";
import Pay from "./_sections/Pay";
import Accept from "./_sections/Accept";
import Community from "./_sections/Community";
import Tokenomics from "./_sections/Tokenomics";
import HowtoBuy from "./_sections/HowtoBuy";
import Roadmap from "./_sections/Roadmap";
import Competition from "./_sections/Blog/Competition";
import DigDeep from "./_sections/Blog/DigDeep";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const Blog: NextPage = () => {
  return (
    <div className={poppins.className}>
      <Competition />
      <DigDeep />
    </div>
  );
};

export default Blog;
