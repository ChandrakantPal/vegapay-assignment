import * as React from "react";

const CardNumberChip: React.FC<{ cardNumber: string | undefined }> = ({
  cardNumber,
}) => {
  return (
    <span className="px-1 py-0.5 text-xs bg-blue-200 rounded text-blue-950">
      {cardNumber ? cardNumber : "-"}
    </span>
  );
};

export default CardNumberChip;
