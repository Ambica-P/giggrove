import { useRouter } from "next/navigation";
export interface IRenderJobs {
    title:string
    done:boolean
    amount:number
    id:number
}
export const Renderjobs = ({ title, done, amount, id }:IRenderJobs) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/Main/task/${id}`);
      };
    return (
        <div onClick={handleClick} className="flex justify-between items-center border-b-2 border-gray-200 py-2 w-full hover:bg-slate-200 focus-visible:">
            <div>
                <h1 className="text-lg text-slate-800">Title: {title}</h1>
                <p className="text-base">{done ? "Done" : "Not Done"}</p>
            </div>
            <div>
                <h1 className="text-sm">Amount Paid: {amount}</h1>
            </div>
        </div>
    )

}