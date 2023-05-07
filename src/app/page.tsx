"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import WButton from "src/components/Button";

export default function Home() {
  const { data } = useSession();

  const logout = () => {
    signOut();
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {data ? (
        <div className="flex flex-col items-center gap-[15px]">
          <WButton type="primary" danger onClick={logout}>
            Logout
          </WButton>
          <p>
            <strong>Email:</strong> {data?.user?.email}
          </p>
        </div>
      ) : (
        <Link href="/login">
          <WButton type="primary">Go To Login</WButton>
        </Link>
      )}
    </main>
  );
}
