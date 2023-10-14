import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["100", "200", "400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
