import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useResume } from "@/context/resume";
import { SignInButton, useUser } from "@clerk/nextjs";

const StepOne = () => {
  const { resume, setResume, saveResume } = useResume();
  const { isSignedIn } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    saveResume();
    console.log(resume);
  };
  return (
    <div className="w-full lg:w-1/2 p-5 border shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Personal Information</h2>

      <Input
        className="mb-3"
        onChange={(e) => setResume({ ...resume, name: e.target.value })}
        value={resume.name}
        type="text"
        autoFocus
        placeholder="Full Name"
        required
      />
      <Input
        className="mb-3"
        onChange={(e) => setResume({ ...resume, job: e.target.value })}
        value={resume.job}
        type="text"
        placeholder="Job Title"
        required
      />
      <Input
        className="mb-3"
        onChange={(e) => setResume({ ...resume, address: e.target.value })}
        value={resume.address}
        type="text"
        placeholder="Your Address"
        required
      />
      <Input
        className="mb-3"
        onChange={(e) => setResume({ ...resume, phone: e.target.value })}
        value={resume.phone}
        type="text"
        placeholder="Your Number"
        required
      />
      <Input
        className="mb-3"
        onChange={(e) => setResume({ ...resume, email: e.target.value })}
        value={resume.email}
        type="email"
        placeholder="Your Email"
        required
      />
      <div className="flex justify-end">
        {!isSignedIn ? (
          <SignInButton>
            <Button variant="sadiButton">Sign in to Continue</Button>
          </SignInButton>
        ) : (
          <Button variant="sadiButton" onClick={handleSubmit}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepOne;
