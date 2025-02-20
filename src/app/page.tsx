"use client"
import { SignupPassword } from "@/components/SignuoPassword";
import { SignUp } from "@/components/signup";
import { useState } from "react";


export default function Home() {
  const[step, setStep] = useState<number>(1)
  return (
    <div className=" w-screen h-screen">
     
      { step === 1 ? <SignUp setStep={setStep}/>: <> </>}  
      { step === 2 ? <SignupPassword/>: <> </>}  

      
    </div>
  );
}
