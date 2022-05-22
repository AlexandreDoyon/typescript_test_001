import type { AppProps } from "next/app";
import Template from "../components/layout/Template";
import { ScrollYContextProvider } from "context/ScrollYContext";
import { ThemeContextProvider } from "context/ThemeContext";
import "/sass/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ScrollYContextProvider>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ScrollYContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
