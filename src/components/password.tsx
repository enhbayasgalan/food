"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
type props = {
  setStep: (_step: number) => void;
  postUser: Function;
  setUser: (_user: User) => void;
  user: User;
};
type User = {
  email: string;
  password: string;
};
const Password = ({ setStep, postUser, setUser, user }: props) => {
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [PasswordError, SetErrorPassword] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);
  const Login = () => {
    const kod =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (user.password.length !== 0) {
      if (user.password === confirmPassword) {
        postUser();
      } else {
        SetErrorPassword("wrong");
      }
    } else {
      SetErrorPassword("Wrong password");
    }
  };

  return (
    <>
      {" "}
      <button
        onClick={() => setStep(1)} 
        className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center"
      >
        <ChevronLeft />
      </button>
      <div>
        <p className="font-bold text-2xl">Create a strong password</p>
        <p className="text-[#71717A]">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <input
          type={showPassword == true ? "text" : "password"}
          className="h-9 pl-4 w-[416px] border rounded-md"
          placeholder="new-password"
          onChange={(el) => setUser({ ...user, password: el.target.value })}
          value={user.password}
          style={{
            borderColor: PasswordError === "wrong" ? "red" : "#71717A",
          }}
        />
        <div className="flex flex-col">
          <input
            type={showPassword == true ? "text" : "password"}
            placeholder="confirm-password"
            className="h-9 pl-4 w-[416px] border rounded-md"
            onChange={(el) => setConfirmPassword(el.target.value.toString())}
            value={confirmPassword}
            style={{
              borderColor: PasswordError === "!match" ? "red" : "#71717A",
            }}
          />
          {PasswordError && (
            <label className="text-red-600 text-sm mt-2">
              {PasswordError == "wrong" &&
                "Wrong password. Use numbers and symbols"}
              {PasswordError == "Wrong password" &&
                "Those password match, Try again"}
            </label>
          )}
        </div>
        <div className="flex gap-2">
          <input type="checkbox" onClick={() => setShowPassword((prev) => !prev)} />
          <p>Show password</p>
        </div>
      </form>
      <button
        onClick={Login}
        className="py-[4px] w-[416px] border rounded-md"
      >
        let's go
      </button>
    </>
  );
};
export default Password;