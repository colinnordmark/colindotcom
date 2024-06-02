import { auth } from "@clerk/nextjs/server"
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
 
const f = createUploadthing();
  
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB"} })
    .middleware(async ({ req }) => {
      const user = auth();
 
      if (!user) throw new UploadThingError("Unauthorized");
 
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);      
      
      if (!metadata.userId) {
        throw new Error('User ID is required');
      }

      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;