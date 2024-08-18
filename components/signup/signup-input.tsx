"use client";
import React from "react";
import { Input } from "@nextui-org/react";

import { Value, FormValues, Field } from "@/types/signup";

type SignUpProps = {
  handleInputChange: (name: keyof FormValues, value: string) => void;
  values: FormValues;
};

const SignUpInput: React.FC<SignUpProps> = ({ handleInputChange, values }) => {
  const fields = Object.entries(values) as [Field, Value][];

  return (
    <div className="w-full flex flex-col">
      {fields.map(([name, value]: [Field, Value]) => (
        <div
          key={name}
          className="flex w-full flex-wrap md:flex-nowrap mb-4 gap-1"
        >
          <Input
            isRequired
            isInvalid={value.isInvalid}
            label={value.name}
            type={value.type}
            value={value.value}
            variant={value.style}
            onValueChange={(newVal) => handleInputChange(name, newVal)}
          />
        </div>
      ))}
    </div>
  );
};

export default SignUpInput;
