import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillAdda",
  description: "Local Tech & Skill Workshop Hub in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We moved the background and text colors right here! */}
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}