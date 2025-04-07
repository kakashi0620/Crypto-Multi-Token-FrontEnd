import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Header from "./_components/Layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./_components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { bsc } from "viem/chains";
import { createWeb3Modal } from "@web3modal/wagmi";
import { createConfig, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, walletConnect } from "wagmi/connectors";
import "../lib/i18n";
import Banner from "./_components/Layout/Banner";
import HamburgerMenu from "./_components/Layout/Hamburger";
import { UserProvider } from "../hooks/userContext";

const projectId = "12b8a841a230c15448f1dd353b5384ad";

export const wagmiConfig = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
  connectors: [injected(), walletConnect({ projectId })],
});

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  defaultChain: bsc,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading">
      <WagmiProvider config={wagmiConfig}>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <Banner />
            <Toaster position="top-right" reverseOrder={false} />
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
        </UserProvider>
      </WagmiProvider>
    </Suspense>
  );
}

export default MyApp;
