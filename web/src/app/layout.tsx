import type { Metadata } from "next";
import { Amiri, Montserrat, Shanti } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Shanti({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const fontSerif = Amiri({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fontMono = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Where Are My Keys? | Official Movie Website",
    template: "%s | Where Are My Keys?",
  },

  description:
    "Discover Where Are My Keys? Explore the movie, meet the cast, go behind the scenes, and uncover the story.",

  verification: {
    google: "dLNeTPtdHtonsLWVmHIMMj8JHUfrAywz73mu9c5vrQ0",
  },

  openGraph: {
    title: "Where Are My Keys? | Official Movie Website",
    description:
      "Explore the world of Where Are My Keys? Discover the story, cast, and behind-the-scenes moments.",
    siteName: "Where Are My Keys?",
    type: "website",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} h-full antialiased scroll-smooth`}
    >
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
