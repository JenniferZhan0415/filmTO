"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

import { NewUserIcon } from "@/components/icons";
import { FormValues, Field, Value } from "@/types/login";
import { EmailIcon } from "@/components/icons";
import { LockIcon } from "@/components/icons";

const icons = {
  email: <EmailIcon />,
  password: <LockIcon />,
};

type LoginProps = {
  handleInputChange: (name: keyof FormValues, value: string) => void;
  values: FormValues;
};

const LoginInput: React.FC<LoginProps> = ({ handleInputChange, values }) => {
  const fields = Object.entries(values) as [Field, Value][];

  return (
    <div className="w-full flex flex-col items-center justify-end pr-4 border-none  sm:border-r-1 sm:border-solid sm:border-lightgray-500">
      <NewUserIcon height={15} width={15} />
      <h4 className="text-default-500 mt-2 text-center">
        Don&apos;t have an account yet?
      </h4>
      <Link className="mb-4 cursor-pointer" href="/signup" underline="hover">
        Click here to sign up!
      </Link>
      {fields.map(([name, value]: [Field, Value]) => (
        <div key={name} className="flex w-full flex-wrap md:flex-nowrap mb-2">
          <Input
            isRequired
            endContent={icons[name]}
            isInvalid={value.isInvalid}
            errorMessage={
              value.errorMessage || `Please enter a valid ${value.type}`
            }
            label={value.name}
            type={value.name}
            value={value.value}
            variant={value.style}
            onValueChange={(newVal) => handleInputChange(name, newVal)}
          />
        </div>
      ))}
    </div>
  );
};

export default LoginInput;
