import { SignUp } from '@clerk/nextjs'
import React from "react"
export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}