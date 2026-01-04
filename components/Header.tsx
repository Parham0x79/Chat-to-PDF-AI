import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 lg:p-10 flex justify-between bg-white shadow-sm border-b">
      <Link href={"/dashboard"} className="text-2xl">
        Chat to <span className="text-red-500">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center lg:space-x-4 space-x-2">
          <Button
            asChild
            variant={"link"}
            className="hidden lg:flex text-lg font-sans text-gray-700"
          >
            <Link href={"/dashboard/upgrade"}>Pricing</Link>
          </Button>

          <Button asChild variant={"outline"}>
            <Link href={"/dashboard"}>My Documents</Link>
          </Button>

          <Button variant={"secondary"} className="lg:w-20 h-10">
            <Link href={"/dashboard/upload"}>
              <FilePlus2 className="text-red-500" />
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default Header;
