"use client";

import { SignedOut, SignedIn, SignOutButton, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
  const router = useRouter();

  return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex gap-4 text">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="flex flex-row gap-4">
                <SignOutButton />
                <UploadButton 
                  endpoint="imageUploader"
                  onClientUploadComplete={() => {
                    router.refresh();
                  }}/>
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </ul>
      </nav>
  );
};