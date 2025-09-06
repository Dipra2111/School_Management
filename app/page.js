import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">School Management</h1>

      <div className="flex flex-col gap-6">
        <Link
          href="/addSchool"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-center"
        >
          ➕ Add School
        </Link>

        <Link
          href="/showSchools"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 text-center"
        >
          📚 Show Schools
        </Link>
      </div>
    </div>
  );
}
