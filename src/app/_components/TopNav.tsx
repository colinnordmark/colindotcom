"use client";

import { SignedOut, SignedIn, SignOutButton, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "~/app/_components/Simple-upload-button";

export const TopNav = () => {

  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="flex flex-row items-center gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SignOutButton />
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};