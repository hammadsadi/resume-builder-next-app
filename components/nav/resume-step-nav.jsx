import { useResume } from "@/context/resume";
import React from "react";
import { Button } from "../ui/button";

const ResumeStepNav = () => {
  const { step, setStep } = useResume();
  return (
    <nav className="flex justify-center w-full py-4">
      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <Button
            variant={`${step === item ? "sadiButton" : "secondary"}`}
            key={item}
            onClick={() => setStep(item)}
            disabled={step < item}
            className={`w-10 h-10 rounded-full flex justify-center items-center transition`}
          >
            {item}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default ResumeStepNav;
