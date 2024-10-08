"use client";
import { BACKEND_URL, CLOUDFRONT_URL } from "@/utils";
import axios from "axios";
import { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

export function UploadImage({ onImageAdded, onImageRemoved, image }: {
    onImageAdded: (image: string) => void;
    onImageRemoved: () => void;
    image?: string;
}) {
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    function removeImage() {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        onImageRemoved();
    }

    async function onFileSelect(e: any) {
        setUploading(true);
        try {
            const file = e.target.files[0];
            const response = await axios.get(`${BACKEND_URL}/v1/user/presignedUrl`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
            const presignedUrl = response.data.preSignedUrl;
            const formData = new FormData();
            formData.set("bucket", response.data.fields["bucket"]);
            formData.set("X-Amz-Algorithm", response.data.fields["X-Amz-Algorithm"]);
            formData.set("X-Amz-Credential", response.data.fields["X-Amz-Credential"]);
            formData.set("X-Amz-Date", response.data.fields["X-Amz-Date"]);
            formData.set("key", response.data.fields["key"]);
            formData.set("Policy", response.data.fields["Policy"]);
            formData.set("X-Amz-Signature", response.data.fields["X-Amz-Signature"]);
            formData.set("Content-Type", "image/png");
            formData.append("file", file);
            const awsResponse = await axios.post(presignedUrl, formData);
            onImageAdded(`${CLOUDFRONT_URL}/${response.data.fields["key"]}`);
        } catch (e) {
            console.log(e);
        }
        setUploading(false);
    }

    if (image) {
        return (
            <div className="relative rounded-md bg-slate-300 ml-3 w-[100px] h-[100px]">
                <button 
                    onClick={removeImage} 
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 flex items-center justify-center">
                    <FaTimes />
                </button>
                <img className="p-2 w-full h-full rounded" src={image} />
            </div>
        );
    }

    return (
        <div className="flex flex-row">
            <div className="w-40 h-40 rounded border text-2xl cursor-pointer">
                <div className="h-full flex justify-center flex-col relative w-full">
                    <div className="h-full flex justify-center w-full pt-16 text-4xl">
                        {uploading ? <div className="text-sm">Loading...</div> : <>
                            +
                            <input
                                ref={fileInputRef}
                                className="bg-red-400 w-40 h-40"
                                type="file"
                                style={{ position: "absolute", opacity: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
                                onChange={onFileSelect}
                            />
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
}
