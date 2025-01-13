import React from "react";

interface ExperienceProps {
  years: number;
  company: string;
  content: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Experience Page</h1>
    </div>
  );
};

export default Experience;
