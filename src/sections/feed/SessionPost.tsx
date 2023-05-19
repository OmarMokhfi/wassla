import Image from "next/image";
import { BiCommentDetail, BiLike, BiSend } from "react-icons/bi";
import WButton from "src/components/Button";

export default function SessionPost({
  content,
}: {
  content: { topic: string; image: string };
}) {
  return (
    <>
      <div className="w-full flex items-center gap-3">
        <div className="rounded-full min-h-[55px] min-w-[55px] h-[55px] w-[55px] overflow-hidden relative">
          <Image
            src="/profile.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p className="font-bold text-[12px] mb-1">Flen ben Flen</p>
          <p className="text-[11px] mb-1">
            Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès
          </p>
          <p className="text-[11px]">1d.</p>
        </div>
      </div>
      <p className="text-xs mt-3">
        bla bla bla iojcoiecioejcieojcieojceiojceiojcoiecioecioejciejcoiejoc
        eouceucheoicjeoicjeoijcioejcoec oidcoiecjioejcioejcoiejcoie{" "}
        <a href="#">see more</a>
      </p>
      <div className="w-full h-[155px] bg-gray-400 relative">
        <Image src={content.image} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex justify-between py-5">
        <div>
          <p className="text-[12px] text-gray-400 mb-1">Sun,Jan 15,5:00 PM</p>
          <p className="text-[14px]">{content.topic}</p>
          <p className="text-[14px] font-bold mb-1">Online</p>
          <p className="text-[14px] text-gray-400 mb-0">4 Attendees</p>
        </div>
        <WButton
          type="default"
          className="!text-[12px] font-bold border-primary text-primary"
          size="large"
        >
          Register
        </WButton>
      </div>
      <hr className="border-green-500 my-0" />
      <div className="grid grid-cols-4 mt-2">
        <WButton
          type="text"
          className="!text-[12px] flex items-center justify-center"
          size="large"
          icon={<BiLike size={18} />}
        >
          Like
        </WButton>
        <WButton
          type="text"
          className="!text-[12px] flex items-center justify-center"
          size="large"
          icon={<BiCommentDetail size={18} className="mt-1" />}
        >
          Comment
        </WButton>
        <WButton
          type="text"
          className="!text-[12px] flex items-center justify-center"
          size="large"
          icon={<BiSend size={18} />}
        >
          Send
        </WButton>
        <WButton type="text" className="!text-[12px]" size="large">
          Report
        </WButton>
      </div>
    </>
  );
}
