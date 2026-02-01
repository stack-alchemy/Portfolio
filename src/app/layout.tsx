import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import Logo from "@/assets/logo.svg";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased bg-[url('../assets/bg.png')] bg-cover bg-fixed`}
      >
        <main className="">{children}</main>
        <footer className="w-full">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-3 justify-center ">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex gap-2 items-center">
                <Image src={Logo} alt="logo" width={20} />
                <p className="text-sm">
                  © {new Date().getFullYear()} {aboutMe.name}.
                </p>
              </div>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
