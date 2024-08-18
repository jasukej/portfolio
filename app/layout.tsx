import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter, Syne } from "next/font/google";
import { Outfit } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Kez's Portfolio",
  description: "My corner of the web 🦦",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-8 sm:pt-18`}
      >
        <div className="
        bg-[#fbe2b3] 
        opacity-50 
        -z-10 
        absolute 
        top-[-6rem] 
        right-[11rem] 
        h-[31.25rem] 
        w-[31.25rem] 
        rounded-full 
        blur-[10rem] 
        sm:w-[68.75rem]"></div>

        <div className="
          hidden
          lg:block
          bg-[#dbd7fb] 
          opacity-60 
          absolute 
          top-[-1rem]
          -z-10 
          left-[35rem] 
          h-[31.25rem] 
          w-[31.25rem] 
          rounded-full 
          blur-[10rem] 
          sm:w-[68.75rem] 
          md:left-[-33rem] 
          lg:left-[-28rem] 
          xl:left-[-15rem] 
          2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
