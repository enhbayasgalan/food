"use client";

import SignUP from "@/components/signup";

export default function Home() {
  return (
    <div className="w-screen flex h-screen items-center">
      <SignUP/>
      <img src="home.png" width={856} height={904} alt="home" />
    </div>
  );
}