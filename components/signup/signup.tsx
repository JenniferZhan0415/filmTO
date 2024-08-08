"use client";

import SignUpInput from "./signup-input";
import { title } from "@/components/primitives";
import SignUpButton from "./signup-button";
export default function SignUp() {
  return (
    <>
      <h1 className={`${title({ color: "blue" })} pb-4`}>
        Create your free account
      </h1>
      <h4 className="text-default-500 mb-6">Join us today!</h4>
      <SignUpInput />
      <SignUpButton />
    </>
  );
}
