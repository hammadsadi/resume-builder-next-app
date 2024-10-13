"use server";
import connectWithDatabase from "@/config/db"; // Connect DB
import Resume from "@/models/resume"; // Import Resume Model
import { currentUser } from "@clerk/nextjs/server"; // Get Loggedin User from clerk

// Create Resume
export const createResume = async (data) => {
  try {
    // Connect DB
    await connectWithDatabase();
    // Get User Info
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;
    const { _id, ...rest } = data;
    const resume = await Resume.create({ ...rest, userEmail });
    return JSON.parse(JSON.stringify(resume));
  } catch (error) {
    throw new Error(error);
  }
};

// Get All Resume
export const getAllUserResumeFromDB = async () => {
  try {
    // Connect DB
    await connectWithDatabase();
    // Get User Info
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;
    const resumes = await Resume.find({ userEmail });
    return JSON.parse(JSON.stringify(resumes));
  } catch (error) {
    throw new Error(error);
  }
};

