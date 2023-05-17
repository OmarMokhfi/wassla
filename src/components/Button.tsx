"use client";

import { Button } from "antd";

export default function WButton(props: any) {
  return <Button {...props}>{props.children}</Button>;
}
