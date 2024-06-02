import { desc } from "drizzle-orm";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockUrls = [
  "https://utfs.io/f/d9ded5b0-a5c1-47cd-b0d7-36372f53b1d3-j2rogc.jpeg",
  "https://utfs.io/f/45bad673-70e1-4b55-ab05-891353f32908-m3fyio.jpeg",
  "https://utfs.io/f/636f08a6-e9fe-4da7-b202-60f160e75859-f1v4e8.jpeg",
  "https://utfs.io/f/c698a2de-b88d-4573-a76d-883923760ca2-sefrqe.jpeg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

async function Images() {
  const images = await db.query.images.findMany({
    orderBy:(model, { desc }) => desc(model.id), 
  });

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
