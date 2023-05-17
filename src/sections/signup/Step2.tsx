import { Form } from "antd";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import WButton from "src/components/Button";
import WInput from "src/components/Input";
import WSelect from "src/components/Select";
import { useRegistration } from "src/hooks/RegistrationHook";

export const Step2 = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const { registrationDetails, setRegistrationDetails } = useRegistration();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setRegistrationDetails({
      ...registrationDetails,
      ...values,
    });
    console.log({
      ...registrationDetails,
      ...values,
    });
    onNext();
  };

  const changeUniversity = (value: string) => {
    form.setFieldsValue({ university: value });
  };

  const changeField = (value: string) => {
    form.setFieldsValue({ field: value });
  };

  const changeDegree = (value: string) => {
    form.setFieldsValue({ degree: value });
  };

  return (
    <Form
      initialValues={registrationDetails}
      onFinish={onFinish}
      form={form}
      className="space-y-4"
    >
      <Form.Item
        className="w-[400px] max-w-full mb-0"
        name="university"
        rules={[{ required: true, message: "University is required" }]}
      >
        <div className="space-y-[4px]">
          <label htmlFor="university" className="text-sm ml-1">
            University
          </label>
          <WSelect
            placeholder="Select Your University"
            options={[
              { label: "University 1", value: "univ1" },
              { label: "University 2", value: "univ2" },
              { label: "University 3", value: "univ3" },
            ]}
            showSearch
            showArrow={false}
            onChange={changeUniversity}
            value={form.getFieldValue("university")}
            size="large"
          />
        </div>
      </Form.Item>
      <Form.Item
        name="field"
        rules={[{ required: true, message: "Field is required" }]}
        className="w-[400px] max-w-full mb-0"
      >
        <div className="space-y-[4px]">
          <label htmlFor="field" className="text-sm ml-1">
            Field
          </label>
          <WSelect
            placeholder="Select Your Field"
            options={[
              { label: "Field 1", value: "field1" },
              { label: "Field 2", value: "field2" },
              { label: "Field 3", value: "field3" },
            ]}
            showSearch
            showArrow={false}
            onChange={changeField}
            value={form.getFieldValue("field")}
            size="large"
          />
        </div>
      </Form.Item>
      <Form.Item
        name="degree"
        rules={[{ required: true, message: "Degree is required" }]}
        className="w-[400px] max-w-full mb-0"
      >
        <div className="space-y-[4px]">
          <label htmlFor="degree" className="text-sm ml-1">
            Degree
          </label>
          <WSelect
            placeholder="Select Your Degree"
            options={[
              { label: "Degree 1", value: "degree1" },
              { label: "Degree 2", value: "degree2" },
              { label: "Degree 3", value: "degree3" },
            ]}
            required
            showSearch
            showArrow={false}
            onChange={changeDegree}
            value={form.getFieldValue("degree")}
            size="large"
          />
        </div>
      </Form.Item>
      <div className="flex gap-4 w-[400px] max-w-full mb-0">
        <Form.Item
          name="firstname"
          rules={[{ required: true, message: "First name is required" }]}
        >
          <div className="space-y-[4px]">
            <label htmlFor="firstname" className="text-sm ml-1">
              First name
            </label>
            <WInput placeholder="First name" className="py-[8px] px-[12px]" />
          </div>
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[{ required: true, message: "Last name is required" }]}
        >
          <div className="space-y-[4px]">
            <label htmlFor="lastname" className="text-sm ml-1">
              Last name
            </label>
            <WInput placeholder="Last name" className="py-[8px] px-[12px]" />
          </div>
        </Form.Item>
      </div>
      <div className="w-[400px] max-w-full flex items-center justify-between gap-[40px] pt-[12px]">
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
            className="px-[8px] w-full flex flex-row-reverse items-center justify-center gap-1"
            icon={<BsArrowRightShort size={22} />}
          >
            Next
          </WButton>
        </div>
      </div>
    </Form>
  );
};
