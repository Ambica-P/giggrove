"user client"
import { Button } from "@/components/ui/button"
import { BACKEND_URL } from "@/utils"
import axios from "axios"
import { useEffect } from "react"
// import { Myjobs } from "@/components/Myjobs"
import PageTitle from "@/components/ui/PageTitle"
import { Dashboard } from "@/components/ui/Dashboard"



const dashboard = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Your Dashboard"></PageTitle>
            <Dashboard></Dashboard>
        </div>
    )
}
export default dashboard