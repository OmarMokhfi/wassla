"use client";

import { Upload } from "antd";

export default function WDragger(props: any) {
  return <Upload.Dragger {...props}>{props.children}</Upload.Dragger>;
}
