"use client"
type Client = {
    id: string;
    username: string;
};

type Worker = {
    id: string;
    username: string;
};

type Bid = {
    id: string;
    bidAmount: number;
    status: string;
    presentationUrl: string;
    worker: Worker;
};

type Job = {
    id: string;
    title: string;
    description: string;
    fileHashes: string[];
    client: Client;
    bids: Bid[];
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';

const JobsRender: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]); // Set the state type to Job[]

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get<Job[]>('http://localhost:8001/v2/worker/alljobs',
                    {
                        headers: {
                            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjdmYzVlNjA4MDYzYWMxMDI2YjNmMWIiLCJpYXQiOjE3MTk2NDk3NjZ9.PTTCPY6eXpbSVb9o8k_AHAlxWN7dEANk3KNGc2eeEk0`
                        }
                    }
                ); // Specify the expected response type
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const fetchFileUrl = (hash: string) => {
        return `http://localhost:8080/ipfs/${hash}`;
    };

    return (
        <div>
            {jobs.map(job => (
                <div key={job.id} className='p-3 bg-slate-300 my-5'>
                    <h2>Tittle : {job.title}</h2>
                    <p>Description: {job.description}</p>
                    <p>Client: {job.client.username}</p>
                    <div>
                        <h3>Files:</h3>
                        {job.fileHashes.map(hash => (
                            <div key={hash}>
                                <Button href={fetchFileUrl(hash)} download>
                                    Download
                                </Button>
                                <img src={fetchFileUrl(hash)} alt="Job File" style={{ maxWidth: '200px' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3>Bids:</h3>
                        {job.bids.map(bid => (
                            <div key={bid.id}>
                                <p>Amount: {bid.bidAmount}</p>
                                <p>Status: {bid.status}</p>
                                <p>Worker: {bid.worker.username}</p>
                                <a href={bid.presentationUrl} target="_blank" rel="noopener noreferrer">
                                    View Presentation
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobsRender;