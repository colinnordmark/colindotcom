import { SignedIn } from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <article key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={480}
            height={480}
            alt={image.name}
          />
          <p>{image.name}</p>
        </article>
      ))}
    </div>
  );
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
