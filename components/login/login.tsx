"use client";
import { Card, CardBody } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { debounce, identity } from "lodash";

import Loading from "../loading";

import LoginGoogleGithub from "./login-google-github";
import LoginButton from "./login-button";
import LoginInput from "./login-input";

import { title } from "@/components/primitives";
import { validateEmail } from "@/lib/auth";
import { Field, FormValues, defaultForm } from "@/types/login";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(defaultForm);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

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
      const invalid = [name === "email" && !validateEmail(value)].some(
        identity,
      );

      setValues({
        ...newValues,
        [name]: { ...newValues[name], isInvalid: invalid, value: value },
      });
    }, 700),
    [],
  );

  if (status === "loading") {
    return <Loading label="Authenticating..." />;
  }

  const signinHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: false,
      email: values.email.value,
      password: values.password.value,
    });
    router.push("/dashboard");
  };

  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 min-w-80 pb-4 px-4"
        shadow="sm"
      >
        <CardBody>
          <form
            className="flex flex-col items-center justify-center w-full"
            onSubmit={signinHandler}
          >
            <h1 className={`${title({ color: "blue" })} pb-4`}>
              Welcome back!
            </h1>
            <h4 className="text-default-500 mb-6">Login to your account</h4>
            <div className="flex flex-col sm:flex-row w-full gap-4 mb-4 border-none sm:border-b-1 sm:border-solid sm:border-lightgray-500">
              <LoginInput
                handleInputChange={handleInputChange}
                values={values}
              />
              <LoginGoogleGithub />
            </div>
            <LoginButton />
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
