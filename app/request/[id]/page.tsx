import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    console.log('idValue:', id);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1>Dynamic Page</h1>
            <p>Dynamic ID: {id}</p>
        </main>
    </div>
  );
};