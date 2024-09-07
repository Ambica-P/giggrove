"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { SidebarDemo } from '@/components/sidebar2';

const OnboardingForm: React.FC = () => {
    
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

    const handleRoleChange = (role: string) => {
        setSelectedRoles(prevSelectedRoles =>
            prevSelectedRoles.includes(role)
                ? prevSelectedRoles.filter(r => r !== role)
                : [...prevSelectedRoles, role]
        );
    };
    const handleFundingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFunding(event.target.value);
    };
    const [funding, setFunding] = useState("$0-1M");
    const roles = ["Software Engineers", "Product Managers", "Designers", "Sales", "Other"];
    const handleSubmit = () => {
        console.log('Form submitted');
    };

    return (
        <div className="flex">
        {/* Sidebar */}
        <SidebarDemo />
  
        <div className=" mt-12 p-6 font-sans text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Let's find your Company</h2>
            <p className="text-sm mb-6 text-gray-600">Nearly 5 million startups already have a Wellfound profile. We'll look for yours, and if you use an applicant tracking system, we'll help find the jobs you've already posted.</p>
            
            <Input type="text" placeholder="Enter Company Name" className="mb-4 w-full p-2 border border-gray-300 rounded-md" />
            
            <div className="roles mb-6">
                <h3 className=" font-serif text-lg font-medium	 text-gray-800">What roles are you hiring for?*</h3>
                {roles.map(role => (
                    <label key={role} className="block text-sm mb-2">
                        <input
                            type="checkbox"
                            value={role}
                            checked={selectedRoles.includes(role)}
                            onChange={() => handleRoleChange(role)}
                            className="mr-2"
                        />
                        {role}
                    </label>
                ))}
            </div>
            
            <div className="funding mb-6">
                <h3 className=" font-serif text-lg font-medium	 text-gray-800">How much funding has your company raised so far?*</h3>
                {["$0-1M", "$1-10M", "$11-50M", "$51M+"].map(amount => (
                    <label key={amount} className="block text-sm mb-2">
                        <input
                            type="radio"
                            name="funding"
                            value={amount}
                            checked={funding === amount}
                            onChange={handleFundingChange}
                            className="mr-2"
                        />
                        {amount}
                    </label>
                ))}
            </div>
            
            <button className="w-[75%] py-2  text-white rounded-md ml-12 bg-logoBlue hover:bg-blue-400" >
                <Link
                    href="createaccClient">
                    Next
                </Link>
            </button>
        </div>
        </div>
    );
};

export default OnboardingForm;
