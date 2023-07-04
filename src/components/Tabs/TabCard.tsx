import React, { ReactElement } from "react";

export interface TabCardProps {
  id: string;
  title: string;
  icon: ReactElement;
  active: boolean;
  onClick: (id: string) => void;
}

const TabCard: React.FC<TabCardProps> = ({
  icon,
  title,
  id,
  active,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center gap-2 p-4 border justify-center md:justify-start cursor-pointer rounded-xl ${
        active ? "bg-gray-300" : "bg-transparent"
      }`}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="flex items-center justify-center w-12 text-white rounded-full aspect-square bg-blue-950">
        {icon}
      </div>
      <div className="hidden md:block">{title}</div>
    </div>
  );
};

export default TabCard;
