import Image from "next/image";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import WButton from "src/components/Button";

const teachers = [
  {
    name: "John Doe",
    role: "Math Teacher",
  },
  {
    name: "Jane Smith",
    role: "English Teacher",
  },
  {
    name: "Michael Johnson",
    role: "Science Teacher",
  },
  {
    name: "Sarah Adams",
    role: "History Teacher",
  },
  {
    name: "David Wilson",
    role: "Physical Education Teacher",
  },
  {
    name: "Emily Davis",
    role: "Art Teacher",
  },
];

export default function page() {
  return (
    <>
      <div className="w-full max-w-[1176px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {teachers.map((item, index) => (
          <div key={index}>
            <Teacher name={item.name} role={item.role} />
          </div>
        ))}
      </div>
      <div className="mt-8 w-fit mx-auto">
        <WButton
          type="text"
          className="!text-[16px] flex flex-row-reverse gap-[8px] items-center justify-center"
          icon={<AiFillCaretDown size={22} />}
          size="large"
        >
          Show More
        </WButton>
      </div>
    </>
  );
}

const Teacher = ({ name, role }: { name: string; role: string }) => (
  <div className="bg-white shadow-sm rounded-lg overflow-hidden">
    <div className="w-full h-[90px] bg-gray-600 relative">
      <div className="rounded-full overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 min-h-[90px] min-w-[90px] h-[90px] w-[90px] bg-green-500">
        <Image src="/profile.png" alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
    <div className="px-[20px] pt-[60px] pb-[20px] text-center">
      <p className="font-bold text-[12px] mb-1">{name}</p>
      <p className="text-[11px] max-w-[170px] mx-auto mb-0">{role}</p>
    </div>
    <hr className="border-green-500 my-0" />
    <div className="py-4 mx-auto flex justify-center">
      <WButton
        type="default"
        className="flex items-center justify-center gap-1 border-primary"
        icon={<AiOutlinePlus size={12} />}
      >
        Follow
      </WButton>
    </div>
  </div>
);
