"use client";

import { Form } from "antd";
import { useState } from "react";
import WTextArea from "src/components/TextArea";
import EmojiSelect from "./EmojiSelect";

export default function PostModal() {
  const [text, setText] = useState("");
  const onSubmit = (values: any) => {};

  const onEmojiSelect = (emoji: string) => {
    setText((old) => old + " " + emoji);
  };

  const changeText = (e: any) => {
    setText(e.target.value);
  };

  return (
    <Form
      onFinish={onSubmit}
      className="w-full h-full flex flex-col justify-center items-center space-y-6 mt-6 mb-12"
    >
      <WTextArea
        placeholder="What do you want to talk about ?"
        id="new_post"
        required
        autoSize={{ minRows: 4, maxRows: 20 }}
        maxLength={1000}
        className="w-full text-lg"
        bordered={false}
        style={{ padding: 0 }}
        value={text}
        onChange={changeText}
      />
      <EmojiSelect onEmojiSelect={onEmojiSelect} />
    </Form>
  );
}
