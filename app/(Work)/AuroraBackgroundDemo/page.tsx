"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";

import { PopoverDemo } from "../popover/page";

export function AuroraBackgroundDemo() {
  // const route = useRouter();  
  return (
      <AuroraBackground>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4">
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Got skills but no work
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Don't worry we got you!
          </div>
          <PopoverDemo />
        </div>
      </AuroraBackground>
    );
  }
  