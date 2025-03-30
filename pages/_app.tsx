import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Header from "./_components/Layout/Header";
import Head from "next/head";
import Footer from "./_components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import BackToTop from "./_components/Layout/BackToTop";
import { Suspense, useEffect, useState } from "react";
import { mainnet } from "viem/chains";
import { createWeb3Modal } from "@web3modal/wagmi";
import { createConfig, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, walletConnect } from "wagmi/connectors";
import "../lib/i18n";
import Banner from "./_components/Layout/Banner";
import HamburgerMenu from "./_components/Layout/Hamburger";

const projectId = "12b8a841a230c15448f1dd353b5384ad";

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [injected(), walletConnect({ projectId })],
});

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  defaultChain: mainnet,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading">
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Banner />
          <div className="flex">
            <Header />
            <HamburgerMenu />
          </div>

          <div className="relative z-30">
            <Component {...pageProps} />
          </div>

          <Footer />
          <ToastContainer />
        </QueryClientProvider>
      </WagmiProvider>
    </Suspense>
  );
}

export default MyApp;
