import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Janatha English Medium School (JEMS) | Admissions Open 2026-27 | Venkannapalem, Kota",
  description:
    "Janatha English Medium School (JEMS) offers quality education from Play Class to Grade 7. AC classrooms, digital learning, transport facility. Admissions open for 2026-27. Located at Venkannapalem, Kota Mandal.",
  keywords: [
    "Janatha English Medium School",
    "JEMS",
    "school admissions",
    "Venkannapalem",
    "Kota Mandal",
    "English medium school",
    "Play Class",
    "Nursery",
    "LKG",
    "UKG",
    "Grade 7",
    "AC classrooms",
    "digital learning",
  ],
  openGraph: {
    title: "Janatha English Medium School (JEMS) | Admissions Open 2026-27",
    description:
      "Quality education from Play Class to Grade 7 with AC classrooms, digital learning, and experienced teachers.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${outfit.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
