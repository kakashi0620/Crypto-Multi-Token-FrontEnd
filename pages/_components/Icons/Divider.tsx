import React from "react";

export default function Divider(props: any) {
  return (
    <svg
      width="100%"
      height="3"
      viewBox="0 0 1270 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        y1="1.97125"
        x2="1270"
        y2="1.97125"
        stroke="url(#paint0_linear_1541_128)"
        stroke-opacity="0.24"
        stroke-width="2.05751"
      />
      <line
        x1="131.233"
        y1="1.97125"
        x2="512.233"
        y2="1.97125"
        stroke="url(#paint1_linear_1541_128)"
        stroke-opacity="0.68"
        stroke-width="2.05751"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1541_128"
          x1="0"
          y1="3.5"
          x2="1270"
          y2="3.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F9FF38" stop-opacity="0" />
          <stop offset="0.178272" stop-color="#F9FF38" />
          <stop offset="1" stop-color="#F9FF38" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1541_128"
          x1="131.233"
          y1="3.5"
          x2="512.233"
          y2="3.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F9FF38" stop-opacity="0" />
          <stop offset="0.178272" stop-color="#F9FF38" />
          <stop offset="1" stop-color="#F9FF38" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
