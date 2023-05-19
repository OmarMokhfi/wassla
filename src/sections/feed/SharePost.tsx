import Image from "next/image";
import WButton from "src/components/Button";
import WModal from "src/components/Modal";

export default function SharePost() {
  const handleOk = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  return (
    <>
      <div className="w-full flex gap-4">
        <div className="rounded-full min-h-[60px] min-w-[60px] h-[60px] w-[60px] relative overflow-hidden">
          <Image
            src="/profile.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="space-y-2 flex-grow">
          <WButton
            type="default"
            className="w-full text-left !text-[12px]"
            size="large"
          >
            Share Your Mind
          </WButton>

          <div className="flex gap-4">
            <WModal
              title="Create Article"
              handleOk={handleOk}
              okLabel="Create Article"
              trigger={
                <WButton
                  type="text"
                  className="flex items-center justify-center gap-1"
                >
                  Write Article
                </WButton>
              }
            >
              <p>The modal will be closed after two seconds</p>
            </WModal>
            <WModal
              title="Create Session"
              handleOk={handleOk}
              okLabel="Create Session"
              trigger={
                <WButton
                  type="text"
                  className="flex items-center justify-center gap-1"
                >
                  Schedule Session
                </WButton>
              }
            >
              <p>The modal will be closed after two seconds</p>
            </WModal>
          </div>
        </div>
      </div>
    </>
  );
}
