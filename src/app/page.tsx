"use client";

import { SignUpEmail } from "@/components/signup";

export default function Home() {
  return (
    <div className="w-screen flex h-screen items-center">
      <SignUpEmail/>
      <img src="home.png" width={856} height={904} alt="home" />
    </div>
  );
}