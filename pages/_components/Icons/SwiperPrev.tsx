import React from "react";

function SwiperPrevIcon(props: any) {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1541_2284)">
        <circle
          cx="57.3137"
          cy="57.3137"
          r="40.5269"
          transform="rotate(135 57.3137 57.3137)"
          fill="white"
          fill-opacity="0.06"
        />
        <circle
          cx="57.3137"
          cy="57.3137"
          r="39.2604"
          transform="rotate(135 57.3137 57.3137)"
          stroke="black"
          stroke-opacity="0.12"
          stroke-width="2.53293"
        />
      </g>
      <path
        d="M55.3265 64.0734L48.2458 56.9927L55.3265 49.912"
        stroke="black"
        stroke-opacity="0.78"
        stroke-width="1.76711"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.6623 56.9927H65.7393"
        stroke="black"
        stroke-opacity="0.78"
        stroke-width="1.76711"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_1541_2284"
          x="5.64172"
          y="5.64197"
          width="103.344"
          height="103.344"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.57245" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1541_2284"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1541_2284"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SwiperPrevIcon;
