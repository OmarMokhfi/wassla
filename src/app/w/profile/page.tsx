import Image from "next/image";
import { AiFillEdit } from "react-icons/ai";
import WButton from "src/components/Button";

export default function page() {
  return (
    <div>
      <Cover
        name="Omar Mokhfi"
        role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        location="Sidi bel abbes - Algeria"
        followers={1250}
      />
    </div>
  );
}

const Cover = ({
  name,
  role,
  location,
  followers,
}: {
  name: string;
  role: string;
  location: string;
  followers: number;
}) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="w-full h-[200px] bg-gray-600 relative">
        <Image
          src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
        <div className="rounded-full overflow-hidden absolute bottom-0 left-[60px] translate-y-1/2 min-h-[170px] min-w-[170px] h-[170px] w-[170px] bg-green-500">
          <Image
            src="/profile.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="px-[80px] pt-[100px] pb-[40px]">
        <p className="font-bold text-xl mb-1">{name}</p>
        <p className="text-xl mb-1">{role}</p>
        <p className="text-xl mb-2 text-gray-400">{location}</p>
        <p className="text-xl mb-4">{followers} Followers</p>
        <WButton
          type="default"
          className="flex items-center justify-center gap-1"
          icon={<AiFillEdit size={16} />}
          size="large"
        >
          Edit Page
        </WButton>
      </div>
    </div>
  );
};
