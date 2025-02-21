"use client";


import { SignUP } from "@/components/signup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <SignUP/>
      <Image src="/home.png" width={856} height={904} alt="home"/>
    </div>
  );
}
