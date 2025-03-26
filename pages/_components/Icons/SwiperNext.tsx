import React from "react";

function SwiperNextIcon(props: any) {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1541_2277)">
        <circle
          cx="40.5269"
          cy="40.5269"
          r="40.5269"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 57.3137)"
          fill="white"
          fill-opacity="0.06"
        />
        <circle
          cx="40.5269"
          cy="40.5269"
          r="39.2604"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 57.3137)"
          stroke="black"
          stroke-opacity="0.12"
          stroke-width="2.53293"
        />
      </g>
      <path
        d="M59.3009 64.0734L66.3816 56.9927L59.3009 49.912"
        stroke="black"
        stroke-opacity="0.78"
        stroke-width="1.76711"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M65.9651 56.9927H48.8882"
        stroke="black"
        stroke-opacity="0.78"
        stroke-width="1.76711"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_1541_2277"
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
            result="effect1_backgroundBlur_1541_2277"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1541_2277"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SwiperNextIcon;
