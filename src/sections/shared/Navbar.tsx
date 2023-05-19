"use client";

import { Avatar } from "antd";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import WInput from "src/components/Input";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary">
      <div className="w-full max-w-[1176px] py-6 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[60px]">
          <div className="h-[60px] w-[60px] bg-red-400 rounded-full flex items-center justify-center text-xs font-bold">
            LOGO
          </div>
          <div className="relative">
            <WInput
              placeholder="Search"
              id="search"
              required
              className="py-[8px] px-[12px] w-[340px] max-w-full"
            />
            <div className="absolute h-[20px] w-fit right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-green-500">
              <AiOutlineSearch size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[80px]">
          <div className="space-x-8">
            <Link
              href="/"
              className="text-white no-underline hover:text-red-500"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-white no-underline hover:text-red-500"
            >
              Teachers Connect
            </Link>
            <Link
              href="/"
              className="text-white no-underline hover:text-red-500"
            >
              Notifications
            </Link>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>
              <Avatar
                className="bg-white text-black cursor-pointer"
                size={40}
                src={<img src="/profile.png" alt="avatar" />}
              />
            </div>
            <p className="my-0 text-xs text-white">Me</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
