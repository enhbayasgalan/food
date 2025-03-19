import { ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
export const Login = () => {
    return(
        <div className="w[416px] flex items-center justify-center">
            <div className="w-[80%] flex flex-col h-fit gap-6">
                <Button className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center">
                    <ChevronLeft/>
                </Button>
                <div>
                    <p className="font-bold text-2xl">Log in</p>
                    <p className="text-gray-500">
                        log in enjoy your favorite dishes
                    </p>
                </div>
                <form className="flex felx-col gap-4">
                    <div className="text-gray-500"></div>
                </form>
            </div>
        </div>
    )
}