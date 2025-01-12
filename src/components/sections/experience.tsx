import React from "react";

interface ExperienceProps {
  years: string;
  company: string;
  content: string;
  discription: string;
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div>
      <h1>Experience Page</h1>
    </div>
  );
};

export default Experience;
