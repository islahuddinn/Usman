import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import DirectionProvider from "@/components/DirectionProvider";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "محمد عثمان حداد و المنيوم - Aluminum & Iron Works",
  description: "Professional iron and aluminum works in Riyadh, Saudi Arabia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-br from-amber-50 to-orange-50">
        <LanguageProvider>
          <DirectionProvider>
            <Navigation />
            <main className="flex-1 pt-20">{children}</main>
            <WhatsAppButton />
          </DirectionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
