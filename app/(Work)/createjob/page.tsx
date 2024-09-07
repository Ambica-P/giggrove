"use client"
import { BentoGridThirdDemo } from "@/components/try"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const createjob = () =>{
    const route = useRouter()
    return (
        <div>
            <h1 className="text-3xl text-center">Jobs we offer</h1>
            <div className="flex justify-center flex-col items-center mt-10">
                <h2>Choose Your Task</h2>
                <div className="flex gap-3 mt-5">
                <Button >Picture Labelling</Button>
                <Button onClick={()=>{route.push("/Main")}}>Thumbnail CTR</Button>
                <Button>Custom Job</Button>
                <Button onClick={()=>{route.push("/Main1")}}>Model Performance</Button>
                <Button>Data Cleaning</Button>
                
                </div>
            </div>
            
        </div>
    )
}
export default createjob