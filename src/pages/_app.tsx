import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "reactflow/dist/style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
