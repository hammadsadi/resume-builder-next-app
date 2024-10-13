import mongoose, { Schema } from "mongoose";

//  Experience
const experienceSchema = new Schema({
  title: String,
  company: String,
  address: String,
  startDate: String,
  endDate: String,
  summery: String,
});

// Education
const educationSchema = new Schema({
  name: String,
  address: String,
  qualification: String,
  year: String,
});

// Skills
const skillsSchema = new Schema({
  name: String,
  label: String,
});

// Resume Data
const resumeSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    title: String,
    name: String,
    job: String,
    address: String,
    themeColors: String,
    summery: String,
    experience: [experienceSchema],
    education: [educationSchema],
    skills: [skillsSchema],
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.models.Resume || module("Resume", resumeSchema);
export default Resume;