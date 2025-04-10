import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useState } from "react";
import ImpageUpload from './_components/ImageUpload'


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const CreateDealPage: NextPage = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);
  const [round, setRound] = useState("");
  const [tokenprice, setTokenPrice] = useState("");
  const [fdv, setFDV] = useState("");
  const [mc, setMC] = useState("");
  const [vest, setVest] = useState("");
  const [fundrasing, setFundrasing] = useState("");
  const [fee, setFee] = useState("");
  const [investmin, setInvestMin] = useState("");
  const [investmax, setInvestMax] = useState("");
  const [test, setTest] = useState("");
  const [weburl, setWebURL] = useState("");
  const [xurl, setXURL] = useState("");
  const [discordurl, setDiscordURL] = useState("");
  const [teleurl, setTeleURL] = useState("");

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const onCreateDeal = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !logo || !banner || !round || !tokenprice || !fdv || !mc || !vest || !fundrasing || !fee || !investmin || !investmax || !test || !weburl || !xurl || !discordurl || !teleurl) {
      setError('Please fill out all fields and select an image.');
      return;
    }

    setUploading(true);
    setError(null);

    // Create a FormData object to send both text data and the image
    const formData = new FormData();
    formData.append('name', name);
    formData.append('logo', logo);
    formData.append('banner', banner);
    formData.append('round', round);
    formData.append('tokenprice', tokenprice);
    formData.append('fdv', fdv);
    formData.append('mc', mc);
    formData.append('vest', vest);
    formData.append('fundrasing', fundrasing);
    formData.append('fee', fee);
    formData.append('investmin', investmin);
    formData.append('investmax', investmax);
    formData.append('test', test);
    formData.append('weburl', weburl);
    formData.append('xurl', xurl);
    formData.append('discordurl', discordurl);
    formData.append('teleurl', teleurl);

    // Replace with your own server URL or image hosting API like imgBB
    axios
      .post(
        // `${process.env.REACT_APP_BACKEND_URL}/api/users/update`,
        `http://localhost:5000/api/deals/create`,
        formData
      )
      .then((res) => {
        toast.success("Deal successfully created! 🎉");
        router.push('/dashboard')
        setUploading(false);
      })
      .catch((error) => {
        const msg = error.response ? error.response.data : error.message;
        toast.error(msg);
        setError(msg);
        console.log("Deal create error:", msg);
      });
  }

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
        <h1 className="page-title">
          Create new deal
        </h1>
        <div className="flex flex-col gap-12">
          <form onSubmit={onCreateDeal} className="space-y-6" method="POST">

            {/* Personal Information */}
            <div className="subtitle">
              Header
            </div>

            <div className="input-part">

              {/* Deal name */}
              <div className="input-container">
                <label
                  htmlFor="name"
                  className="input-label"
                >
                  Deal Name
                </label>
                <div className="input-input">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Empty space */}
              <div className="hidden sm:gap-y-2 sm:grid sm:grid-cols-5" />

              {/* Logo */}
              <div className="input-container">
                <label
                  htmlFor="logo"
                  className="input-label"
                >
                  Logo
                </label>
                <div className="input-input">
                  <ImpageUpload
                    target="logo"
                    setImage={setLogo} />
                </div>
              </div>

              {/* Banner */}
              <div className="input-container">
                <label
                  htmlFor="banner"
                  className="input-label"
                >
                  Banner
                </label>
                <div className="input-input">
                  <ImpageUpload
                    target="banner"
                    setImage={setBanner} />
                </div>
              </div>
            </div>

            {/* Deal Bio */}
            <div className="subtitle">
              Deal Bio
            </div>

            <div className="input-part">
              {/* Round */}
              <div className="input-container">
                <label
                  htmlFor="round"
                  className="input-label"
                >
                  Round
                </label>
                <div className="input-input">
                  <input
                    id="round"
                    name="round"
                    type="text"
                    autoComplete="round"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={round}
                    onChange={(e) => {
                      setRound(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Token Price */}
              <div className="input-container">
                <label
                  htmlFor="tokenprice"
                  className="input-label"
                >
                  Token Price
                </label>
                <div className="input-input">
                  <input
                    id="tokenprice"
                    name="tokenprice"
                    type="text"
                    autoComplete="tokenprice"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={tokenprice}
                    onChange={(e) => {
                      setTokenPrice(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Fully Diluted Valuation */}
              <div className="input-container">
                <label
                  htmlFor="fdv"
                  className="input-label"
                >
                  Fully Diluted Valuation
                </label>
                <div className="input-input">
                  <input
                    id="fdv"
                    name="fdv"
                    type="text"
                    autoComplete="fdv"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={fdv}
                    onChange={(e) => {
                      setFDV(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Initial Market Cap */}
              <div className="input-container">
                <label
                  htmlFor="mc"
                  className="input-label"
                >
                  Initial Market Cap
                </label>
                <div className="input-input">
                  <input
                    id="mc"
                    name="mc"
                    type="text"
                    autoComplete="mc"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={mc}
                    onChange={(e) => {
                      setMC(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Vesting Summary */}
              <div className="input-container">
                <label
                  htmlFor="vest"
                  className="input-label"
                >
                  Vesting Summary
                </label>
                <div className="input-input">
                  <input
                    id="vest"
                    name="vest"
                    type="text"
                    autoComplete="vest"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={vest}
                    onChange={(e) => {
                      setVest(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Limit */}
            <div className="subtitle">
              Deal Limit
            </div>

            <div className="input-part">

              {/* Fundraising Target */}
              <div className="input-container">
                <label
                  htmlFor="fundrasing"
                  className="input-label"
                >
                  Fundraising Target
                </label>
                <div className="input-input">
                  <input
                    id="fundrasing"
                    name="fundrasing"
                    type="text"
                    autoComplete="fundrasing"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={fundrasing}
                    onChange={(e) => {
                      setFundrasing(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Fees */}
              <div className="input-container">
                <label
                  htmlFor="fee"
                  className="input-label"
                >
                  Fees
                </label>
                <div className="input-input">
                  <input
                    id="fee"
                    name="fee"
                    type="text"
                    autoComplete="fee"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={fee}
                    onChange={(e) => {
                      setFee(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Min Invest Limit */}
              <div className="input-container">
                <label
                  htmlFor="investmin"
                  className="input-label"
                >
                  Min Invest Limit
                </label>
                <div className="input-input">
                  <input
                    id="investmin"
                    name="investmin"
                    type="text"
                    autoComplete="investmin"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={investmin}
                    onChange={(e) => {
                      setInvestMin(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Max Invest Limit */}
              <div className="input-container">
                <label
                  htmlFor="investmax"
                  className="input-label"
                >
                  Max Invest Limit
                </label>
                <div className="input-input">
                  <input
                    id="investmax"
                    name="investmax"
                    type="text"
                    autoComplete="investmax"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={investmax}
                    onChange={(e) => {
                      setInvestMax(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Deal Summary */}
            <div className="subtitle">
              Deal Summary
            </div>

            {/* Test */}
            <div className="flex flex-col">
              <label
                htmlFor="test"
                className="input-label"
              >
                Test
              </label>
              <div className="input-input">
                <textarea
                  id="test"
                  name="test"
                  autoComplete="test"
                  className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  value={test}
                  onChange={(e) => {
                    setTest(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="input-part">

              {/* Website URL */}
              <div className="input-container">
                <label
                  htmlFor="weburl"
                  className="input-label"
                >
                  Website URL
                </label>
                <div className="input-input">
                  <input
                    id="weburl"
                    name="weburl"
                    type="text"
                    autoComplete="weburl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={weburl}
                    onChange={(e) => {
                      setWebURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Twitter URL */}
              <div className="input-container">
                <label
                  htmlFor="xurl"
                  className="input-label"
                >
                  Twitter URL
                </label>
                <div className="input-input">
                  <input
                    id="xurl"
                    name="xurl"
                    type="text"
                    autoComplete="xurl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={xurl}
                    onChange={(e) => {
                      setXURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Discord URL */}
              <div className="input-container">
                <label
                  htmlFor="discordurl"
                  className="input-label"
                >
                  Discord URL
                </label>
                <div className="input-input">
                  <input
                    id="discordurl"
                    name="discordurl"
                    type="text"
                    autoComplete="discordurl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={discordurl}
                    onChange={(e) => {
                      setDiscordURL(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Telegram URL */}
              <div className="input-container">
                <label
                  htmlFor="teleurl"
                  className="input-label"
                >
                  Telegram URL
                </label>
                <div className="input-input">
                  <input
                    id="teleurl"
                    name="teleurl"
                    type="text"
                    autoComplete="teleurl"
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    value={teleurl}
                    onChange={(e) => {
                      setTeleURL(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDealPage;