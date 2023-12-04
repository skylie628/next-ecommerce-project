import "./globals.css";
import { NextAuthProvider } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <NextAuthProvider> {children}</NextAuthProvider>
      </body>
    </html>
  );
}
