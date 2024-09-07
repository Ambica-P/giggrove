"user client"
import { Button } from "@/components/ui/button"
import { BACKEND_URL } from "@/utils"
import axios from "axios"
import { useEffect } from "react"
// import { Myjobs } from "@/components/Myjobs"
import PageTitle from "@/components/ui/PageTitle"
import { Dashboard3 } from "@/components/ui/Dashboard3"



const myjobs = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Your Jobs"></PageTitle>
            <Dashboard3></Dashboard3>
        </div>
    )
}
export default myjobs