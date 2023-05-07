"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import WButton from "src/components/Button";

export default function Login() {
  const { data: user } = useSession();
  const router = useRouter();
  const login = () => {
    signIn("credentials", {
      redirect: false,
      email: "ob.mokhfi@gmail.com",
      password: "Azerty123456",
    }).then((status: any) => {
      if (status.error) {
        console.log(status);
      } else {
        // print success message
        console.log("Success");
        router.push("/");
      }
    });
  };
  return (
    <div className="container mx-auto py-24">
      <h1>Login</h1>
      <WButton type="primary" onClick={login}>
        Login
      </WButton>
    </div>
  );
}
