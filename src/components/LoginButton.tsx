"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">
          {session.user?.name}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Se déconnecter
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => router.push("/login")}
      className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
    >
      Se connecter
    </button>
  );
}