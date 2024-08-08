"use client";

import LoginInput from "./login-input";
import { title } from "@/components/primitives";
import LoginButton from "./login-button";
export default function Login() {
  return (
    <>
      <h1 className={`${title({ color: "blue" })} pb-4`}>Welcome back!</h1>
      <h4 className="text-default-500 mb-6">Login to your account</h4>
      <LoginInput />
      <LoginButton />
    </>
  );
}
