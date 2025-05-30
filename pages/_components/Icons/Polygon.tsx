import React from "react";

export default function PolygonIcon(props: any) {
  return (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_bi_1541_1594)">
        <path
          d="M23 1.73205C24.8564 0.660254 27.1436 0.660254 29 1.73205L48.9808 13.2679C50.8372 14.3397 51.9808 16.3205 51.9808 18.4641V41.5359C51.9808 43.6795 50.8372 45.6603 48.9808 46.7321L29 58.2679C27.1436 59.3397 24.8564 59.3397 23 58.2679L3.01924 46.7321C1.16283 45.6603 0.0192375 43.6795 0.0192375 41.5359V18.4641C0.0192375 16.3205 1.16283 14.3397 3.01924 13.2679L23 1.73205Z"
          fill="url(#paint0_linear_1541_1594)"
          fill-opacity="0.5"
        />
        <path
          d="M23.25 2.16506C24.9517 1.18258 27.0483 1.18258 28.75 2.16506L48.7308 13.701C50.4325 14.6834 51.4808 16.4991 51.4808 18.4641V41.5359C51.4808 43.5009 50.4325 45.3166 48.7308 46.299L28.75 57.8349C27.0483 58.8174 24.9517 58.8174 23.25 57.8349L3.26924 46.299C1.56753 45.3166 0.519238 43.5009 0.519238 41.5359V18.4641C0.519238 16.4991 1.56753 14.6834 3.26924 13.701L23.25 2.16506Z"
          stroke="white"
          stroke-opacity="0.12"
        />
      </g>
      <defs>
        <filter
          id="filter0_bi_1541_1594"
          x="-6.68096"
          y="-5.77178"
          width="65.3619"
          height="71.5436"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.35" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1541_1594"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1541_1594"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.666667" />
          <feGaussianBlur stdDeviation="0.333333" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1541_1594"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1541_1594"
          x1="26"
          y1="0"
          x2="26"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A2228" />
          <stop offset="1" stop-color="#2D3E4E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
