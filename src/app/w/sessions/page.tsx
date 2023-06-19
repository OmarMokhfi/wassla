"use client";

import Image from "next/image";
import {
  AiFillCaretDown,
  AiOutlinePlus,
  AiOutlineShareAlt,
} from "react-icons/ai";
import WButton from "src/components/Button";
import WModal from "src/components/Modal";
import SessionModal from "src/sections/feed/SessionModal";

const sessions = [
  {
    title: "Introduction to HTML and CSS",
    description:
      "Learn the basics of building web pages with HTML and CSS. This workshop covers the fundamentals of structuring web content and styling it with CSS. No prior coding experience required.",
  },
  {
    title: "JavaScript Essentials",
    description:
      "Dive into the world of JavaScript and discover its power in web development. This workshop focuses on core JavaScript concepts, such as variables, functions, and conditional statements.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Master the art of creating responsive and mobile-friendly websites. This workshop teaches you how to design and develop websites that adapt to different screen sizes and devices.",
  },
  {
    title: "Introduction to Python",
    description:
      "Get started with Python programming language in this introductory workshop. Learn the syntax, data types, and control structures of Python while building simple projects.",
  },
  {
    title: "Front-End Frameworks",
    description:
      "Explore popular front-end frameworks like React, Vue, and Angular. This workshop guides you through building dynamic and interactive web applications using these frameworks.",
  },
  {
    title: "Data Visualization with D3.js",
    description:
      "Learn the art of data visualization with D3.js library. This workshop covers creating stunning charts, graphs, and interactive visualizations using JavaScript and SVG.",
  },
];

export default function page() {
  const handleOk = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
  return (
    <>
      <div className="w-full max-w-[1176px] mx-auto mb-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-bold mb-0">Sessions</h1>
        <WModal
          title="Create Session"
          handleOk={handleOk}
          okLabel="Create Session"
          centered
          trigger={
            <WButton
              type="primary"
              className="flex items-center justify-center gap-1 text-white"
              icon={<AiOutlinePlus size={16} />}
              size="large"
            >
              Create Session
            </WButton>
          }
        >
          <SessionModal />
        </WModal>
      </div>
      <div className="w-full max-w-[1176px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {sessions.map((item, index) => (
          <div key={index}>
            <Session title={item.title} description={item.description} />
          </div>
        ))}
      </div>
      <div className="mt-8 w-fit mx-auto">
        <WButton
          type="text"
          className="!text-[16px] flex flex-row-reverse gap-[8px] items-center justify-center"
          icon={<AiFillCaretDown size={22} />}
          size="large"
        >
          Show More
        </WButton>
      </div>
    </>
  );
}

const Session = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white shadow-sm rounded-lg overflow-hidden">
    <div className="overflow-hidden relative h-[240px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="px-[20px] py-4">
      <p className="font-bold mb-1">{title}</p>
      <p className="text-[12px] mb-0">{description}</p>
    </div>
    <div className="py-4 px-[20px] mx-auto flex justify-between gap-8">
      <WButton type="default" className="border-primary flex-grow">
        View
      </WButton>
      <WButton
        type="text"
        icon={<AiOutlineShareAlt size={20} />}
        className="flex items-center justify-center"
      />
    </div>
  </div>
);
