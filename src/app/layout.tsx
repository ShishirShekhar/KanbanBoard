import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban Board",
  description:
    "A simple Kanban Board application built with Next.js, React, TypeScript, Ant Design, and Firebase.",
  applicationName: "Kanban Board",
  authors: [
    {
      name: "Shishir Shekhar",
      url: "https://www.linkedin.com/in/shishir-shekhar/",
    },
  ],
  generator: "Next.js",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Ant Design",
    "Firebase",
    "Kanban Board",
  ],
  icons: "./favicon.ico",
  manifest: "./manifest.json",
  openGraph: {
    type: "website",
    url: "https://shishir-kanban.vercel.app/",
    title: "Kanban Board",
    description:
      "A simple Kanban Board application built with Next.js, React, TypeScript, Ant Design, and Firebase.",
    siteName: "Kanban Board",
    images: [{ url: "./favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSans.className} antialiased`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
