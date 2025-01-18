import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`card border border-zinc-500 p-4 rounded-3xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
