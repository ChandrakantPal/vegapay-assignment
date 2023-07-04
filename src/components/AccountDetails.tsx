import { Account } from "@/types/user";
import * as React from "react";

const AccountDetails: React.FC<{ account: Account }> = ({ account }) => {
  const renderField = (
    label: string,
    value: string | number | null | undefined
  ) => {
    if (value === undefined || value === null) return null;

    return (
      <div>
        <p className="text-gray-600">{label}:</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {renderField("Program Name", account?.programName)}
        {renderField("Branch Name", account?.branchName)}
        {renderField("Status", account?.status)}
        {renderField("Account Limit", account?.accountLimit)}
        {renderField("Checker Maker Status", account?.checkerMakerStatus)}
      </div>
    </div>
  );
};

export default AccountDetails;
