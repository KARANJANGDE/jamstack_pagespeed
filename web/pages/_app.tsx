import { SharedPageProps } from "@/lib/sanity/types";
import "../styles/source/main.css";
import { AppProps } from "next/app";
import { lazy } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loader from "@/components/CommonLoader";
const PreviewProvider = lazy(() => import("@/components/PreviewProvider"));
import { DM_Sans,  Inter, Montserrat} from 'next/font/google'
import NextNProgress from 'nextjs-progressbar';
const dm = DM_Sans({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const inter = Inter({
  variable: '--font-inter-serif',
  subsets: ['latin'],
  weight: ['100', '300', '400', '600'],
})

const mont = Montserrat({
  variable: '--font-mont-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '800', '900'],
})
function MyApp({ Component, pageProps }: AppProps<SharedPageProps>) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-dm-serif: ${dm.style.fontFamily};
            --font-inter-serif: ${inter.style.fontFamily};
            --font-mont-serif: ${mont.style.fontFamily};
          }
        `}
      </style>
      <style jsx global>{`
        html {
          font-family: ${dm.style.fontFamily};
        }
      `}</style>
      <NextNProgress />
      {pageProps.draftMode ? (
        <PreviewProvider token={pageProps.token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      <SpeedInsights />
    </>
  );
}
export default MyApp;
