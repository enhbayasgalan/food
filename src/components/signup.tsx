import { ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"

export const SignUpEmail = () => {
  return(
    <div className="w-full h-full flex justify-center items-center">
      <Button className="bg-gray-200">
        <ChevronLeft/>
      </Button>
      <p className=""></p>
    </div>
  )
}