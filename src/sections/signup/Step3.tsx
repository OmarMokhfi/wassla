import { Divider, Form } from "antd";
// import { signIn } from "next-auth/react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import WButton from "src/components/Button";
import WInput from "src/components/Input";
import WPasswordInput from "src/components/PasswordInput";
import { useRegistration } from "src/hooks/RegistrationHook";

export const Step3 = ({ onBack }: { onBack: () => void }) => {
  const { registrationDetails, setRegistrationDetails } = useRegistration();
  const [form] = Form.useForm();
  const login = (values: any) => {
    let info = { ...registrationDetails, ...values };
    console.log(info);
    setRegistrationDetails(info);
    // signIn("credentials", {
    //   redirect: false,
    //   email: "ob.mokhfi@gmail.com",
    //   password: "Azerty123456",
    // }).then((status: any) => {
    //   if (status.error) {
    //     console.log(status);
    //   } else {
    //     // print success message
    //     console.log("Success");
    //   }
    // });
  };
  return (
    <Form
      onFinish={login}
      form={form}
      className="w-8/12 h-full p-12 flex flex-col justify-center items-center space-y-4"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Email is required" }]}
        className="w-[400px] max-w-full mb-0"
      >
        <div className="space-y-[4px]">
          <label htmlFor="email" className="text-sm ml-1">
            Email Address
          </label>
          <WInput placeholder="E-mail" className="py-[8px] px-[12px]" />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Password is required" }]}
        className="w-[400px] max-w-full"
      >
        <div className="space-y-[4px]">
          <label htmlFor="password" className="text-sm ml-1">
            Password
          </label>
          <WPasswordInput
            placeholder="Password"
            className="py-[8px] px-[12px]"
          />
        </div>
      </Form.Item>
      <div className="w-[400px] max-w-full pt-[12px] flex justify-between">
        <div>
          <WButton
            type="default"
            size="large"
            className="px-[8px] w-full flex items-center justify-center gap-1"
            icon={<BsArrowLeftShort size={22} />}
            onClick={onBack}
          >
            Back
          </WButton>
        </div>
        <div>
          <WButton
            type="primary"
            size="large"
            htmlType="submit"
            className="px-[8px] w-full"
          >
            Create Account
          </WButton>
        </div>
      </div>
      <div className="w-[400px] max-w-full">
        <Divider style={{ borderColor: "#555" }}>Or</Divider>
      </div>
      <WButton
        type="default"
        size="large"
        className="px-[8px] w-[400px] max-w-full flex items-center justify-center gap-2"
        icon={<FcGoogle size={22} />}
      >
        Continue With Google
      </WButton>
    </Form>
  );
};
