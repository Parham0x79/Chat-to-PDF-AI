"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUploadThing } from "@/lib/uploadthing";

export enum StatusText {
  UPLOADING = "Uploading file...",
  UPLOADED = "File uploaded successfully!",
  SAVING = "Saving file to database...",
  GENERATING = "Generating AI Embeddings, This will only take few seconds...",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [fileID, setFileID] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const { user } = useUser();
  const router = useRouter();

  // 2. Initialize UploadThing
  const { startUpload } = useUploadThing("pdfUploader", {
    onUploadProgress: (p) => {
      setProgress(p);
    },
    onClientUploadComplete: async (res) => {
      // This runs when the file is safely in the cloud
      setStatus(StatusText.UPLOADED);

      // The response 'res' contains the file URL and key
      const fileUrl = res[0].ufsUrl;
      const fileKey = res[0].key;

      console.log("File URL:", fileUrl); // For debugging

      // 4. Trigger the next steps (DB + AI)
      // We will handle this logic in the function below
      await handleDatabaseAndAI(fileUrl, fileKey);
    },
    onUploadError: (error) => {
      console.error("Upload Error:", error);
      setStatus(null); // Reset or show error state
      alert("Error uploading file");
    },
  });

  const handleUpload = async (file: File) => {
    if (!file || !user) return;

    // TODO: Add Free plan limitations check here later

    setFileID(uuidv4()); // Optional: If you still need a local ID for UI
    setStatus(StatusText.UPLOADING);

    // 3. Start the upload (UploadThing expects an array)
    await startUpload([file]);
  };

  // 5. This is where the magic happens AFTER the file is in the cloud
  const handleDatabaseAndAI = async (fileUrl: string, fileKey: string) => {
    setStatus(StatusText.SAVING);

    try {
      // TODO: Call your Server Action or API here to save to DB
      // await saveFileToDatabase({ url: fileUrl, key: fileKey, userId: user.id });

      setStatus(StatusText.GENERATING);

      // TODO: Call your AI generation endpoint
      // await generateEmbeddings(fileKey);

      setStatus(StatusText.UPLOADED); // Or "COMPLETED"

      // Redirect to the chat page
      router.push(`/dashboard/files/${fileID}`);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return { progress, status, fileID, handleUpload };
}

export default useUpload;
