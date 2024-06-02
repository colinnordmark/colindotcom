import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "colinnordmark",
  description: "A personal website for Colin Nordmark",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const TopNav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about">Sign in</a>
        </li>
      </ul>
    </nav>
  );
}

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
