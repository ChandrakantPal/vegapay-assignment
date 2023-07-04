import classNames from "classnames";
import React from "react";

const StatusStyleMapping: Record<string, string> = {
  APPROVED: "bg-green-300 text-green-600",
  REJECTED: "bg-red-300 text-red-600",
  PENDING: "bg-yellow-300 text-yellow-600",
};

const StatusChip: React.FC<{ status: string }> = ({ status }) => {
  return (
    <span
      className={classNames(
        "px-2 py-1 rounded capitalize text-xs",
        StatusStyleMapping[status]
      )}
    >
      {status}
    </span>
  );
};

export default StatusChip;
