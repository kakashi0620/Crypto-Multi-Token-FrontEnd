import React from "react";

export default function VerticalDivider(props: any) {
  return (
    <svg
      width="2"
      height="28"
      viewBox="0 0 2 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.900391"
        y="0.533691"
        width="1.04853"
        height="27.2617"
        fill="url(#paint0_linear_1541_176)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1541_176"
          x1="1.42465"
          y1="0.533691"
          x2="1.42465"
          y2="27.7954"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="0.495" stop-color="#F9FF38" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
