import { desc } from "drizzle-orm";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";
import { get } from "http";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <article key={image.id}>
            <img src={image.url} />
            <p>{image.name}</p>
          </article>
        ))}
      </div>
  )
}
export default async function HomePage() {
  return (
    <main className="">
      <h1 className=" text-white">
        HELLO
      </h1>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
