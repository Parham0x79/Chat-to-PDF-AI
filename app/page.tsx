import { Button } from "@/components/ui/button";
import { features } from "@/lib/features";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="bg-linear-to-bl flex-1 from-white to-red-500
        p-3 sm:p-10"
    >
      <div
        className="bg-white xl:max-w-11/12 mx-auto p-6 md:p-24 xl:p-32
          rounded-md drop-shadow-xl"
      >
        <div
          className="flex flex-col justify-center items-center
            max-w-7xl mx-auto p-1 lg:p-12"
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-sm italic lg:text-lg font-mono text-center
                font-semibold my-5 lg:my-10"
            >
              Your Interactive Document companion
            </h2>
            <p
              className="text-2xl font-bold font-sans sm:text-4xl 
                xl:text-6xl tracking-tight text-center xl:leading-16"
            >
              Transform Your PDFs into Interactive Conversations
            </p>

            <p
              className="text-sm lg:text-xl font-sans p-1 lg:py-10
                leading-8 my-10"
            >
              Introducing{" "}
              <span className="font-bold text-red-500">Chat with PDF</span>
              <br />
              Upload your Document and the AI will summarize the content and
              answer your questions. <br />
              Chat with your PDF to turn static documents into{" "}
              <span className="font-bold underline">
                Dynamic conversations
              </span>{" "}
              enhancing productivity effortlessly
            </p>
          </div>
          <Button
            variant={"outline"}
            className="lg:w-60 lg:h-16 h-12 w-35 bg-red-500 max-lg:text-white text-md font-semibold
             lg:bg-white xl:hover:bg-red-500 xl:text-xl font-mono"
          >
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <Image
              src={
                "https://magicul.io/blog/wp-content/uploads/2024/01/how-to-convert-pdf-to-adobe-illustrator-format.png"
              }
              alt="App screenShot"
              width={1520}
              height={920}
              className="mb-[-0%] mt-5 xl:mt-2 rounded-xl shadow-2xl 
                ring-1 ring-gray-900/10"
            />

            <div aria-hidden="true" className="relative">
              <div
                className="absolute bottom-0 -inset-x-32 bg-linear-to-t
                from-white/80 pt-[5%]"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl
            className="mx-auto max-w-2xl text-base leading-7 text-gray-800
              grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 
              lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="relative pl-9 border shadow-md rounded-md
                 p-7 lg:p-10 hover:shadow-xl transition-all"
              >
                <dt className="inline font-semibold text-gray-900">
                  <item.icon
                    aria-hidden="true"
                    className="text-red-500 absolute left-1 top-1 w-6 h-6"
                  />
                </dt>
                <dd className="text-lg xl:text-2xl">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
