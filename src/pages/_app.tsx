import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "react-tippy/dist/tippy.css";

import "../styles/globals.css";

declare module "next-themes" {
  interface ThemeProviderProps {
    children: React.ReactNode;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <NextNProgress
        color="#eb2754"
        startPosition={0.2}
        options={{ showSpinner: false }}
      />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
