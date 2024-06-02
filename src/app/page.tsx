import Link from "next/link";
import { db } from "~/server/db";

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

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className="">
      <h1 className=" text-white">
        HELLO
      </h1>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <article key={post.id}>
            <p>{post.name}</p>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
