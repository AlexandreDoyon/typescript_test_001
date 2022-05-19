import type { AppProps } from "next/app";
import Template from "../components/layout/Template";
import { AppWrapper } from "context/AppContext";
import "/sass/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Template>
        <Component {...pageProps} />
      </Template>
    </AppWrapper>
  );
}

export default MyApp;
