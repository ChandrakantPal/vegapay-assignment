import * as React from "react";
import Dropdown, { Option } from "../Dropdown";
import Button from "../Button";

const ProgramTypeOptions: Option[] = [
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "CORPORATE",
    value: "corporate",
  },
  {
    label: "NONE",
    value: "none",
  },
];

const ProgramNameOptions: Option[] = [
  {
    label: "Cooperate Program",
    value: "cooperate",
  },
  {
    label: "Small Program",
    value: "small",
  },
];

const CorporateNameOptions: Option[] = [
  {
    label: "Corporate 1",
    value: "corporate1",
  },
  {
    label: "Corporate 2",
    value: "corporate2",
  },
];

interface CreateNewAccountFormType {
  programType: string;
  programName: string;
  corporateName: string;
}

interface CreateNewAccountFormProps {
  formData: CreateNewAccountFormType;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewAccountFormType>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CreateNewAccountForm: React.FC<CreateNewAccountFormProps> = ({
  formData,
  setFormData,
  onSubmit,
}) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <Dropdown
        options={ProgramTypeOptions}
        value={formData.programType}
        label="Program Type"
        onChange={(value) => {
          setFormData((currentState) => ({
            ...currentState,
            programType: value,
          }));
        }}
      />
      <Dropdown
        options={ProgramNameOptions}
        value={formData.programName}
        label="Program Name"
        onChange={(value) => {
          setFormData((currentState) => ({
            ...currentState,
            programName: value,
          }));
        }}
      />
      {formData.programType === "corporate" && (
        <Dropdown
          options={CorporateNameOptions}
          value={formData.corporateName}
          label="Corporate Name"
          onChange={(value) => {
            setFormData((currentState) => ({
              ...currentState,
              corporateName: value,
            }));
          }}
        />
      )}
      <div className="flex items-center justify-end w-full">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default CreateNewAccountForm;
