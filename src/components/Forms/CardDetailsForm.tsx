import * as React from "react";
import InputFiled from "../InputFiled";
import Button from "../Button";

interface CardDetailsFormType {
  customerId: string;
  nameOnCard: string;
  cardNumber: string;
  expiryDate: string;
  activationDate: string;
}

interface CardDetailsFormProps {
  formData: CardDetailsFormType;
  setFormData: React.Dispatch<React.SetStateAction<CardDetailsFormType>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CardDetailsForm: React.FC<CardDetailsFormProps> = ({
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
      <div className="flex items-center w-full gap-4">
        <InputFiled
          type="text"
          className="w-1/2"
          value={formData.cardNumber}
          placeholder="Name on Card"
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
          value={formData.activationDate}
          placeholder="Name on Card"
          onChange={(e) => {
            setFormData((current) => ({
              ...current,
              activationDate: e.target.value,
            }));
          }}
        />
      </div>
      <InputFiled
        type="date"
        className="w-1/2"
        value={formData.expiryDate}
        placeholder="Name on Card"
        onChange={(e) => {
          setFormData((current) => ({
            ...current,
            expiryDate: e.target.value,
          }));
        }}
      />
      <div className="flex items-center justify-end w-full">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default CardDetailsForm;
