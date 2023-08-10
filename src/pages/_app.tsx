import Navbar from "@/components/Navbar/Navbar";
import "reactflow/dist/style.css";
import type { AppProps } from "next/app";
import WagmiRainbowKitProvider from "@/components/WagmiRainbowKitProvider";
import ThemeGlobalStyleProvider from "@/styles/ThemeGlobalStyleProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiRainbowKitProvider>
      <ThemeGlobalStyleProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeGlobalStyleProvider>
    </WagmiRainbowKitProvider>
  );
}
