"use client";

import { Divider, Form } from "antd";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import WButton from "src/components/Button";
import WInput from "src/components/Input";
import WPasswordInput from "src/components/PasswordInput";

export default function Login() {
  const { data: user } = useSession();
  const router = useRouter();
  const login = (values: any) => {
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
    <main className="flex w-full h-full min-h-screen">
      <section className="w-4/12 h-full bg-primary"></section>
      <Form
        onFinish={login}
        className="w-[400px] max-w-full mx-auto h-full flex flex-col justify-center items-center space-y-4"
      >
        <Form.Item className="w-full mb-0">
          <div className="space-y-[4px]">
            <label htmlFor="email" className="text-sm ml-1">
              Email Address
            </label>
            <WInput
              placeholder="E-mail"
              id="email"
              required
              className="py-[8px] px-[12px]"
            />
          </div>
        </Form.Item>
        <Form.Item className="w-full">
          <div className="space-y-[4px]">
            <label htmlFor="password" className="text-sm ml-1">
              Password
            </label>
            <WPasswordInput
              placeholder="Password"
              id="password"
              required
              className="py-[8px] px-[12px]"
            />
            <div>
              <a className="cursor-pointer mt-2 text-[#32B39E]">
                Forgot Password
              </a>
            </div>
          </div>
        </Form.Item>
        <Form.Item className="w-full pt-[12px]">
          <WButton
            type="primary"
            size="large"
            htmlType="submit"
            className="px-[12px] w-full"
          >
            Login
          </WButton>
        </Form.Item>
        <div className="w-full">
          <Divider style={{ borderColor: "#555" }}>Or</Divider>
        </div>
        <WButton
          type="default"
          size="large"
          htmlType="submit"
          className="px-[8px] w-full flex items-center justify-center gap-2"
          icon={<FcGoogle size={22} />}
        >
          Continue With Google
        </WButton>
        <div className="text-center w-full">
          <span>Dont have an account?</span> <Link href="/signup">Sign Up</Link>
        </div>
      </Form>
    </main>
  );
}
