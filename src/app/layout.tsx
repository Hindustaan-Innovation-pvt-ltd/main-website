import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Hindustaan Innovations Private Limited",
  legalName: "Hindustaan Innovations Private Limited",
  alternateName: [
    "Hindustaan Innovations",
    "Hindustan Innovations",
    "Hindustaan Innovation",
    "Hindustan Innovation Private Limited",
  ],
  url: "https://hindustaan.in",
  logo: "https://hindustaan.in/logo.png",
  description:
    "AI Automation, Custom Software Development, and Next-Generation Digital Products.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8803555558",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

export const metadata: Metadata = {
  title: {
    default: "Hindustaan Innovations Private Limited",
    template: "%s | Hindustaan Innovations Private Limited",
  },
  description:
    "Hindustaan Innovations Private Limited provides cutting-edge AI automation, custom software, web & mobile app development, and digital transformation.",
  applicationName: "Hindustaan Innovations Private Limited",
  metadataBase: new URL("https://hindustaan.in"),
  openGraph: {
    title: "Hindustaan Innovations Private Limited",
    description:
      "AI Automation, Custom Software & Digital Engineering Solutions for Modern Businesses.",
    url: "https://hindustaan.in",
    siteName: "Hindustaan Innovations Private Limited",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindustaan Innovations Private Limited",
    description:
      "AI Automation, Custom Software & Digital Engineering Solutions for Modern Businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, playfair.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f5f5f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
