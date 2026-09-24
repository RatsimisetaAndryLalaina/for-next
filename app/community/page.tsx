'use client';

export default function CommunityPage() {
    console.log('CommunityPage rendered');
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1>Community Page</h1>
            <p>This is the community page.</p>
        </main>
    </div>
  );
}