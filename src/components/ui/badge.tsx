import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "small" | "medium" | "large";
}

const Badge: React.FC<BadgeProps> = ({
  className = "",
  children,
  variant = "default",
  size = "medium",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-semibold";

  const variantClasses = {
    default: "bg-gray-100 text-gray-800 border border-gray-300",
    primary: "bg-blue-100 text-blue-800 border border-blue-300",
    secondary: "bg-purple-100 text-purple-800 border border-purple-300",
    success: "bg-green-100 text-green-800 border border-green-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    danger: "bg-red-100 text-red-800 border border-red-300",
  };

  const sizeClasses = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-0.5 text-sm",
    large: "px-3 py-1 text-base",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
