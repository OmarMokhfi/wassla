import WButton from "src/components/Button";
import { useRegistration } from "src/hooks/RegistrationHook";
import { ROLE } from "src/types/Roles";

export const Step1 = ({ onNext }: { onNext: () => void }) => {
  const { registrationDetails, setRegistrationDetails } = useRegistration();

  const select = (val: string) => {
    setRegistrationDetails({ ...registrationDetails, role: val });
    onNext();
  };

  return (
    <div className="gap-[20px]">
      <h1 className="font-bold">Welcome To Wassla</h1>
      <div className="w-[400px] max-w-full gap-3 flex flex-col">
        <label className="ml-1">You are:</label>
        <WButton
          type="primary"
          size="large"
          className={`uppercase px-[12px] w-full font-semibold ${
            registrationDetails.role == ROLE.TEACHER
              ? "bg-primary bg-opacity-100"
              : "bg-black bg-opacity-10 text-gray-500"
          }`}
          onClick={() => select(ROLE.TEACHER)}
        >
          Teacher
        </WButton>
        <WButton
          type="primary"
          size="large"
          className={`uppercase px-[12px] w-full font-semibold ${
            registrationDetails.role == ROLE.STUDENT
              ? "bg-primary bg-opacity-100"
              : "bg-black bg-opacity-10 text-gray-500"
          }`}
          onClick={() => select(ROLE.STUDENT)}
        >
          Student
        </WButton>
        <WButton
          type="primary"
          size="large"
          className={`uppercase px-[12px] w-full font-semibold ${
            registrationDetails.role == ROLE.CLUB
              ? "bg-primary bg-opacity-100"
              : "bg-black bg-opacity-10 text-gray-500"
          }`}
          onClick={() => select(ROLE.CLUB)}
        >
          Club
        </WButton>
      </div>
    </div>
  );
};
