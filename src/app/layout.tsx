import "antd/dist/reset.css";
import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "Wassla",
  description: "Halaili / Mokhfi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
