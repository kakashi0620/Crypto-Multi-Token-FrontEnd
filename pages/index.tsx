import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import Overview from "./_sections/Overview";
import HowtoBuy from "./_sections/HowtoBuy";
import Roadmap from "./_sections/Roadmap";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const Home: NextPage = () => {
  return (
    <div className={poppins.className}>
      <Overview />
      <HowtoBuy />
      <Roadmap />
    </div>
  );
};

export default Home;
