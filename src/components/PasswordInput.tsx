import { Input } from "antd";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function WPasswordInput(props: any) {
  const [visible, setVisible] = useState(false);
  return (
    <Input.Password
      {...props}
      type="password"
      iconRender={(visible: boolean) =>
        visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
      }
      visibilityToggle={{
        visible: visible,
        onVisibleChange: setVisible,
      }}
    />
  );
}
