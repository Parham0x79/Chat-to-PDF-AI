"use client";

import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isFocused } =
    useDropzone({
      onDrop,
    });

  return (
    <div
      {...getRootProps()}
      className={`p-10 border-2 m-10 w-11/12 xl:w-1/2 border-dashed
        border-white rounded-md mx-auto min-h-120 max-lg:min-h-100 flex justify-center
        items-center text-center ${
          isFocused || (isDragAccept && "border-4 bg-white/20")
        }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="flex flex-col items-center gap-20">
          <RocketIcon className="w-10 h-10 lg:h-20 lg:w-20 animate-ping" />
          <p className="upload-text">Drop the files here</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10 lg:gap-15">
          <CircleArrowDown
            className="w-10 h-10 lg:w-20 lg:h-20 
            text-gray-600 animate-bounce"
          />
          <p className="upload-text">
            Drag 'n' drop files here, or click to select files
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
