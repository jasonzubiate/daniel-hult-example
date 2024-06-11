import type { Metadata } from "next";
import LenisContext from "@/contexts/lenis-context";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "SPINNIN | Design & Development",
  description: "Project template for reference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisContext>{children}</LenisContext>
      </body>
    </html>
  );
}
