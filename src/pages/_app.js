import "@/styles/globals.css";
import { LandingProvider } from "@/utils/landing-context";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <LandingProvider>
      <Component {...pageProps} />
    </LandingProvider>
  );
}

export default appWithTranslation(App);