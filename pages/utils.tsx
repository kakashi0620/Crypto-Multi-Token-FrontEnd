import { keyframes } from "@emotion/react";
import { formatUnits } from "viem";
import { PresaleConfig } from "../config/presaleConfig";

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export default function utils() {
  return;
}

export const calculateTokenPrice = (price: bigint) => {
  const tokenPerUsd = Number(formatUnits(price, PresaleConfig.tokenDecimal));
  return Number((1 / tokenPerUsd).toFixed(3));
};

export const formatLocalString = (
  amount: bigint | undefined,
  decimal: number = 18
) => {
  if (!amount) return 0;
  const format = formatUnits(amount, decimal);
  return Number(format).toLocaleString();
};

export const copyToClipboard = (text: string, cb: () => void) => {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(text).then(cb);
  } else if (document.queryCommandSupported("copy")) {
    const ele = document.createElement("textarea");
    ele.value = text;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand("copy");
    document.body.removeChild(ele);
    cb?.();
  }
};

export function shortenAddress(address: string | undefined) {
  if (!address || address.length < 10) return address;
  return `${address.substring(0, 8)}...${address.substring(
    address.length - 6,
    address.length
  )}`;
}
