"use client";

import Image from "next/image";
import { BsCloudUploadFill } from "react-icons/bs";
import WButton from "src/components/Button";
import WDragger from "src/components/Dragger";
import WInput from "src/components/Input";

export default function page() {
  const onSubmit = (values: any) => {};
  function onChange(info: any) {
    console.log("file changed");
  }
  function onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  }

  const execCommand = (cmd: string, value: string | null = null) => {
    if (value) {
      document.execCommand(cmd, false, value);
    } else {
      document.execCommand(cmd);
    }
  };
  return (
    <>
      <section className="py-2 w-full border-gray-600 flex justify-between items-center">
        <div>
          <WButton
            type="default"
            onClick={() => execCommand("bold")}
            className="flex items-center justify-center gap-1"
          >
            Bold
          </WButton>
        </div>
        <div className="flex gap-x-4">
          <WButton
            type="default"
            className="flex items-center justify-center gap-1"
          >
            Save
          </WButton>
          <WButton
            type="primary"
            className="flex items-center justify-center gap-1"
          >
            Publish
          </WButton>
        </div>
      </section>
      <hr />
      <div className="container max-w-[900px] mx-auto mt-16">
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
        <div className="mt-16">
          <WInput
            placeholder="Headline"
            id="title"
            required
            className="text-[36px] border-transparent bg-transparent placeholder:text-gray-600"
            style={{ padding: 0 }}
          />
        </div>
        <div className="mt-6">
          <WDragger
            name="file"
            multiple={false}
            onDrop={onDrop}
            onChange={onChange}
            className="w-full"
          >
            <p className="ant-upload-drag-icon mt-14">
              <BsCloudUploadFill size={60} />
            </p>
            <p className="ant-upload-text">
              Click or drag a cover image to this area to upload
            </p>
            <p className="ant-upload-hint mb-14">
              Support for a single upload.
            </p>
          </WDragger>
        </div>
        <div className="mt-6">
          <div
            contentEditable
            data-placeholder="Write here. you can also include #Hashtags"
            id="article"
            className="w-full text-lg focus:border-transparent"
            style={{ padding: 0 }}
          ></div>
        </div>
      </div>
    </>
  );
}

const Teacher = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className="w-full flex gap-3">
      <div className="rounded-full min-h-[80px] min-w-[80px] h-[80px] w-[80px] relative overflow-hidden">
        <Image src="/profile.png" alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div>
        <p className="font-bold text-[14px] mb-1">{name}</p>
        <p className="text-[12px] max-w-[165px]">{role}</p>
        <p className="text-[12px] text-gray-500">{new Date().toDateString()}</p>
      </div>
    </div>
  );
};
