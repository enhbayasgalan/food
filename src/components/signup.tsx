import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "postcss";

export const SignUP = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        {" "}
        <Button className="bg-gray-500">
          <ChevronLeft />
        </Button>
        <p className="text-base font-semibold mt-[20px]">Create your account</p>
        <p className="text-base font-normal text-gray-500">
          Sign up to explore your favorite dishes.
        </p>
        <input
          placeholder="Enter your email address"
          type="email"
          className="bg-gray-200 rounded-md w-[426px] h-[36px]"
        />
        <Button className="h-[36px] py-[32px] justify-center items-center gap-[8px] bg-[#E4E4E7] w-[416px] rounded-md text-white text-base">
          lets go
        </Button>
        <p className="gap-[12px] text-gray-500">Already have an account?</p>
        <p className="text-blue-500">Log in </p>
      </div>
    </div>
  );
};
