import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My blog",
  description: "---",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
