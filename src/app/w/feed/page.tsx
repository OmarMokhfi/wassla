"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import WButton from "src/components/Button";
import SessionPost from "src/sections/feed/SessionPost";
import SharePost from "src/sections/feed/SharePost";

const POSTS = [
  {
    topic: "Introduction to computer science",
    image:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    topic: "Fullstack Web Development",
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    topic: "Blue Team Cyber Security",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function Page() {
  return (
    <div className="w-full max-w-[1176px] mx-auto flex justify-between gap-[50px]">
      <div className="h-fit w-[270px] space-y-10">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="w-full h-[90px] bg-gray-600 relative">
            <div className="rounded-full overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 min-h-[90px] min-w-[90px] h-[90px] w-[90px] bg-green-500">
              <Image
                src="/profile.png"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="px-[20px] pt-[60px] pb-[20px] text-center">
            <p className="font-bold text-[12px] mb-1">Flen ben Flen</p>
            <p className="text-[11px] max-w-[170px] mx-auto mb-0">
              Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès
            </p>
          </div>
          <hr className="border-green-500 my-0" />
          <div className="px-[30px] py-[20px] space-y-3">
            <div>
              <Link
                href="/w/articles"
                className="no-underline text-gray-600 hover:text-primary"
              >
                My Articles
              </Link>
            </div>
            <div>
              <Link
                href="/w/sessions"
                className="no-underline text-gray-600 hover:text-primary"
              >
                My Sessions
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-[40px]">
          <p className="font-bold">Fields</p>
          <div className="space-y-1">
            <p className="mb-1">Computer Science</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-[40px]">
          <p className="font-bold">Coming Soon</p>
          <div className="space-y-1">
            <p className="mb-1">Medicine</p>
            <p>Economy</p>
            <p>Languages</p>
            <p>And more</p>
          </div>
        </div>
      </div>
      <div className="h-fit flex-grow space-y-[40px] max-w-[520px]">
        <div className="bg-white shadow-sm rounded-lg px-[30px] py-[20px]">
          <SharePost />
        </div>
        {POSTS.map((post, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg p-[40px]">
            <SessionPost content={post} />
          </div>
        ))}
      </div>
      <div className="w-[270px] h-fit bg-white shadow-sm rounded-lg p-[40px] space-y-6">
        <p className="font-bold text-[14px]">Follow Best Teachers</p>
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
      </div>
    </div>
  );
}

const Teacher = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className="w-full flex gap-3">
      <div className="rounded-full min-h-[35px] min-w-[35px] h-[35px] w-[35px] relative overflow-hidden">
        <Image src="/profile.png" alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div>
        <p className="font-bold text-[12px] mb-1">{name}</p>
        <p className="text-[11px]">{role}</p>
        <WButton
          type="default"
          className="flex items-center justify-center gap-1"
          icon={<AiOutlinePlus size={12} />}
        >
          Follow
        </WButton>
      </div>
    </div>
  );
};
