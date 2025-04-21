import "../lib/i18n";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
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
import { bsc } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const projectId = "12b8a841a230c15448f1dd353b5384ad";

// 0. Setup queryClient
const queryClient = new QueryClient()

// 3. Set the networks
const networks = [bsc]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

export const web3Modal = createAppKit({
  adapters: [wagmiAdapter],
  allWallets: 'HIDE',
  enableWalletConnect: false,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"
  ],
  excludeWalletIds: [
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
