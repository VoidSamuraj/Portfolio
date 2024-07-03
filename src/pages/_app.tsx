import "@/styles/globals.css";
import "@/styles/hero.css";
import "@/styles/projects.css";
import "@/styles/courses.css";
import "@/styles/contact.css";
import "@/styles/footer.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
