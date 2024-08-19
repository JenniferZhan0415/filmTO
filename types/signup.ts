export type Value = {
  name: string;
  style: "bordered" | "flat" | "faded" | "underlined";
  type: string;
  value: string;
  isInvalid: boolean;
  errorMessage?: string;
};

export interface FormValues {
  name: Value;
  email: Value;
  password: Value;
  confirm: Value;
}

export type Field = keyof FormValues;

export const defaultForm: FormValues = {
  name: {
    name: "Name",
    type: "Text",
    style: "bordered",
    value: "",
    isInvalid: false,
  },
  email: {
    name: "Email",
    type: "Email",
    style: "bordered",
    value: "",
    isInvalid: false,
  },
  password: {
    name: "Password",
    type: "Password",
    style: "flat",
    value: "",
    isInvalid: false,
  },
  confirm: {
    name: "Confirm Password",
    type: "Password",
    style: "faded",
    value: "",
    isInvalid: false,
  },
};
