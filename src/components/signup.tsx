import { Axe, ChevronLeft, StepBack } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"
import { Email } from "./Email"
import { userAgent } from "next/server"
import { Password } from "./Password"
type User = {
  email : string,
  password : string
}

export const SignUpEmail = () => {
  const [newUser, setNewUser] = useState<User>({email: "", password: ""})
  const [step, setStep] = useState<number>(1);
  return(
    <div className="w-full h-full flex justify-center items-center flex-col gap-4 ">
      <Email user={newUser} setNewUser={setNewUser} setStep={setStep}/>
      <Password user={newUser}/>
      <p className="font-normal text-base text-gray-400 ">Already have an account?</p>
      <p className="font-normal text-base text-[#2563EB]">log in</p>
    </div>
  )
}