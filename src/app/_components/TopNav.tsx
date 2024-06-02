import { SignedOut, SignedIn, SignOutButton, SignInButton } from "@clerk/nextjs";

export const TopNav = () => {
  return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </nav>
  );
};