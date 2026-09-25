import { fetchUsers } from "@/lib/fetch-user";

export default function CommunityPage() {
  const users = fetchUsers();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>Community Page</h1>
          <p>People in the community.</p>
        </div>
        <ul className="flex w-full flex-col gap-4">
          {users.map((user) => (
            <li key={user.id} className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}