import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import { useAccount } from "wagmi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const ProfilePage: NextPage = () => {
  const { address } = useAccount();

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[943px]">
        <h1 className="text-3xl md:text-5xl font-bold text-green text-center">
          {/* {t("eleventh_section_profile_policy")} */}
          Profile
        </h1>
        <div className="flex flex-col gap-12">
          <form className="space-y-6" action="#" method="POST">
            {/* Personal Information */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Personal Information
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="name"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Username*
                </label>
                <div className="">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="fullname"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autoComplete="fullname"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="userid"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  User ID
                </label>
                <div className="">
                  <input
                    id="userid"
                    name="userid"
                    type="text"
                    autoComplete="userid"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="email"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Email address*
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="permanentaddress"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Permanent address
                </label>
                <div className="">
                  <input
                    id="permanentaddress"
                    name="permanentaddress"
                    type="text"
                    autoComplete="permanentaddress"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="country"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="mobilenumber"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Mobile Number
                </label>
                <div className="">
                  <input
                    id="mobilenumber"
                    name="mobilenumber"
                    type="text"
                    autoComplete="mobilenumber"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Social Information */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Social Information
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="teleid"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Telegram ID
                </label>
                <div className="">
                  <input
                    id="teleid"
                    name="teleid"
                    type="text"
                    autoComplete="teleid"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="xid"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Twitter ID
                </label>
                <div className="">
                  <input
                    id="xid"
                    name="xid"
                    type="text"
                    autoComplete="xid"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="discordid"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Discord ID
                </label>
                <div className="">
                  <input
                    id="discordid"
                    name="discordid"
                    type="text"
                    autoComplete="discordid"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Wallet Information */}
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Wallet Information
            </div>

            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-6">
              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="loginwallet"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Login Wallet
                </label>
                <div className="">
                  <input
                    id="loginwallet"
                    name="loginwallet"
                    type="text"
                    autoComplete="loginwallet"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={address}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="btcwallet"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  BTC Wallet
                </label>
                <div className="">
                  <input
                    id="btcwallet"
                    name="btcwallet"
                    type="text"
                    autoComplete="btcwallet"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="solanawallet"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Solana Wallet
                </label>
                <div className="">
                  <input
                    id="solanawallet"
                    name="solanawallet"
                    type="text"
                    autoComplete="solanawallet"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="anotherwallet1"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Another Wallet-1
                </label>
                <div className="">
                  <input
                    id="anotherwallet1"
                    name="anotherwallet1"
                    type="text"
                    autoComplete="anotherwallet1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <label
                  htmlFor="anotherwallet2"
                  className="block h-full text-md text-left sm:text-right align-middle font-medium leading-6 text-gray-900"
                >
                  Another Wallet-2
                </label>
                <div className="">
                  <input
                    id="anotherwallet2"
                    name="anotherwallet2"
                    type="text"
                    autoComplete="anotherwallet2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>
            </div>


            {/* <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmpassword"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-md sm:leading-6"
                />
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green 
px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm 
hover:bg-black focus-visible:outline focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
