"use client";

import { Popover } from "antd";

export default function WPopover(props: any) {
  return <Popover {...props}>{props.children}</Popover>;
}
