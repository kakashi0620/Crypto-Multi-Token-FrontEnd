import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const PowerDetail = [
  {
    url: "/images/power/openai.png",
  },
  {
    url: "/images/power/google.png",
  },
  {
    url: "/images/power/github.png",
  },
  {
    url: "/images/power/adobe.png",
  },
  {
    url: "/images/power/bing.png",
  },
  {
    url: "/images/power/metamask.png",
  },
  {
    url: "/images/power/uniswap.png",
  },
  {
    url: "/images/power/ethereum.png",
  },
  {
    url: "/images/power/trust.png",
  },
];

export default function Silder() {
  const swiperRef = React.useRef(null);

  return (
    <div className="flex md:flex-row items-center justify-center gap-8 select-none max-w-[1000px] w-full">
      <Swiper
        ref={swiperRef}
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        loop
        className="flex justify-center items-center justify-items-center"
      >
        {PowerDetail.map((item, index) => (
          <SwiperSlide
            className="flex justify-center !w-40 h-40 p-4"
            key={index}
          >
            <img src={item.url} className="w-fit" alt="power" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
