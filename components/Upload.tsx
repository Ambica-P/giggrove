"use client";
import { UploadImage } from "@/components/UploadImage";
import { BACKEND_URL } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

export const Upload = () => {
    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [txSignature, setTxSignature] = useState("");
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const storedPublicKey = localStorage.getItem("publicKey")?.toString() || "";
    const router = useRouter();

    async function onSubmit() {
        const response = await axios.post(`${BACKEND_URL}/v1/user/task`, {
            options: images.map(image => ({
                imageUrl: image,
            })),
            title,
            signature: txSignature
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        router.push(`/Main/task/${response.data.id}`);
    }

    async function makePayment() {
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: new PublicKey(storedPublicKey),
                toPubkey: new PublicKey("9ycDkNVQJj9z2uVAar1cJhL7RPJhvkacPvHaGidA655e"),
                lamports: 100000000
            })
        );

        const { context: { slot: minContextSlot }, value: { blockhash, lastValidBlockHeight } } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, { minContextSlot });
        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
        setTxSignature(signature);
    }

    return (
        <div className="flex justify-center ml-20">
            <div className="max-w-screen-lg w-full">
                <div className="text-2xl text-left pt-20 w-full pl-4">
                    Upload Your Thumbnail
                </div>

                <label className="pl-4 block mt-2 text-md font-medium text-black">Describe Your Thumbnail here</label>

                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="ml-4 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="What is your thumbnail about?"
                    required
                />

                <label className="pl-4 block mt-8 text-md font-medium text-black">Add Images</label>

                <div className="flex flex-wrap pt-4 max-w-screen-lg">
                    {images.map((image, index) => (
                        <UploadImage
                            key={index}
                            image={image}
                            onImageAdded={(imageUrl) => setImages(i => [...i, imageUrl])}
                            onImageRemoved={() => setImages(i => i.filter((_, idx) => idx !== index))}
                        />
                    ))}
                </div>

                <div className="ml-4 pt-2 flex justify-center">
                    <UploadImage onImageAdded={(imageUrl) => setImages(i => [...i, imageUrl])} onImageRemoved={() => {}} />
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={txSignature ? onSubmit : makePayment}
                        type="button"
                        className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        {txSignature ? "Submit Task" : "Pay 0.1 Sol"}
                    </button>
                </div>
            </div>
        </div>
    );
}
