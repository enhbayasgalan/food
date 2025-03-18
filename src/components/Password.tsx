import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
type Props = {
  user: User;
};

type User = {
  email: string;
  password: string;
};

export const Password = ({ user }: Props) => {
  const [passworderror, setPasswordError] = useState();
  return (
    <div>
      <Button
        className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center"
      >
        <ChevronLeft />
      </Button>
      <div>
        <p className="font-bold text-2xl mt-[15px]">Create a strong password</p>
        <p className="text-gray-500">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <input
          className="h-9 pl-4 w-full border rounded-md mt-[15px]"
          placeholder="confirm-password"
        />
        {}
      </div>
    </div>
  );
};
