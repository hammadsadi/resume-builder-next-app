import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useResume } from "@/context/resume";
import { SignInButton, useUser } from "@clerk/nextjs";

const StepOneCreate = () => {
  const { resume, setResume, saveResume } = useResume();
  const { isSignedIn } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    // saveResume();
    // Update Resume
  };
  // Handle Change Input
  const handleChangteInput = (e) => {
    const { name, value } = e.target;
    setResume((prevState) => {
      const updateState = { ...prevState, [name]: value };
      // Save Resume Info to Local Storage
      localStorage.setItem("resume", JSON.stringify(updateState));
      return updateState;
    });
  };
  return (
    <div className="w-full lg:w-1/2 p-5 border shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Personal Information</h2>

      <Input
        className="mb-3"
        onChange={handleChangteInput}
        value={resume?.name}
        name="name"
        type="text"
        autoFocus
        placeholder="Full Name"
        required
      />
      <Input
        className="mb-3"
        onChange={handleChangteInput}
        value={resume?.job}
        name="job"
        type="text"
        placeholder="Job Title"
        required
      />
      <Input
        className="mb-3"
        onChange={handleChangteInput}
        value={resume?.address}
        name="address"
        type="text"
        placeholder="Your Address"
        required
      />
      <Input
        className="mb-3"
        onChange={handleChangteInput}
        value={resume?.phone}
        name="phone"
        type="text"
        placeholder="Your Number"
        required
      />
      <Input
        className="mb-3"
        onChange={handleChangteInput}
        value={resume?.email}
        name="email"
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

export default StepOneCreate;
