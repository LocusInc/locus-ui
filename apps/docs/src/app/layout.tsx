import type { ThemeColorConfig } from "@locus-ui/components";
import { Theme } from "@locus-ui/components";
import "@locus-ui/components/styles";
import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Locus UI",
  description: "An (optionally) unstyled React component library",
  icons: {
    icon: "/locus.svg",
  },
};

const colors: ThemeColorConfig = {
  light: {
    primary: "#fc7f0a",
    secondary: "#0b50e3",
    tertiary: "#d602ed",
    success: "#00c70d",
    danger: "#e80927",
    warning: "#e08e09",
    info: "#14adfa",
    text: "#000000",
    textDark: "#424242",
    background1: "#ffffff",
    background2: "#fefefe",
    background3: "#eeeeee",
    surface1: "#dadde3",
    surface2: "#e3dcd5",
    surface3: "#e3dcd5",
    border1: "#3a3f47",
  },
  dark: {
    text: "#ffffff",
    textDark: "#919191",
    background1: "#121212",
    background2: "#282828",
    background3: "#3f3f3f",
    surface1: "#2b2831",
    surface2: "#686059",
    surface3: "#5a575f",
    border1: "#423f47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
          appearance="dark"
          radius="md"
          roundness="3"
          spacing="md"
          colors={colors}
        >
          <div className="bg-[rgb(var(--bg-1))] min-h-screen">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
