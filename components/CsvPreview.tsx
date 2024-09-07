"use client"
import { ChangeEvent, useState } from "react";

const CsvPreview = () =>{
    const [preview, setPreview] = useState('');
    
    const handleFileUpload = async (event:ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://127.0.0.1:5001/preview', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to fetch preview data');
            }

            const data = await response.json();
            setPreview(data.preview_html);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
       <div className="flex items-center justify-center ">

        <div className="bg-slate-200 p-4 w-[800px] flex items-center justify-center flex-col rounded-lg">
            <h1 className="text-lg font-semibold text-center">Upload CSV File</h1>
           
            <input type="file" onChange={handleFileUpload} accept=".csv"  className="ml-10 mt-5 "/>
            <div className="flex items-center justify-center p-3">
            {preview && (
                <div dangerouslySetInnerHTML={{ __html: preview }} />
            )}
            </div>
        </div>
        </div>
    )
}
export default CsvPreview