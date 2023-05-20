"use client";

import { Popover } from "antd";
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import WButton from "src/components/Button";

export default function EmojiSelect({ onEmojiSelect }: { onEmojiSelect: any }) {
  const onEmojiClick = (e: any) => {
    onEmojiSelect(e.emoji);
  };

  return (
    <Popover
      content={<EmojiPicker onEmojiClick={onEmojiClick} />}
      trigger="click"
      placement="bottom"
    >
      <div className="mr-auto">
        <WButton
          type="primary"
          shape="circle"
          className="flex justify-center items-center"
          icon={<MdOutlineEmojiEmotions size={22} />}
        ></WButton>
      </div>
    </Popover>
  );
}
