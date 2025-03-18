"use client";

import { Login } from "@/components/login";




export default function Home() {
  return (
    <div className="w-screen flex h-screen items-center">
        <Login />
      <img src="home.png" width={856} height={904} alt="home" />
    </div>
  );
}