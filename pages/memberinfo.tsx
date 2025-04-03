import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import MemberListCard from './_components/MemberTbl/MemberListCard';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const MemberInfo: NextPage = () => {
  
  const router = useRouter()
  const onCreateDeal = () => {
    router.push('/createdeal')
  }

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-auto">
        <div className="flex flex-col gap-8">
          {/* Memeber Information */}
          <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
            Memeber Information
          </div>
          <MemberListCard />
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
