"use client";

import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#32B39E",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </SessionProvider>
  );
};
