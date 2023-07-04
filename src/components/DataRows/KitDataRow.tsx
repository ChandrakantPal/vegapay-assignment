import * as React from "react";
import Image from "next/image";
import Modal from "../Modal";
import CreateNewAccountForm from "../Forms/CreateNewAccountForm";
import { SearchedResultType } from "@/types/user";
import CardNumberChip from "../CardNumberChip";
import Button from "../Button";
import AccountDetails from "../AccountDetails";

const CardLogoMapper: Record<string, string> = {
  RUPAY: "https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg",
  MASTERCARD:
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  VISA: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
};

const KitDataRow: React.FC<{ data: SearchedResultType }> = ({ data }) => {
  const [formData, setFormData] = React.useState({
    programType: "",
    programName: "",
    corporateName: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // create new User
  };

  return (
    <tr className="w-full odd:bg-blue-50">
      <td className="px-6 py-4 max-w-[200px]" align="left">
        {data?.customer?.fullName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        <CardNumberChip cardNumber={data?.card?.cardNumber} />
      </td>
      <td className="px-6 py-4 max-w-[200px]" align="left">
        {data?.customer?.emailId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.customer?.mobileNumber}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.card?.cardNetwork && (
          <Image
            width={60}
            height={60}
            src={CardLogoMapper[data?.card?.cardNetwork]}
            alt={data?.card?.cardNetwork}
          />
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.account ? (
          <Modal
            triggerElement={
              <Button variant="contained" color="primary">
                View
              </Button>
            }
            modalHeader="Account Details"
            content={<AccountDetails account={data?.account} />}
          />
        ) : (
          <Modal
            triggerElement={
              <Button variant="contained" color="primary">
                Create Account
              </Button>
            }
            modalHeader="Create Account"
            content={
              <CreateNewAccountForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
              />
            }
          />
        )}
      </td>
    </tr>
  );
};

export default KitDataRow;
