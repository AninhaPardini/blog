import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ana Pardini | Blog",
  description: "Um blog pessoal sobre tecnologia e desenvolvimento de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`flex flex-col justify-center items-center ${jakarta.className}`}>
          <div 
          className="container flex flex-col justify-center items-center"
          >
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
