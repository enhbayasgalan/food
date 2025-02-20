"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
type step = {
  
}
export const SignUp = ({ setStep }) => {
  const [signEmail, setEmail] = useState("");
  const [error, setErrors] = useState<{ Email?: string }>({});
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onContinue = () => (
    

   
      setStep(2)
    
  );

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);

    if (!email) {
      setErrors((prev) => ({
        ...prev,
        Email: "",
      }));
    } else if (!checkEmail.test(email)) {
      setErrors((prev) => ({
        ...prev,
        Email: "",
      }));
    } else {
      setErrors((prev) => ({ ...prev, Email: "" }));
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div><Button className="bg-gray-200">
        {" "}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="#18181B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <p className="text-2xl  font-semibold mt-[20px]">
        Create your account
      </p>
      <p className="text-base  font-normal  text-gray-500 ">
        Sign up to explore your favorite dishes.
      </p>
      <Input
        value={signEmail}
        onChange={onEmailChange}
        placeholder="Enter your email address"
        type="email"
        className=" bg-gray-200 rounded-md mt-[15px] w-[416px] h-[36px]"
      />
      {error.Email && <p className="text-red-500">{error.Email}</p>}
      <Button
        onClick={() =>onContinue()}
        className=" h-[36px] py-[32px] justify-center items-center gap-[8px] bg-[#E4E4E7] mt-[18px] w-[416px] rounded-md text-white text-base"
      >
        Let's Go
      </Button>

      <p className="gap-[10px] text-gray-500 mt-[20px]">
        Already have an account? 
      </p>
      <p className="gap-[10px] text-blue-500 ">
         Log in
      </p>
      </div>
      <div className="w-2/3 p-4 ">
       <img src="home.png"/>
      </div>
    </div>
  );
};
