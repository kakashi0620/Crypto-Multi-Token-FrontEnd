import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React from "react";
import AdminDashCard from "./_components/AdminDashCard";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const DashboardPage: NextPage = () => {

  return (
    <>
      <div className={`bg-term ${poppins.className}`}>
        <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
          <div className="w-full flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">

            <AdminDashCard title="Total Members" num="107" detail="View Member Details" target="/memberinfo" />
            <AdminDashCard title="Total Investors" num="01" detail="View Details" target="/memberinfo" />
            <AdminDashCard title="Total Deals" num="01" detail="View Details" target="/memberinfo" />
            <AdminDashCard title="Total Fundraise" num="$1001" detail="View Details" target="/memberinfo" />
            <AdminDashCard title="Total Fees" num="$01" detail="View Details" target="/memberinfo" />
            <AdminDashCard title="Total Leaders" num="01" detail="View Leaders Details" target="/memberinfo" />
            <AdminDashCard title="Total Payment" num="$01" detail="View Details" target="/memberinfo" />
            <AdminDashCard title="Pending Payment" num="$01" detail="View Details" target="/memberinfo" />

          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
