import { SearchedResultType } from "@/types/user";
import * as React from "react";
import Modal from "../Modal";
import CardNumberChip from "../CardNumberChip";
import Button from "../Button";
import StatusChip from "../StatusChip";
import ReissueForm from "../Forms/ReissueForm";

const ReissueDataRow: React.FC<{ data: SearchedResultType }> = ({ data }) => {
  const [formData, setFormData] = React.useState(() => {
    return data?.card
      ? {
          oldCardNumber: data?.card?.lastFourDigits
            ? data?.card?.lastFourDigits
            : "",
          kitNumber: data?.card?.vendorId ? data?.card?.vendorId : "",
          reasonForReissue: data?.card?.reasonForReplacement
            ? data?.card?.reasonForReplacement
            : "",
          customerId: data?.card?.accountId ? data?.card?.accountId : "",
          nameOnCard: data?.card?.nameOnCard ? data?.card?.nameOnCard : "",
          cardNumber: data?.card?.cardNumber ? data?.card?.cardNumber : "",
          expiryDate: data?.card?.expiryDate ? data?.card?.expiryDate : "",
          activationDate: "",
        }
      : {
          oldCardNumber: "",
          kitNumber: "",
          reasonForReissue: "",
          customerId: "",
          nameOnCard: "",
          cardNumber: "",
          expiryDate: "",
          activationDate: "",
        };
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // create new User
  };
  return (
    <tr className="w-full odd:bg-blue-50">
      <td className="px-6 py-4 max-w-[100px]" align="left">
        {data?.card?.vendorId}
      </td>
      <td className="px-6 py-4 max-w-[180px]" align="left">
        {data?.customer?.fullName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.account?.programName}
      </td>
      <td className="px-6 py-4 max-w-[100px]p" align="left">
        {data?.account?.customerId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        <CardNumberChip cardNumber={data?.card?.cardNumber} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.card?.expiryDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.card?.expiryDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.account?.checkerMakerStatus && (
          <StatusChip status={data?.account?.checkerMakerStatus} />
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        <Modal
          triggerElement={
            <Button variant="contained" color="primary">
              Issue Now
            </Button>
          }
          modalHeader="Wallet Details"
          content={
            <ReissueForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          }
        />
      </td>
    </tr>
  );
};

export default ReissueDataRow;
