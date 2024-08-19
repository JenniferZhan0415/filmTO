export type Value = {
  name: string;
  style: "bordered" | "flat" | "faded" | "underlined";
  type: string;
  value: string;
  isInvalid: boolean;
};

export interface FormValues {
  email: Value;
  password: Value;
}

export type Field = keyof FormValues;

export const defaultForm: FormValues = {
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
};
