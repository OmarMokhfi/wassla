"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import WButton from "src/components/Button";
import WTextArea from "src/components/TextArea";

export default function page() {
  return (
    <div className="space-y-6 w-full max-w-[1176px] mx-auto">
      <Cover
        name="Omar Mokhfi"
        role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        location="Sidi bel abbes - Algeria"
        followers={1250}
      />
      <About content="Innovative and business-oriented Front End Developer with 3 years of professional experience building and maintaining responsive web applications. Proficient in HTML5, CSS, Javascript, Angular and React. Passionate about design systems, and development architectures to produce the cleanest, scalable code. Enjoying my time with 3D modeling and Adobe products from design to video editing as a hobby." />
      <Experience />
    </div>
  );
}

const Head = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="py-6 px-10 flex items-center justify-between">
      <h2 className="font-bold mb-0 relative">
        {title}{" "}
        <div className="absolute -right-[20px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-primary rounded-full"></div>
      </h2>
      {children}
    </div>
  );
};

const About = ({ content }: { content: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden pb-4">
      <Head title="About">
        <div>
          <WButton
            type="text"
            icon={<BiEdit size={24} />}
            className="flex items-center justify-center"
            onClick={() => setIsEditing(true)}
          />
        </div>
      </Head>
      <div className="px-10">
        {isEditing ? (
          <>
            <WTextArea
              placeholder="A bio about yourself"
              value={content}
              style={{ height: 120, resize: "none" }}
            />
            <div className="flex items-center justify-end gap-4 mt-3">
              <WButton type="default" onClick={() => setIsEditing(false)}>
                Cancel
              </WButton>
              <WButton type="primary" loading={isSaving}>
                Save
              </WButton>
            </div>
          </>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "University Researcher",
      university: "Djillali Liabes University · Part-time",
      date: "Mar 2014 - Mar 2020 · 6 yrs 1 mo",
      location: "Sidi Bel Abbes - Algeria",
    },
    {
      role: "University Researcher",
      university: "Djillali Liabes University · Part-time",
      date: "Mar 2014 - Mar 2020 · 6 yrs 1 mo",
      location: "Sidi Bel Abbes - Algeria",
    },
    {
      role: "University Researcher",
      university: "Djillali Liabes University · Part-time",
      date: "Mar 2014 - Mar 2020 · 6 yrs 1 mo",
      location: "Sidi Bel Abbes - Algeria",
    },
  ];
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden pb-4">
      <Head title="Experience">
        <div>
          <WButton
            type="text"
            icon={<AiOutlinePlus size={24} />}
            className="flex items-center justify-center"
          />
        </div>
      </Head>
      <div className="mt-6 px-10">
        {experiences.map((item, index) => (
          <>
            {index != 0 && <hr className="mb-6 opacity-60" />}
            <div className="flex group">
              <div className="w-full flex gap-3">
                <div className="min-h-[60px] min-w-[60px] h-[60px] w-[60px] relative overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="font-bold mb-2">{item.role}</p>
                  <p className="mb-2">{item.university}</p>
                  <p className="mb-2">{item.date}</p>
                  <p className="">{item.location}</p>
                </div>
              </div>
              <div className="hidden group-hover:block">
                <WButton
                  type="text"
                  icon={<BiEdit size={24} />}
                  className="flex items-center justify-center"
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const Cover = ({
  name,
  role,
  location,
  followers,
}: {
  name: string;
  role: string;
  location: string;
  followers: number;
}) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="w-full h-[200px] bg-gray-600 relative">
        <Image
          src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
        <div className="rounded-full overflow-hidden absolute bottom-0 left-[60px] translate-y-1/2 min-h-[170px] min-w-[170px] h-[170px] w-[170px] bg-green-500">
          <Image
            src="/profile.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="px-[80px] pt-[100px] pb-[40px]">
        <p className="font-bold text-xl mb-1">{name}</p>
        <p className="text-xl mb-1">{role}</p>
        <p className="text-xl mb-2 text-gray-400">{location}</p>
        <p className="text-xl mb-4">{followers} Followers</p>
        <WButton
          type="default"
          className="flex items-center justify-center gap-1"
          icon={<AiFillEdit size={16} />}
          size="large"
        >
          Edit Page
        </WButton>
      </div>
    </div>
  );
};
