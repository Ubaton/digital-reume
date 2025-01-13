import React from "react";

interface ExperienceProps {
  years: number;
  company: string;
  content: string;
  description: string;
}

// Define the required props for the Experience component
const experienceProps = {
  years: 5,
  company: "Example Company",
  content: "Worked on various projects.",
  description: "A brief description of my experience.",
};

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Experience Page</h1>
      {...experienceProps}
    </div>
  );
};

export default Experience;
