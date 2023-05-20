"use client";

import { Form, Radio } from "antd";
import { BsCloudUploadFill } from "react-icons/bs";
import WDateInput from "src/components/DateInput";
import WDragger from "src/components/Dragger";
import WInput from "src/components/Input";
import WTextArea from "src/components/TextArea";
import WTimeInput from "src/components/TimeInput";

export default function SessionModal() {
  const onSubmit = (values: any) => {};
  function onChange(info: any) {
    console.log("file changed");
  }
  function onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  }
  return (
    <Form
      onFinish={onSubmit}
      className="w-full h-full flex flex-col justify-center items-center space-y-6 mt-6 mb-12"
    >
      <WDragger
        name="file"
        multiple={false}
        onDrop={onDrop}
        onChange={onChange}
        className="w-full"
      >
        <p className="ant-upload-drag-icon mt-6">
          <BsCloudUploadFill size={60} />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Support for a single upload.</p>
      </WDragger>
      <Form.Item className="w-full mb-0">
        <div className="space-y-[6px]">
          <label htmlFor="name" className="text-sm ml-1 font-semibold">
            Session Name
          </label>
          <WInput
            placeholder="Eg: Introduction to Web Development"
            id="name"
            required
            className="py-[8px] px-[12px]"
          />
        </div>
      </Form.Item>
      <Form.Item className="w-full mb-0">
        <div className="space-y-[6px]">
          <label htmlFor="link" className="text-sm ml-1 font-semibold">
            Session Link
          </label>
          <WInput
            placeholder="Eg: Zoom - Google Meet..."
            id="link"
            required
            className="py-[8px] px-[12px]"
          />
        </div>
      </Form.Item>
      <Form.Item className="w-full mb-0">
        <div className="space-y-[6px]">
          <label htmlFor="type" className="text-sm ml-1 font-semibold">
            Session Type
          </label>
          <div className="ml-1">
            <Radio.Group>
              <Radio value={1}>Online</Radio>
              <Radio value={2}>In-Person</Radio>
            </Radio.Group>
          </div>
        </div>
      </Form.Item>
      <div className="grid grid-cols-2 w-full gap-4">
        <Form.Item className="w-full mb-0">
          <div className="space-y-[6px]">
            <label htmlFor="date" className="text-sm ml-1 font-semibold">
              Start Date
            </label>
            <WDateInput
              placeholder="19/05/2023"
              id="date"
              required
              className="py-[8px] px-[12px] w-full"
            />
          </div>
        </Form.Item>
        <Form.Item className="w-full mb-0">
          <div className="space-y-[6px]">
            <label htmlFor="time" className="text-sm ml-1 font-semibold">
              Start Time
            </label>
            <WTimeInput
              placeholder="12:00 PM"
              use12Hours
              format="h:mm a"
              id="time"
              required
              className="py-[8px] px-[12px] w-full"
            />
          </div>
        </Form.Item>
      </div>
      <Form.Item className="w-full mb-0">
        <div className="space-y-[6px]">
          <label htmlFor="description" className="text-sm ml-1 font-semibold">
            Description
          </label>
          <WTextArea
            placeholder="Session Description"
            id="description"
            required
            autoSize={{ minRows: 4, maxRows: 8 }}
            maxLength={1000}
            allowClear
            showCount
            className="py-[8px] px-[12px] w-full"
          />
        </div>
      </Form.Item>
    </Form>
  );
}
