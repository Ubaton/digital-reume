import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`card border-t border-b border-zinc-500 p-4 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
