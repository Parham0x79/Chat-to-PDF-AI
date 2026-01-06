import { createUploadthing, type FileRouter } from "uploadthing/next";

const storage = createUploadthing();

export const ourFileRouter = {
  // Define a route called "pdfUploader"
  pdfUploader: storage({ pdf: { maxFileSize: "1GB", maxFileCount: 1 } })
    // Middleware runs BEFORE upload.
    .middleware(async ({ req }) => {
      // In the future, verify user is logged in here.
      // For now, we return an empty object to say "allow everyone"
      return { userId: "guest" };
    })
    // onUploadComplete runs AFTER upload is done.
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);

      // *** IMPORTANT FOR YOUR APP ***
      // This is where you will eventually trigger your AI to parse the PDF
      // For now, just know the file is safe in the cloud.
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
