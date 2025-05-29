import "../lib/i18n";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "./_components/Layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./_components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Banner from "./_components/Layout/Banner";
import HamburgerMenu from "./_components/Layout/Hamburger";
import { UserProvider } from "../hooks/userContext";
import { DealProvider } from "../hooks/dealContext";
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { cookieStorage, createStorage, http } from '@wagmi/core'
import { bsc, bscTestnet } from '@reown/appkit/networks'

const projectId = "c9c77ce190473b75ce5fba7a5fe4f1bb";

// 0. Setup queryClient
const queryClient = new QueryClient()

// Set the networks
const networks = [bsc]

// Set up the Wagmi Adapter (Config)
const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const web3Modal = createAppKit({
  adapters: [wagmiAdapter],
  allWallets: 'HIDE',
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"
  ],
  excludeWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
  ],
  projectId,
  networks: [bsc],
  defaultNetwork: bsc,
  features: {
    email: false,
    socials: false,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading">
      <Head>
        <title>Wealthy Capital | Invest in Crypto Private Deal at VC Price</title>
      </Head>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <UserProvider>
          <DealProvider>
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
          </DealProvider>
        </UserProvider>
      </WagmiProvider>
    </Suspense>
  );
}

export default MyApp;
