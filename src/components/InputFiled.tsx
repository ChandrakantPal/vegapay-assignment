import classNames from "classnames";
import React from "react";

const InputFiled: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className, ...props }) => {
  return (
    <input
      className={classNames(
        "border border-gray-300 outline-none rounded placeholder:text-gray-500 px-3 py-1.5 read-only:text-gray-300",
        className
      )}
      {...props}
    />
  );
};

export default InputFiled;
