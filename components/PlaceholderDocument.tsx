"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PlaceholderDocument = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/upload");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-70 h-80
        bg-gray-200 drop-shadow-md text-gray-600"
      variant={"ghost"}
    >
      <PlusCircleIcon />
      <p>Add a Document</p>
    </Button>
  );
};

export default PlaceholderDocument;
