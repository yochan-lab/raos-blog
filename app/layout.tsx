import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import Script from "next/script";
import "./globals.css";

const serif = Crimson_Pro({
  variable: "--font-serif",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rao's Sunday Harangues",
  description: "A collection of sunday harangues by Rao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N3RDFGS9');`}
      </Script>
      <body
        className={`${serif.variable} ${sans.variable} antialiased bg-[var(--background)] text-[var(--foreground)] font-sans min-h-screen flex flex-col items-center`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3RDFGS9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <main className="w-full max-w-[720px] px-6 py-12 md:py-20">
            <Header />
            {children}
        </main>
      </body>
    </html>
  );
}
