"use client";
import { Card, CardBody } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { debounce, identity } from "lodash";
import { useRouter } from "next/navigation";

import SignUpInput from "./signup-input";
import SignUpButton from "./signup-button";

import { Field, FormValues, defaultForm } from "@/types/signup";
import { title } from "@/components/primitives";
import { validateEmail } from "@/lib/auth";
import { signup } from "@/actions/user";

export default function SignUp() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(defaultForm);

  /**
   * Handler for changes on the form input.
   */
  const handleInputChange = (name: Field, value: string) => {
    const newValues = {
      ...values,
      [name]: { ...values[name], isInvalid: false, value: value },
    };

    setValues(newValues);
    checkInput(name, value, newValues);
  };

  /**
   * Check input validities.
   */
  const checkInput = useCallback(
    debounce((name: Field, value: string, newValues: FormValues) => {
      const invalid = [
        name === "email" && !validateEmail(value),
        name === "confirm" && value !== newValues.password.value,
      ].some(identity);

      setValues({
        ...newValues,
        [name]: { ...newValues[name], isInvalid: invalid, value: value },
      });
    }, 700),
    [],
  );

  const signupHandler = async () => {
    await signup(values.name.value, values.email.value, values.password.value);
    router.push("/login");
  };

  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 min-w-80 pb-4 px-40"
        shadow="sm"
      >
        <CardBody>
          <form
            className="flex flex-col items-center justify-center w-full"
            onSubmit={signupHandler}
          >
            <h1 className={`${title({ color: "blue" })} pb-4`}>
              Create your free account
            </h1>
            <h4 className="text-default-500 mb-6">Join us today!</h4>
            <SignUpInput
              handleInputChange={handleInputChange}
              values={values}
            />
            <SignUpButton />
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
