import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "reactflow/dist/style.css";
import type { AppProps } from "next/app";
import WagmiRainbowKitProvider from "@/components/WagmiRainbowKitProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiRainbowKitProvider>
      <Navbar />
      <Component {...pageProps} />
    </WagmiRainbowKitProvider>
  );
}
