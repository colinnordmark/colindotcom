"use client";

import { SignedOut, SignedIn, SignOutButton, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "~/app/_components/Simple-upload-button";

export const SideNav = () => {

  return (
    <nav className="flex min-h-screen min-w-52 bg-slate-900 justify-between border-b p-4">
      <div className="flex flex-col gap-6">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SignOutButton>
          <button className=" text-left">
            Sign out
          </button>
          </SignOutButton>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};