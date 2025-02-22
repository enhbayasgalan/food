"use client";

import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
type props = {
  setStep: (_step: number) => void
  setUser :(_user:User) => void,
  user:User
};
type User = {
  email:string,
  password: string
}

export const Email = ({ setStep, setUser, user }: props) => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [isEmail, setEmail] = useState(false);

  const EmailGmail = () => {
    const kod = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (kod.test(user.email)) {
      setStep(2);
    } else {
      setEmail(true);
    }
  };
  const handleInput = (el: React.ChangeEvent<HTMLInputElement>) => {
    const value = el.target.value;
    // setEmailValue(value);
    setEmail(false);
    setUser({...user ,email:value})
  };
  
  useEffect(() => {
  

    const UsersBackend = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users`);
        const results = await response.json();
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    UsersBackend();
  });

  return (
    <>
      <button className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center">
        <ChevronLeft />
      </button>
      <div>
        <p className="font-bold text-2xl">Create your account</p>
        <p className="text-black-400">
          Sign up to explore your favorite dishes
        </p>
      </div>
      <div className="h-fit w-full flex flex-col gap-2">
        <input
          className="h-[36px] pl-4 w-[416px] border rounded-md"
          placeholder="Enter your email address"
          onChange={(el) => handleInput(el)}
          value={user.email}
          style={{ borderColor: isEmail === true ? "red" : "#6262a6" }}
        />
        {isEmail=== true && (
          <label className="text-red-600 text-sm">
            Invalid email. Use a format like example@email.com
          </label>
        )}
      </div>
      <Button
        onClick={EmailGmail}
        className="py-4 w-[416px] border rounded-md bg-gray-200"
      >
        let's go
      </Button>
    </>
  );
};
