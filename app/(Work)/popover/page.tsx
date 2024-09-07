"use client"
import { Button } from "@/components/ui/button"
import HoverBorderGradient from "@/components/ui/Buttons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/Label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <HoverBorderGradient>
          Get started    
            </HoverBorderGradient>  
            {/* <Link href="/client">
                Get Started
            </Link> */}
            </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
            <div>
                <Link href="ClientSide/SignupForm">
                    Launch Gig 
                </Link>
            </div>
            <div>
            <Link href="ClientSide/client">
                Score Gig
            </Link>
            </div>
      </PopoverContent>
    </Popover>
  )
}
