"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import RegistrationProvider from "src/hooks/RegistrationHook";
import { Step1 } from "src/sections/signup/Step1";
import { Step2 } from "src/sections/signup/Step2";
import { Step3 } from "src/sections/signup/Step3";

export default function Signup() {
  const { data: user } = useSession();
  const [step, setStep] = useState(0);

  const goNext = () => {
    setStep((old) => old + 1);
  };

  const goBack = () => {
    setStep((old) => old - 1);
  };

  return (
    <main className="flex w-full h-full min-h-screen">
      <section className="w-4/12 h-full bg-primary"></section>
      <RegistrationProvider>
        <div className="w-8/12 flex flex-col justify-center items-center h-full">
          {step == 0 ? (
            <Step1 onNext={goNext} />
          ) : step == 1 ? (
            <Step2 onNext={goNext} onBack={goBack} />
          ) : (
            <Step3 onBack={goBack} />
          )}
        </div>
      </RegistrationProvider>
    </main>
  );
}
