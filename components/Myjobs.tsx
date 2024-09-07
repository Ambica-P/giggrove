"use client"
import { Button } from "@/components/ui/button"
import { BACKEND_URL } from "@/utils"
import axios from "axios"
import { useEffect, useState } from "react"
import { Renderjobs ,IRenderJobs} from "./ui/renderjobs";

export const Myjobs = () => {
    const [jobs, setJobs] = useState<IRenderJobs[]>([])
    async function getJobs() {
        const response = await axios.get(`${BACKEND_URL}/v1/user/allTasks`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        console.log(response.data)
        setJobs(response.data)
    }
    return (
        <div>
        <div>
            <h1 className="text-2xl text-center ">All Jobs</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
            <Button onClick={getJobs}>get the tasks</Button>
            <div>
        {jobs.map((job) => (
          <Renderjobs key={job.id} {...job} />
        ))}
      </div>
        </div>
        </div>
    )
}

