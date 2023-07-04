import * as React from "react";
import InputFiled from "../InputFiled";
import Button from "../Button";

interface ReissueFormType {
  customerId: string;
  nameOnCard: string;
  oldCardNumber: string;
  kitNumber: string;
  cardNumber: string;
  expiryDate: string;
  activationDate: string;
  reasonForReissue: string;
}

interface ReissueFormProps {
  formData: ReissueFormType;
  setFormData: React.Dispatch<React.SetStateAction<ReissueFormType>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ReissueForm: React.FC<ReissueFormProps> = ({
  formData,
  setFormData,
  onSubmit,
}) => {
  return (
    <form className="flex flex-col items-start space-y-4" onSubmit={onSubmit}>
      <InputFiled
        type="text"
        className="w-full"
        value={formData.customerId}
        readOnly
      />
      <InputFiled
        type="text"
        className="w-full"
        value={formData.nameOnCard}
        placeholder="Name on Card"
        onChange={(e) => {
          setFormData((current) => ({
            ...current,
            nameOnCard: e.target.value,
          }));
        }}
      />
      <InputFiled
        type="text"
        className="w-full"
        value={formData.oldCardNumber}
        placeholder="Old Card Number"
        onChange={(e) => {
          setFormData((current) => ({
            ...current,
            oldCardNumber: e.target.value,
          }));
        }}
      />
      <InputFiled
        type="text"
        className="w-full"
        value={formData.kitNumber}
        placeholder="Kit Number"
        onChange={(e) => {
          setFormData((current) => ({
            ...current,
            kitNumber: e.target.value,
          }));
        }}
      />
      <div className="flex items-center w-full gap-4">
        <InputFiled
          type="text"
          className="w-1/2"
          value={formData.cardNumber}
          placeholder="Card Number"
          onChange={(e) => {
            setFormData((current) => ({
              ...current,
              cardNumber: e.target.value,
            }));
          }}
        />
        <InputFiled
          type="date"
          className="w-1/2"
          value={formData.expiryDate}
          placeholder="Expiry Date"
          onChange={(e) => {
            setFormData((current) => ({
              ...current,
              expiryDate: e.target.value,
            }));
          }}
        />
      </div>
      <InputFiled
        type="date"
        className="w-1/2"
        value={formData.activationDate}
        placeholder="Activation Date"
        onChange={(e) => {
          setFormData((current) => ({
            ...current,
            activationDate: e.target.value,
          }));
        }}
      />
      <div className="flex items-center justify-end w-full">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default ReissueForm;
