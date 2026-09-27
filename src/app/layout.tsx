import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import SkipToContent from "@/components/SkipToContent";
import PrototypeBanner from "@/components/PrototypeBanner";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FontSizeProvider from "@/components/FontSizeProvider";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: {
    default: "โรงพยาบาลซำสูง | Samsoong Hospital",
    template: "%s | โรงพยาบาลซำสูง",
  },
  description:
    "โรงพยาบาลซำสูง โรงพยาบาลชุมชนขนาด 30 เตียง สังกัดกระทรวงสาธารณสุข อำเภอซำสูง จังหวัดขอนแก่น โทร 043-219192",
  keywords: [
    "โรงพยาบาลซำสูง",
    "Samsoong Hospital",
    "อำเภอซำสูง",
    "ขอนแก่น",
    "โรงพยาบาลชุมชน",
  ],
  openGraph: {
    title: "โรงพยาบาลซำสูง | Samsoong Hospital",
    description:
      "โรงพยาบาลชุมชนขนาด 30 เตียง สังกัดกระทรวงสาธารณสุข อำเภอซำสูง จังหวัดขอนแก่น",
    type: "website",
    locale: "th_TH",
  },
};

const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "โรงพยาบาลซำสูง",
  alternateName: "Samsoong Hospital",
  address: {
    "@type": "PostalAddress",
    streetAddress: "231 หมู่ 3 ถนนกระนวน-เชียงยืน",
    addressLocality: "ตำบลกระนวน อำเภอซำสูง",
    addressRegion: "ขอนแก่น",
    postalCode: "40170",
    addressCountry: "TH",
  },
  telephone: "043-219192",
  medicalSpecialty: "Community Hospital",
  numberOfBeds: 30,
  sameAs: ["https://www.facebook.com/sumsunghospital"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} font-size-normal`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hospitalJsonLd),
          }}
        />
      </head>
      <body className={`${notoSansThai.className} antialiased`}>
        <FontSizeProvider>
          <SkipToContent />
          <PrototypeBanner />
          <UtilityBar />
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <MobileBottomBar />
        </FontSizeProvider>
      </body>
    </html>
  );
}
