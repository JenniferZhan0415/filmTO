"use client";
import { Card, CardBody } from "@nextui-org/react";

import SignUpInput from "./signup-input";
import { title } from "@/components/primitives";
import SignUpButton from "./signup-button";
export default function SignUp() {
  return (
    <section className="w-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 min-w-80 pb-4 px-40"
        shadow="sm"
      >
        <CardBody className="flex items-center justify-center w-full">
          <h1 className={`${title({ color: "blue" })} pb-4`}>
            Create your free account
          </h1>
          <h4 className="text-default-500 mb-6">Join us today!</h4>
          <SignUpInput />
          <SignUpButton />
        </CardBody>
      </Card>
    </section>
  );
}
