import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { TopNav } from "./_components/TopNav";

export const metadata = {
  title: "colinnordmark",
  description: "A personal website for Colin Nordmark",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable}`}>
          <TopNav/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
