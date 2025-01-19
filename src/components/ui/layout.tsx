import React from "react";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={`container mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Layout;
