import React from "react";
import VerticalDivider from "./_components/Icons/VerticalDivider";

export default function Overview() {

  const Referrers = [
    {
      no: "1",
      level: "1",
      name: "rsi",
      date: "2025/3/30",
      total: "24000",
      bonus: "130",
    },
    {
      no: "2",
      level: "2",
      name: "maxym",
      date: "2025/3/28",
      total: "35000",
      bonus: "80",
    },
    {
      no: "3",
      level: "3",
      name: "vadym",
      date: "2025/3/29",
      total: "11000",
      bonus: "30",
    },
  ];

  const WithdrawHistory = [
    {
      no: "1",
      date: "2025/3/30",
      chain: "BEP-20",
      wallet: "0x3C8cd0dB9a01EfA063a7760267b822A129bc7DCA",
      amount: "1732",
      status: "Pending",
      details: ""
    },
    {
      no: "2",
      date: "2025/3/29",
      chain: "ERC-20",
      wallet: "0x54F219469f8d6b938BD2D86d2b0256Ed4cC3f8dA",
      amount: "476",
      status: "Approved",
      details: ""
    },
    {
      no: "3",
      date: "2025/3/28",
      chain: "ERC-20",
      wallet: "0x6881B80ea7C858E4aEEf63893e18a8A36f3682f3",
      amount: "8465",
      status: "Rejected",
      details: ""
    }
  ];

  const onWithdraw = () => {

  }

  return (
    <main className="flex flex-col items-center justify-center lg:py-16 z-10 relative">
      <div className="max-w-[1320px] w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">

        {/* Referral Information */}
        <div className="w-full py-10 item-center flex flex-col gap-8">
          <div className="w-full mb-4 text-2xl font-medium text-green border-b-2 border-green">
            Referral Information
          </div>

          <div className="referrer-table flex flex-col gap-2 overflow-x-auto whitespace-nowrap">
            <div className="referrer-header referrer-row items-center h-[33.76px] md:h-[49.28px]">
              <div className="flex text-green items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  No
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Level
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Username
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Joined Date
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Total Invest
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Bonus Earn
                </span>
              </div>
            </div>

            <div className="referrer-body flex flex-col font-normal py-4 gap-2 md:gap-4 linear-border-top-left">
              {Referrers.map((item) => (
                <div
                  key={item.no}
                  className="referrer-row"
                >
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.no}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.level}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.name}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.date}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.total}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Withdraw */}
        <div className="w-full py-10 item-center flex flex-col md:flex-row gap-8">
          <div className={`flex items-center justify-center relative bg-green text-black rounded-lg  w-[250px] h-[48px] cursor-pointer text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis`}>
            <div className="flex w-full justify-between">
              <button className="h-[30.78px] md:h-[45px] w-full" onClick={() => onWithdraw()} >
                Withdraw
              </button>
            </div>
          </div>

          <div className="text-xl traking-[-2px] font-normal text-light-white">
            After making withdrawal request, balance will show under “Pending Withdrawal”. Admin will send this payment manually and update as “Completed Payment” with a note of TrxID from admin dashboard.
          </div>
        </div>

        {/* Withdrawal History */}
        <div className="w-full py-10 item-center flex flex-col gap-8">
          <div className="w-full mb-4 text-2xl font-medium text-green border-b-2 border-green">
            Withdrawal History
          </div>

          <div className="withdraw-table flex flex-col w-full gap-2 overflow-x-auto whitespace-nowrap">
            <div className="withdraw-header withdraw-row items-center h-[33.76px] md:h-[49.28px]">
              <div className="flex text-green items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  SN
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Date
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Chain
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Wallet Address
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Amount
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Status
                </span>
                <VerticalDivider />
              </div>
              <div className="flex items-center gap-2 cell-ellipsis">
                <span className="w-full text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">
                  Details
                </span>
              </div>
            </div>

            <div className="withdraw-body flex flex-col font-normal py-4 gap-2 md:gap-4 linear-border-top-left">
              {WithdrawHistory.map((item) => (
                <div
                  key={item.no}
                  className="withdraw-row"
                >
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.no}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.date}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.chain}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.wallet}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.amount}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.status}</span>
                  <span className="text-center cell-ellipsis text-[11.2px] md:text-[16.34px]">{item.details}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
