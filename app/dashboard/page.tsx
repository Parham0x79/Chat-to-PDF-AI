import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

function Dashboard() {
  return (
    <div className="max-w-7xl h-full mx-auto">
      <h1
        className="text-3xl p-5 text-red-500 font-mono
        bg-gray-100 font-extralight"
      >
        My Documents
      </h1>

      <Documents />
    </div>
  );
}

export default Dashboard;
