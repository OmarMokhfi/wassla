import Image from "next/image";
import Link from "next/link";
import WButton from "src/components/Button";
import WModal from "src/components/Modal";
import PostModal from "./PostModal";
import SessionModal from "./SessionModal";

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
          <WModal
            title="Create a New Post"
            handleOk={handleOk}
            okLabel="Post"
            trigger={
              <WButton
                type="default"
                className="w-full text-left !text-[12px]"
                size="large"
              >
                Share What's On Your Mind
              </WButton>
            }
          >
            <PostModal />
          </WModal>

          <div className="flex gap-4">
            <Link href="/w/articles/new" className="no-underline">
              <WButton
                type="text"
                className="flex items-center justify-center gap-1"
              >
                Write Article
              </WButton>
            </Link>
            <WModal
              title="Create Session"
              handleOk={handleOk}
              okLabel="Create Session"
              centered
              trigger={
                <WButton
                  type="text"
                  className="flex items-center justify-center gap-1"
                >
                  Schedule Session
                </WButton>
              }
            >
              <SessionModal />
            </WModal>
          </div>
        </div>
      </div>
    </>
  );
}
