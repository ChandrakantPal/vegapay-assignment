import * as React from "react";
import { SearchedResultType } from "@/types/user";
import Modal from "../Modal";
import CardNumberChip from "../CardNumberChip";
import Button from "../Button";
import dayjs from "dayjs";
import StatusChip from "../StatusChip";
import CardDetailsForm from "../Forms/CardDetailsForm";

// "Name",
// "Program Name",
// "Customer ID",
// "Card Number",
// "Expiry Date",
// "Activation Date",
// "Status",
// "Details",

const PersonalizedSalesDataRow: React.FC<{ data: SearchedResultType }> = ({
  data,
}) => {
  const [formData, setFormData] = React.useState(() => {
    return data?.card
      ? {
          customerId: data?.card?.accountId ? data?.card?.accountId : "",
          nameOnCard: data?.card?.nameOnCard ? data?.card?.nameOnCard : "",
          cardNumber: data?.card?.cardNumber ? data?.card?.cardNumber : "",
          expiryDate: data?.card?.expiryDate ? data?.card?.expiryDate : "",
          activationDate: "",
        }
      : {
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
      <td className="px-6 py-4 max-w-[180px]" align="left">
        {data?.customer?.fullName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.account?.programName}
      </td>
      <td className="px-6 py-4 max-w-[100px]" align="left">
        {data?.customer?.customerId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        <CardNumberChip cardNumber={data?.card?.cardNumber} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.card?.expiryDate && dayjs(data.card?.expiryDate).format("MM/YY")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.card?.expiryDate &&
          dayjs(data?.card?.expiryDate).format("MM/YY")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.account?.checkerMakerStatus && (
          <StatusChip status={data?.account?.checkerMakerStatus} />
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap" align="left">
        {data?.card && (
          <Modal
            triggerElement={
              <Button variant="contained" color="primary">
                View
              </Button>
            }
            modalHeader="Card Details"
            content={
              <CardDetailsForm
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

export default PersonalizedSalesDataRow;
