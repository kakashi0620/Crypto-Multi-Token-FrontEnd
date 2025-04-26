import axios from "axios";
import moment from 'moment-timezone';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useState } from "react";
import ImpageUpload from './_components/ImageUpload'
import { getBackend } from "./utils";
import { useDeal } from "../hooks/dealContext";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const CreateDealPage: NextPage = () => {

  const router = useRouter();
  const { deal } = useDeal()

  const [name, setName] = useState(deal?.name);
  const [logo, setLogo] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);
  const [round, setRound] = useState(deal?.round);
  const [tokenprice, setTokenPrice] = useState(deal?.tokenprice);
  const [fdv, setFDV] = useState(deal?.fdv);
  const [mc, setMC] = useState(deal?.mc);
  const [vesttge, setVestTGE] = useState(deal?.vesttge);
  const [vestcliff, setVestCliff] = useState(deal?.vestcliff);
  const [vestgap, setVestGap] = useState(deal?.vestgap);
  const [fundrasing, setFundrasing] = useState(deal?.fundrasing);
  const [fee, setFee] = useState(deal?.fee);
  const [investmin, setInvestMin] = useState(deal?.investmin);
  const [investmax, setInvestMax] = useState(deal?.investmax);
  const [test, setTest] = useState(deal?.test);
  const [weburl, setWebURL] = useState(deal?.weburl);
  const [xurl, setXURL] = useState(deal?.xurl);
  const [discordurl, setDiscordURL] = useState(deal?.discordurl);
  const [teleurl, setTeleURL] = useState(deal?.teleurl);
  const [tc_pulltrust, setPullTrust] = useState(deal?.tc_pulltrust);
  const [tc_pinmsg, setPinMsg] = useState(deal?.tc_pinmsg);
  const [tc_answer, setAnswer] = useState(deal?.tc_answer);
  const [tc_responsible, setResponsible] = useState(deal?.tc_responsible);
  const [tc_acknowledge, setAcknowledge] = useState(deal?.tc_acknowledge);
  const [tc_allocation, setAllocation] = useState(deal?.tc_allocation);
  const [tc_never, setNever] = useState(deal?.tc_never);
  const [livedate, setLiveDate] = useState<string>(moment.utc(deal ? deal.livedate : new Date()).format('YYYY-MM-DDTHH:mm'));
  const [timezone, setTimeZone] = useState(deal?.timezone);

  const selectAll = (checked: boolean) => {
    setPullTrust(checked)
    setPinMsg(checked)
    setAnswer(checked)
    setResponsible(checked)
    setAcknowledge(checked)
    setAllocation(checked)
    setNever(checked)
  }

  const [timezone_list, setTimezoneList] = useState([
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Antarctica/Mawson',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'Asia/Baku',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Europe/Sofia',
    'Atlantic/Bermuda',
    'Asia/Brunei',
    'America/La_Paz',
    'America/Noronha',
    'America/Belem',
    'America/Fortaleza',
    'America/Recife',
    'America/Araguaina',
    'America/Maceio',
    'America/Bahia',
    'America/Sao_Paulo',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Santarem',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Manaus',
    'America/Eirunepe',
    'America/Rio_Branco',
    'America/Nassau',
    'Asia/Thimphu',
    'Europe/Minsk',
    'America/Belize',
    'America/St_Johns',
    'America/Halifax',
    'America/Glace_Bay',
    'America/Moncton',
    'America/Goose_Bay',
    'America/Blanc-Sablon',
    'America/Toronto',
    'America/Nipigon',
    'America/Thunder_Bay',
    'America/Iqaluit',
    'America/Pangnirtung',
    'America/Atikokan',
    'America/Winnipeg',
    'America/Rainy_River',
    'America/Resolute',
    'America/Rankin_Inlet',
    'America/Regina',
    'America/Swift_Current',
    'America/Edmonton',
    'America/Cambridge_Bay',
    'America/Yellowknife',
    'America/Inuvik',
    'America/Creston',
    'America/Dawson_Creek',
    'America/Fort_Nelson',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Dawson',
    'Indian/Cocos',
    'Europe/Zurich',
    'Africa/Abidjan',
    'Pacific/Rarotonga',
    'America/Santiago',
    'America/Punta_Arenas',
    'Pacific/Easter',
    'Asia/Shanghai',
    'Asia/Urumqi',
    'America/Bogota',
    'America/Costa_Rica',
    'America/Havana',
    'Atlantic/Cape_Verde',
    'America/Curacao',
    'Indian/Christmas',
    'Asia/Nicosia',
    'Asia/Famagusta',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'America/Santo_Domingo',
    'Africa/Algiers',
    'America/Guayaquil',
    'Pacific/Galapagos',
    'Europe/Tallinn',
    'Africa/Cairo',
    'Africa/El_Aaiun',
    'Europe/Madrid',
    'Africa/Ceuta',
    'Atlantic/Canary',
    'Europe/Helsinki',
    'Pacific/Fiji',
    'Atlantic/Stanley',
    'Pacific/Chuuk',
    'Pacific/Pohnpei',
    'Pacific/Kosrae',
    'Atlantic/Faroe',
    'Europe/Paris',
    'Europe/London',
    'Asia/Tbilisi',
    'America/Cayenne',
    'Africa/Accra',
    'Europe/Gibraltar',
    'America/Godthab',
    'America/Danmarkshavn',
    'America/Scoresbysund',
    'America/Thule',
    'Europe/Athens',
    'Atlantic/South_Georgia',
    'America/Guatemala',
    'Pacific/Guam',
    'Africa/Bissau',
    'America/Guyana',
    'Asia/Hong_Kong',
    'America/Tegucigalpa',
    'America/Port-au-Prince',
    'Europe/Budapest',
    'Asia/Jakarta',
    'Asia/Pontianak',
    'Asia/Makassar',
    'Asia/Jayapura',
    'Europe/Dublin',
    'Asia/Jerusalem',
    'Asia/Kolkata',
    'Indian/Chagos',
    'Asia/Baghdad',
    'Asia/Tehran',
    'Atlantic/Reykjavik',
    'Europe/Rome',
    'America/Jamaica',
    'Asia/Amman',
    'Asia/Tokyo',
    'Africa/Nairobi',
    'Asia/Bishkek',
    'Pacific/Tarawa',
    'Pacific/Enderbury',
    'Pacific/Kiritimati',
    'Asia/Pyongyang',
    'Asia/Seoul',
    'Asia/Almaty',
    'Asia/Qyzylorda',
    'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Asia/Aqtobe',
    'Asia/Aqtau',
    'Asia/Atyrau',
    'Asia/Oral',
    'Asia/Beirut',
    'Asia/Colombo',
    'Africa/Monrovia',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Riga',
    'Africa/Tripoli',
    'Africa/Casablanca',
    'Europe/Monaco',
    'Europe/Chisinau',
    'Pacific/Majuro',
    'Pacific/Kwajalein',
    'Asia/Yangon',
    'Asia/Ulaanbaatar',
    'Asia/Hovd',
    'Asia/Choibalsan',
    'Asia/Macau',
    'America/Martinique',
    'Europe/Malta',
    'Indian/Mauritius',
    'Indian/Maldives',
    'America/Mexico_City',
    'America/Cancun',
    'America/Merida',
    'America/Monterrey',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Chihuahua',
    'America/Ojinaga',
    'America/Hermosillo',
    'America/Tijuana',
    'America/Bahia_Banderas',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Africa/Maputo',
    'Africa/Windhoek',
    'Pacific/Noumea',
    'Pacific/Norfolk',
    'Africa/Lagos',
    'America/Managua',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Asia/Kathmandu',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'America/Panama',
    'America/Lima',
    'Pacific/Tahiti',
    'Pacific/Marquesas',
    'Pacific/Gambier',
    'Pacific/Port_Moresby',
    'Pacific/Bougainville',
    'Asia/Manila',
    'Asia/Karachi',
    'Europe/Warsaw',
    'America/Miquelon',
    'Pacific/Pitcairn',
    'America/Puerto_Rico',
    'Asia/Gaza',
    'Asia/Hebron',
    'Europe/Lisbon',
    'Atlantic/Madeira',
    'Atlantic/Azores',
    'Pacific/Palau',
    'America/Asuncion',
    'Asia/Qatar',
    'Indian/Reunion',
    'Europe/Bucharest',
    'Europe/Belgrade',
    'Europe/Kaliningrad',
    'Europe/Moscow',
    'Europe/Simferopol',
    'Europe/Kirov',
    'Europe/Astrakhan',
    'Europe/Volgograd',
    'Europe/Saratov',
    'Europe/Ulyanovsk',
    'Europe/Samara',
    'Asia/Yekaterinburg',
    'Asia/Omsk',
    'Asia/Novosibirsk',
    'Asia/Barnaul',
    'Asia/Tomsk',
    'Asia/Novokuznetsk',
    'Asia/Krasnoyarsk',
    'Asia/Irkutsk',
    'Asia/Chita',
    'Asia/Yakutsk',
    'Asia/Khandyga',
    'Asia/Vladivostok',
    'Asia/Ust-Nera',
    'Asia/Magadan',
    'Asia/Sakhalin',
    'Asia/Srednekolymsk',
    'Asia/Kamchatka',
    'Asia/Anadyr',
    'Asia/Riyadh',
    'Pacific/Guadalcanal',
    'Indian/Mahe',
    'Africa/Khartoum',
    'Europe/Stockholm',
    'Asia/Singapore',
    'America/Paramaribo',
    'Africa/Juba',
    'Africa/Sao_Tome',
    'America/El_Salvador',
    'Asia/Damascus',
    'America/Grand_Turk',
    'Africa/Ndjamena',
    'Indian/Kerguelen',
    'Asia/Bangkok',
    'Asia/Dushanbe',
    'Pacific/Fakaofo',
    'Asia/Dili',
    'Asia/Ashgabat',
    'Africa/Tunis',
    'Pacific/Tongatapu',
    'Europe/Istanbul',
    'America/Port_of_Spain',
    'Pacific/Funafuti',
    'Asia/Taipei',
    'Europe/Kiev',
    'Europe/Uzhgorod',
    'Europe/Zaporozhye',
    'Pacific/Wake',
    'America/New_York',
    'America/Detroit',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Indiana/Indianapolis',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Vevay',
    'America/Chicago',
    'America/Indiana/Tell_City',
    'America/Indiana/Knox',
    'America/Menominee',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/North_Dakota/Beulah',
    'America/Denver',
    'America/Boise',
    'America/Phoenix',
    'America/Los_Angeles',
    'America/Anchorage',
    'America/Juneau',
    'America/Sitka',
    'America/Metlakatla',
    'America/Yakutat',
    'America/Nome',
    'America/Adak',
    'Pacific/Honolulu',
    'America/Montevideo',
    'Asia/Samarkand',
    'Asia/Tashkent',
    'America/Caracas',
    'Asia/Ho_Chi_Minh',
    'Pacific/Efate',
    'Pacific/Wallis',
    'Pacific/Apia',
    'Africa/Johannesburg'
  ]);
  const handleTimeZoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeZone(event.target.value);
  };

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onUpdateDeal = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!deal) {
      setError('Deal information not found!');
      toast.error(error)
      console.log(error)
      return;
    }
    if (!name || !round || !tokenprice || !fdv || !mc || !vesttge || !vestcliff || !vestgap || !fundrasing || !fee || !investmin || !investmax || !test || !weburl || !xurl || !discordurl || !teleurl || !livedate || !timezone) {
      setError('Please fill out all fields and select an image.');
      toast.error(error)
      console.log(error)
      return;
    }

    setUploading(true);
    setError(null);

    let uploadedLogo = deal.logo;
    let uploadedBanner = deal.banner;

    if (logo) {
      const formData = new FormData();
      formData.append('image', logo);
      const res = await axios.post(`${getBackend()}/api/deals/upload`, formData);
      uploadedLogo = res.data.path; // or URL
    }

    if (banner) {
      const formData = new FormData();
      formData.append('image', banner);
      const res = await axios.post(`${getBackend()}/api/deals/upload`, formData);
      uploadedBanner = res.data.path;
    }
    
    axios.put(`${getBackend()}/api/deals/update/${deal._id}`, {
      name, round, tokenprice, fdv, mc, vesttge, vestcliff, vestgap, fundrasing, fee, investmin, investmax, test, weburl, xurl, discordurl, teleurl, livedate, timezone,
      logo: uploadedLogo,
      banner: uploadedBanner
    })
      .then(res => {
        toast.success("Deal successfully updated! 🎉");
        router.push('/alldeals')
        setUploading(false);
      })
      .catch((error) => {
        const msg = error.response ? error.response.data : error.message;
        toast.error(msg);
        setError(msg);
      });
  }

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1320px]">
        <h1 className="page-title">
          Edit deal
        </h1>
        <div className="flex flex-col gap-12">
          <div className="space-y-6">

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
                    className="input-text"
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
                    setImage={setLogo}
                    initURL={"http://localhost:5000" + deal?.logo.substring(1)} />
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
                    setImage={setBanner}
                    initURL={"http://localhost:5000" + deal?.banner.substring(1)} />
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
                    className="input-text"
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
                  Token Price ($)
                </label>
                <div className="input-input">
                  <input
                    id="tokenprice"
                    name="tokenprice"
                    type="text"
                    autoComplete="tokenprice"
                    className="input-text"
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
                  Fully Diluted Valuation ($)
                </label>
                <div className="input-input">
                  <input
                    id="fdv"
                    name="fdv"
                    type="text"
                    autoComplete="fdv"
                    className="input-text"
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
                  Initial Market Cap ($)
                </label>
                <div className="input-input">
                  <input
                    id="mc"
                    name="mc"
                    type="text"
                    autoComplete="mc"
                    className="input-text"
                    value={mc}
                    onChange={(e) => {
                      setMC(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Vesting Summary */}
            <div className="flex flex-col gap-y-2 mx-5 md:grid md:grid-cols-11">
              <label
                className="block h-full text-base text-left align-middle font-medium leading-6 text-white md:col-span-2"
              >
                Vesting Summary
              </label>
              <div className="md:col-start-3 md:col-span-9">
                <div className=" flex flex-col gap-y-4 sm:grid sm:grid-cols-3 sm:gap-x-12">
                  <div className='flex justify-between gap-x-2 h-full items-center'>
                    <input
                      id="vesttge"
                      name="vesttge"
                      type="text"
                      autoComplete="vesttge"
                      className="input-text"
                      value={vesttge}
                      onChange={(e) => {
                        setVestTGE(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="vesttge"
                      className="input-label whitespace-nowrap"
                    >
                      % TGE
                    </label>
                  </div>
                  <div className='flex justify-between gap-x-2 h-full items-center'>
                    <input
                      id="vestcliff"
                      name="vestcliff"
                      type="text"
                      autoComplete="vestcliff"
                      className="input-text"
                      value={vestcliff}
                      onChange={(e) => {
                        setVestCliff(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="vestcliff"
                      className="input-label whitespace-nowrap"
                    >
                      M Cliff
                    </label>
                  </div>
                  <div className='flex justify-between gap-x-2 h-full items-center'>
                    <input
                      id="vestgap"
                      name="vestgap"
                      type="text"
                      autoComplete="vestgap"
                      className="input-text"
                      value={vestgap}
                      onChange={(e) => {
                        setVestGap(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="vestgap"
                      className="input-label whitespace-nowrap"
                    >
                      M vesting
                    </label>
                  </div>
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
                  Fundraising Target ($)
                </label>
                <div className="input-input">
                  <input
                    id="fundrasing"
                    name="fundrasing"
                    type="text"
                    autoComplete="fundrasing"
                    className="input-text"
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
                  Fees (%)
                </label>
                <div className="input-input">
                  <input
                    id="fee"
                    name="fee"
                    type="text"
                    autoComplete="fee"
                    className="input-text"
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
                  Min Invest Limit ($)
                </label>
                <div className="input-input">
                  <input
                    id="investmin"
                    name="investmin"
                    type="text"
                    autoComplete="investmin"
                    className="input-text"
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
                  Max Invest Limit ($)
                </label>
                <div className="input-input">
                  <input
                    id="investmax"
                    name="investmax"
                    type="text"
                    autoComplete="investmax"
                    className="input-text"
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
            <div className="flex flex-col mx-5">
              <label
                htmlFor="test"
                className="input-label"
              >
                Description
              </label>
              <div className="input-input">
                <textarea
                  id="test"
                  name="test"
                  autoComplete="test"
                  className="input-text h-[200px]"
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
                    className="input-text"
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
                    className="input-text"
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
                    className="input-text"
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
                    className="input-text"
                    value={teleurl}
                    onChange={(e) => {
                      setTeleURL(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* T & C */}
            <div className="subtitle">
              T & C
            </div>

            <div className="flex flex-col gap-y-4 mx-5">
              {/* Check All */}
              <div className="check-container">
                <input
                  id="checkall"
                  type="checkbox"
                  checked={tc_pulltrust && tc_pinmsg && tc_answer && tc_responsible && tc_acknowledge && tc_allocation && tc_never}
                  onChange={(e) => selectAll(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkall" className="block h-full text-base text-left align-middle font-black leading-6 text-white sm:col-span-2">
                  Check all Terms & Conditions
                </label>
              </div>

              {/* Pool Trust */}
              <div className="check-container">
                <input
                  id="tc_pulltrust"
                  type="checkbox"
                  checked={tc_pulltrust}
                  onChange={(e) => setPullTrust(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_pulltrust" className="input-label">
                  This Pool is based on Trust
                </label>
              </div>

              {/* Pinned Messgae */}
              <div className="check-container">
                <input
                  id="tc_pinmsg"
                  type="checkbox"
                  checked={tc_pinmsg}
                  onChange={(e) => setPinMsg(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_pinmsg" className="input-label">
                  You agree to regularly and carefully read the announcement channel and pinned messgae, and reread it again every tme the pinned message is updated. I agree to respect and follow all the rules.
                </label>
              </div>

              {/* Answer */}
              <div className="check-container">
                <input
                  id="tc_answer"
                  type="checkbox"
                  checked={tc_answer}
                  onChange={(e) => setAnswer(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_answer" className="input-label">
                  {"I confirm I have answered all the questions and that I've answered them truthfully."}
                </label>
              </div>

              {/* Responsible */}
              <div className="check-container">
                <input
                  id="tc_responsible"
                  type="checkbox"
                  checked={tc_responsible}
                  onChange={(e) => setResponsible(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_responsible" className="input-label">
                  You agree to the Fact that we will not in any way, legally or Otherwise, Be held responsible for your investment. You have done your own research.
                </label>
              </div>

              {/* Acknowledge */}
              <div className="check-container">
                <input
                  id="tc_acknowledge"
                  type="checkbox"
                  checked={tc_acknowledge}
                  onChange={(e) => setAcknowledge(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_acknowledge" className="input-label">
                  You acknowledge and agree that this is not an investment service, legal service, or a finanial service of an kind.
                </label>
              </div>

              {/* Allocation */}
              <div className="check-container">
                <input
                  id="tc_allocation"
                  type="checkbox"
                  checked={tc_allocation}
                  onChange={(e) => setAllocation(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_allocation" className="input-label">
                  All allocation will be deducted a 9% Fee which constitutes Govt taxes, Operational costs and Gas fees.
                </label>
              </div>

              {/* Never */}
              <div className="check-container">
                <input
                  id="tc_never"
                  type="checkbox"
                  checked={tc_never}
                  onChange={(e) => setNever(e.target.checked)}
                  className="font-semibold w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="tc_never" className="input-label">
                  {"You agree to NEVER mention or leak any details (even partial details) of our private deals with anyone outside our group. You understand we have a zero-tolerance policy and ANY hint of leakage results in permanent ban and blacklisting in not just our group but all our partnering groups. Telegram community and may also result in refunding contributions for pools you contributed in. The leaker's contribution may also be withheld to cover damages he might have caused."}
                </label>
              </div>
            </div>

            {/* Time Schedule */}
            <div className="subtitle">
              Time Schedule
            </div>

            <div className="input-part">

              {/* Date & time* */}
              <div className="input-container">
                <label
                  htmlFor="datetime"
                  className="input-label"
                >
                  Date & time*
                </label>
                <div className="input-input">
                  <input
                    id="datetime"
                    name="datetime"
                    type="datetime-local"
                    autoComplete="datetime"
                    className="input-text"
                    value={livedate}
                    onChange={(e) => {
                      setLiveDate(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* TimeZone */}
              <div className="input-container">
                <label
                  htmlFor="timezone"
                  className="input-label"
                >
                  TimeZone
                </label>
                <div className="input-input">
                  <select
                    id="timezone"
                    name="timezone"
                    value={timezone}
                    className="input-text"
                    onChange={handleTimeZoneChange}
                  >
                    <option value="">Select a timezone</option>
                    {timezone_list.map((timezone) => (
                      <option key={timezone} value={timezone}>
                        {timezone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center">
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                onClick={(e) => onUpdateDeal(e)}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDealPage;