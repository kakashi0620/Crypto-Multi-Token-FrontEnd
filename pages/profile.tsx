import axios from "axios";
import toast from "react-hot-toast";
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import React, { useEffect, useState } from "react";
import copy from 'clipboard-copy';
import { useRouter } from "next/router";
import { useUser } from "../hooks/userContext";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const ProfilePage: NextPage = () => {

  const router = useRouter();
  const { address } = useAccount();
  const { user, setUser } = useUser();

  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userID, setUserID] = useState("");
  const [referrallink, setReferrallink] = useState("");
  const [email, setEmail] = useState("");
  const [perAddress, setPerAddress] = useState("");
  const [country, setCountry] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [teleid, setTelegramID] = useState("");
  const [xid, setXID] = useState("");
  const [discordid, setDiscordID] = useState("");
  const [btcwallet, setBTCWallet] = useState("");
  const [solwallet, setSOLWallet] = useState("");
  const [wallet1, setOtherWallet1] = useState("");
  const [wallet2, setOtherWallet2] = useState("");

  const [copyState, setCopyState] = useState(false); // referral link copy
  const [bUserExist, setUserExist] = useState(false);


  const getUserID = async () => {
    const userCount = await axios.get(`http://localhost:5000/api/users/getUserCount`);

    let uidStr = "WC";
    console.log(userCount.data)
    const zeroCount = 5 - userCount.data.toString().length;
    for (let i = 0; i < zeroCount; ++i) {
      uidStr += '0'
    }

    uidStr += (userCount.data + 1)

    console.log('user id =>', uidStr);
    return uidStr;
  }

  const getReferralLink = (userID: string) => {
    return "http://localhost:3000/signup?ref=" + userID
  }

  const initValues = async () => {

    const userData = user;

    if (!userData) {
      const id = await getUserID();
      setUserID(id);
      setReferrallink(getReferralLink(id));
    }
    else {
      setName(userData.userName);
      setFullName(userData.fullName);
      setUserID(userData.userId);
      setReferrallink(getReferralLink(userData.userId));
      setEmail(userData.emailAddress);
      setPerAddress(userData.permanentAddress);
      setCountry(userData.country);
      setMobileNumber(userData.mobileNumber);
      setTelegramID(userData.telegramId);
      setXID(userData.twitterId);
      setDiscordID(userData.discordId);
      setBTCWallet(userData.btcWallet);
      setSOLWallet(userData.solanaWallet);
      setOtherWallet1(userData.anotherWallet1);
      setOtherWallet2(userData.anotherWallet2);

      setUserExist(true);
    }
  }

  useEffect(() => {
    initValues()
  }, [])

  const onRigister = (e) => {

    e.preventDefault();

    const referred_by = JSON.parse(localStorage.getItem("referred_by") as string);

    const newUser = referred_by === "" ?
      {
        userName: name,
        fullName: fullName,
        userId: userID,
        enterDate: new Date(),
        emailAddress: email,
        permanentAddress: perAddress,
        country: country,
        mobileNumber: mobilenumber,
        telegramId: teleid,
        twitterId: xid,
        discordId: discordid,
        loginWallet: address,
        btcWallet: btcwallet,
        solanaWallet: solwallet,
        anotherWallet1: wallet1,
        anotherWallet2: wallet2,
      } :
      {
        userName: name,
        fullName: fullName,
        userId: userID,
        enterDate: new Date(),
        emailAddress: email,
        permanentAddress: perAddress,
        country: country,
        mobileNumber: mobilenumber,
        telegramId: teleid,
        twitterId: xid,
        discordId: discordid,
        loginWallet: address,
        btcWallet: btcwallet,
        solanaWallet: solwallet,
        anotherWallet1: wallet1,
        anotherWallet2: wallet2,
        referred_by: referred_by,
      };

    if (bUserExist) {
      axios
        .post(
          // `${process.env.REACT_APP_BACKEND_URL}/api/users/update`,
          `http://localhost:5000/api/users/update`,
          newUser
        )
        .then((res) => {
          setUser(res.data);

          toast.success("Profile successfully updated! 🎉");
          router.push('/dashboard')
        })
        .catch((error) => {
          console.log(
            "Profile Update error:",
            error.response ? error.response.data : error.message
          );
        });
    }
    else {
      axios
        .post(
          // `${process.env.REACT_APP_BACKEND_URL}/api/users/register`,
          `http://localhost:5000/api/users/register`,
          newUser
        )
        .then((res) => {
          setUser(res.data);
          
          toast.success("Profile successfully registered! 🎉");
          router.push('/dashboard')
        })
        .catch((error) => {
          console.log(
            "Profile Register error:",
            error.response ? error.response.data : error.message
          );
        });
    }
  }

  const onCopy = async (e) => {
    
    e.preventDefault();

    await copy(referrallink);
    setCopyState(true)
  }

  // Country start.
  const [countries, setCountries] = useState(["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"]);

  // Handle country selection change
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };
  // Country end

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
        <h1 className="page-title">
          {/* {t("eleventh_section_profile_policy")} */}
          Profile
        </h1>
        <div className="flex flex-col gap-12">
          <form className="space-y-6" method="POST">
            {/* Personal Information */}
            <div className="subtitle">
              Personal Information
            </div>

            <div className="input-part">

              {/* User name */}
              <div className="input-container">
                <label
                  htmlFor="name"
                  className="input-label"
                >
                  Username*
                </label>
                <div className="input-input">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="input-text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Full Name */}
              <div className="input-container">
                <label
                  htmlFor="fullname"
                  className="input-label"
                >
                  Full Name
                </label>
                <div className="input-input">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autoComplete="fullname"
                    required
                    className="input-text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* User ID */}
              <div className="input-container">
                <label
                  htmlFor="userid"
                  className="input-label"
                >
                  User ID
                </label>
                <div className="input-input">
                  <input
                    id="userid"
                    name="userid"
                    type="text"
                    autoComplete="userid"
                    className="input-text"
                    disabled
                    value={userID}
                  />
                </div>
              </div>

              {/* Referral Link */}
              <div className="input-container">
                <label
                  htmlFor="referrallink"
                  className="input-label"
                >
                  Referral Link
                </label>

                <div className="relative w-full input-input">
                  <input
                    id="referrallink"
                    name="referrallink"
                    type="text"
                    autoComplete="referrallink"
                    className="block w-full z-20 rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    disabled
                    value={referrallink}
                  />

                  {
                    bUserExist ?
                      <>
                        <button data-copy-to-clipboard-target="referrallink" data-tooltip-target="tooltip-referrallink-copy-button" className="absolute end-1 top-1/2 -translate-y-1/2 bg-[#1c1c1c] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center" onClick={(e) => onCopy(e)}>
                          {
                            copyState ?
                              <span id="success-icon">
                                <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                              </span> :
                              <span id="default-icon">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                              </span>
                          }
                        </button>
                        {/* <div id="tooltip-referrallink-copy-button" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                          <span id="default-tooltip-message">Copy to clipboard</span>
                          <span id="success-tooltip-message" className="hidden">Copied!</span>
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div> */}
                      </> :
                      <></>
                  }

                </div>
              </div>

              {/* Email address */}
              <div className="input-container">
                <label
                  htmlFor="email"
                  className="input-label"
                >
                  Email address*
                </label>
                <div className="input-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="input-text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Permanent address */}
              <div className="input-container">
                <label
                  htmlFor="permanentaddress"
                  className="input-label"
                >
                  Permanent address
                </label>
                <div className="input-input">
                  <input
                    id="permanentaddress"
                    name="permanentaddress"
                    type="text"
                    autoComplete="permanentaddress"
                    className="input-text"
                    value={perAddress}
                    onChange={(e) => {
                      setPerAddress(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Country */}
              <div className="input-container">
                <label
                  htmlFor="country"
                  className="input-label"
                >
                  Country
                </label>
                <div className="input-input">
                  <select
                    id="country"
                    name="country"
                    value={country}
                    className="input-text"
                    onChange={handleCountryChange}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mobile Number */}
              <div className="input-container">
                <label
                  htmlFor="mobilenumber"
                  className="input-label"
                >
                  Mobile Number
                </label>
                <div className="input-input">
                  <input
                    id="mobilenumber"
                    name="mobilenumber"
                    type="text"
                    autoComplete="mobilenumber"
                    className="input-text"
                    value={mobilenumber}
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Social Information */}
            <div className="subtitle">
              Social Information
            </div>

            <div className="input-part">
              {/* Telegram ID */}
              <div className="input-container">
                <label
                  htmlFor="teleid"
                  className="input-label"
                >
                  Telegram ID*
                </label>
                <div className="input-input">
                  <input
                    id="teleid"
                    name="teleid"
                    type="text"
                    autoComplete="teleid"
                    className="input-text"
                    value={teleid}
                    onChange={(e) => {
                      setTelegramID(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Twitter ID */}
              <div className="input-container">
                <label
                  htmlFor="xid"
                  className="input-label"
                >
                  Twitter ID*
                </label>
                <div className="input-input">
                  <input
                    id="xid"
                    name="xid"
                    type="text"
                    autoComplete="xid"
                    className="input-text"
                    value={xid}
                    onChange={(e) => {
                      setXID(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Discord ID */}
              <div className="input-container">
                <label
                  htmlFor="discordid"
                  className="input-label"
                >
                  Discord ID
                </label>
                <div className="input-input">
                  <input
                    id="discordid"
                    name="discordid"
                    type="text"
                    autoComplete="discordid"
                    className="input-text"
                    value={discordid}
                    onChange={(e) => {
                      setDiscordID(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Wallet Information */}
            <div className="subtitle">
              Wallet Information
            </div>

            <div className="input-part">
              {/* Login Wallet */}
              <div className="input-container">
                <label
                  htmlFor="loginwallet"
                  className="input-label"
                >
                  Login Wallet
                </label>
                <div className="input-input">
                  <input
                    id="loginwallet"
                    name="loginwallet"
                    type="text"
                    autoComplete="loginwallet"
                    className="input-text"
                    disabled
                    value={address}
                  />
                </div>
              </div>

              {/* BTC Wallet */}
              <div className="input-container">
                <label
                  htmlFor="btcwallet"
                  className="input-label"
                >
                  BTC Wallet
                </label>
                <div className="input-input">
                  <input
                    id="btcwallet"
                    name="btcwallet"
                    type="text"
                    autoComplete="btcwallet"
                    className="input-text"
                    value={btcwallet}
                    onChange={(e) => {
                      setBTCWallet(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Solana Wallet */}
              <div className="input-container">
                <label
                  htmlFor="solanawallet"
                  className="input-label"
                >
                  Solana Wallet
                </label>
                <div className="input-input">
                  <input
                    id="solanawallet"
                    name="solanawallet"
                    type="text"
                    autoComplete="solanawallet"
                    className="input-text"
                    value={solwallet}
                    onChange={(e) => {
                      setSOLWallet(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Another Wallet-1 */}
              <div className="input-container">
                <label
                  htmlFor="anotherwallet1"
                  className="input-label"
                >
                  Another Wallet-1
                </label>
                <div className="input-input">
                  <input
                    id="anotherwallet1"
                    name="anotherwallet1"
                    type="text"
                    autoComplete="anotherwallet1"
                    className="input-text"
                    value={wallet1}
                    onChange={(e) => {
                      setOtherWallet1(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Another Wallet-2 */}
              <div className="input-container">
                <label
                  htmlFor="anotherwallet2"
                  className="input-label"
                >
                  Another Wallet-2
                </label>
                <div className="input-input">
                  <input
                    id="anotherwallet2"
                    name="anotherwallet2"
                    type="text"
                    autoComplete="anotherwallet2"
                    className="input-text"
                    value={wallet2}
                    onChange={(e) => {
                      setOtherWallet2(e.target.value);
                    }}
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
              <div className="input-input">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1 text-gray-900 
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
              <div className="input-input">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1 
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
px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm 
hover:bg-black focus-visible:outline focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-green"
                onClick={(e) => onRigister(e)}
              >
                Save Data
                {/* {bUserExist ? "Update" : "Sign Up"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
