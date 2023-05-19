import { Modal } from "antd";
import { useState } from "react";
import WButton from "./Button";

export default function WModal(props: any) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    props.handleOk().then((res: any) => {
      setOpen(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={showModal}>{props.trigger}</div>
      <Modal
        {...props}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <WButton type="default" className="ml-auto" onClick={handleCancel}>
            Cancel
          </WButton>,
          <WButton type="primary" className="ml-auto" loading={confirmLoading}>
            {props.okLabel ?? "Ok"}
          </WButton>,
        ]}
      >
        <p>{props.children}</p>
      </Modal>
    </>
  );
}
