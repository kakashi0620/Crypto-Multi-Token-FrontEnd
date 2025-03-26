import React from "react";

export default function ExternalLightIcon(props: any) {
  return (
    <svg
      width="38"
      height="37"
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1541_2072)">
        <circle
          cx="18.7771"
          cy="18.4236"
          r="18.4236"
          fill="white"
          fill-opacity="0.06"
        />
        <circle
          cx="18.7771"
          cy="18.4236"
          r="17.8478"
          stroke="currentColor"
          stroke-width="1.15147"
        />
      </g>
      <path
        d="M24.8222 14.6816V24.4692H15.0347"
        stroke="currentColor"
        stroke-width="1.72721"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.5345 24.1813L12.7319 12.3787"
        stroke="currentColor"
        stroke-width="1.72721"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_1541_2072"
          x="-4.71297"
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
            result="effect1_backgroundBlur_1541_2072"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1541_2072"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
