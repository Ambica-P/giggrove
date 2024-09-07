import CsvPreview from "@/components/CsvPreview"
import JobList from "@/components/JobsRender"

const main1 = () => {
    return (
        <div>
            <h1 className="text-3xl text-center">Improve You Model</h1>
            <p className="text-center mt-10">Upload Your CSV file contaning the Dataset along with the Model Files</p>
            <JobList></JobList>
        </div>
    )
}
export default main1