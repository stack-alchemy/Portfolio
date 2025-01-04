import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="">
          {children}
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                {aboutMe.secretDescription}
              </p>
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Built with <a href="https://github.com/tovacinni/research-website-template" className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors">research-website-template</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
