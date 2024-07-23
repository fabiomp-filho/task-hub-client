import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NotificationProvider} from "@/components/contexts/NotificationProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
  );
}
