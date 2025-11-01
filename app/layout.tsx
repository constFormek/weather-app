import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '500', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-dmsans'
})

export const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
    variable: '--font-bricolage'
})

export const metadata: Metadata = {
  title: "Weather App",
  description: "Challenge from FrontendMentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}