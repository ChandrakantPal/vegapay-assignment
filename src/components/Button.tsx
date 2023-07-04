import * as React from "react";
import classNames from "classnames";

const ButtonStylesMap = {
  "contained-primary": "bg-blue-500 text-white",
  "outlined-primary": "border border-blue-500 text-blue-500",
  "contained-warning": "bg-red-500 text-white",
  "outlined-warning": "border border-red-500 text-red-500",
};

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "outlined" | "contained";
  color?: "primary" | "warning";
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  variant = "contained",
  color = "primary",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "px-2 py-1 rounded-md",
        ButtonStylesMap[`${variant}-${color}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
