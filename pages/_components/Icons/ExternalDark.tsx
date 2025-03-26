import React from "react";

export default function ExternalDarkIcon(props: any) {
  return (
    <svg
      width="38"
      height="37"
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1541_2105)">
        <circle
          cx="19.1745"
          cy="18.4236"
          r="18.4236"
          fill="white"
          fill-opacity="0.06"
        />
        <circle
          cx="19.1745"
          cy="18.4236"
          r="17.8478"
          stroke="#EDEDED"
          stroke-opacity="0.12"
          stroke-width="1.15147"
        />
      </g>
      <path
        d="M25.2196 14.6807V24.4682H15.4321"
        stroke="white"
        stroke-opacity="0.78"
        stroke-width="1.72721"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.932 24.1808L13.1294 12.3782"
        stroke="white"
        stroke-opacity="0.78"
        stroke-width="1.72721"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_1541_2105"
          x="-4.31551"
          y="-5.06648"
          width="46.9801"
          height="46.9801"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.53324" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1541_2105"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1541_2105"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
