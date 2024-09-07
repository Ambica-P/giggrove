import { Appbar } from "@/components/AppBar"
import { Appbar1 } from "@/components/AppBar1"
import { Button } from "@/components/ui/button"

const Home = () =>{
    return (
        <div>
            <Appbar></Appbar>
        <div className="text-black pt-10 items-center justify-center min-h-screen">
            <div className="text-2xl flex justify-center">
            Welcome to Gig Grove
        </div>
        <div className="text-lg flex justify-center pt-8">
            Your one stop destination to getting your work done
        </div>
            <div className="flex justify-center flex-col items-center mt-4">
                <h2>Choose Your type of Job</h2>
                <div className="flex gap-3 mt-5">
                <Button>Picture Labelling</Button>
                <Button>Custom Job</Button>
                <Button>Model Performance</Button>
                <Button>Data Cleaning</Button>
                </div>
                
            </div>
        </div>
        </div>
    )
}
export default Home