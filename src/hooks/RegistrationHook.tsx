import { ReactNode, createContext, useContext, useState } from "react";

interface RegistrationDetails {
  role: string;
  university: string;
  field: string;
  degree: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const RegistrationContext = createContext({
  registrationDetails: {
    role: "",
    university: "",
    field: "",
    degree: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  },
  setRegistrationDetails: (registrationDetails: RegistrationDetails) => {},
});

export default function RegistrationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [registrationDetails, setRegistrationDetails] = useState({
    role: "",
    university: "",
    field: "",
    degree: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  return (
    <RegistrationContext.Provider
      value={{
        registrationDetails,
        setRegistrationDetails,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export const useRegistration = () => useContext(RegistrationContext);
