import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Providers from "@/components/themecomp";
import { ClerkProvider } from "@clerk/nextjs";




export const metadata: Metadata = {
  title: "DbmClone",
  description: "Greatest Movie Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
        <Header />
        {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
