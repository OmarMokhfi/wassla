import { AiOutlinePlus } from "react-icons/ai";
import WButton from "src/components/Button";

export default function Page() {
  return (
    <div className="w-full max-w-[1176px] mx-auto flex justify-between gap-[50px]">
      <div className="h-[300px] w-[270px] bg-white shadow-sm rounded-lg p-[40px]"></div>
      <div className="h-[300px] flex-grow max-w-[520px] bg-white shadow-sm rounded-lg p-[40px]"></div>
      <div className="w-[270px] bg-white shadow-sm rounded-lg p-[40px] space-y-6">
        <p className="font-bold text-[14px]">Follow Best Teachers</p>
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
        <Teacher
          name="Flen ben Flen"
          role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        />
      </div>
    </div>
  );
}

const Teacher = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className="w-full flex gap-3">
      <div className="rounded-full min-h-[35px] min-w-[35px] h-[35px] w-[35px] bg-green-500"></div>
      <div>
        <p className="font-bold text-[12px] mb-1">{name}</p>
        <p className="text-[11px]">{role}</p>
        <WButton
          type="default"
          className="flex items-center justify-center gap-1"
          icon={<AiOutlinePlus size={12} />}
        >
          Follow
        </WButton>
      </div>
    </div>
  );
};
