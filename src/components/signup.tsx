import { ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"


export const SignUpEmail = () => {
  return(
    <div className="w-full h-full flex justify-center items-center flex-col gap-4 ">
      <Button className="bg-gray-200 ">
        <ChevronLeft/>
      </Button>
      <p className="font-medium text-2xl">Create your account</p>
      <p className="font-normal text-base text-gray-400">Sign up to explore your favorite dishes.</p>
      <Input type="email" placeholder="Enter your email address" className="w-[416px] h-[36px]"/>
      <Button className="flex h-[36px] py-[32px] w-[352px] h-[36px] bg-gray-300">
        lets go
      </Button>
      <p className="font-normal text-base text-gray-400 ">Already have an account?</p>
      <p className="font-normal text-base text-[#2563EB]">log in</p>
    </div>
  )
}