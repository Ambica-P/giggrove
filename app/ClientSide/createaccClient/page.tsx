"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Select from "react-select";

// List of predefined markets (100+)
const marketsOptions = [
    { value: "Mobile", label: "Mobile" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Fintech", label: "Fintech" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Education", label: "Education" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Logistics", label: "Logistics" },
    // Add more markets here up to 100+
    ...Array.from({ length: 90 }, (_, index) => ({
      value: `Market ${index + 11}`,
      label: `Market ${index + 11}`,
    })),
  ];

const OnboardingForm: React.FC = () => {
    
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [selectedMarkets, setSelectedMarkets] = useState<any>([]);

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

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
            console.log(event.target.files[0]); // For testing the file upload
        }
    };
    const handleMarketsChange = (selectedOptions: any) => {
        setSelectedMarkets(selectedOptions);
      };
    const [funding, setFunding] = useState("$0-1M");
    const roles = ["Software Engineers", "Product Managers", "Designers", "Sales", "Other"];
    const handleSubmit = () => {
        console.log('Form submitted');
    };

    return (
        <div className="max-w-lg mx-auto mt-12 p-6 ">
            <h2 className="text-2xl font-semibold mb-4">Let's create your Account</h2>
            <h3 className=" font-serif text-lg font-medium	 text-gray-800">About Your Company </h3>
            <h6 className="text-sm mb-6 text-gray-600">You can always update this later when required</h6>
            {/* Company Name */}
            <div className="mb-4">
                <label htmlFor="companyName" className=" font-serif text-lg font-medium text-gray-800">
                    Company Name*
                </label>
                <input
                    type="text"
                    id="companyName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter Company Name"
                    required
                />
            </div>

            {/* Logo Upload */}
            <div className="mb-4">
                <label className="font-serif text-lg font-medium text-gray-800">Logo*</label>
                <div className="mt-1 flex items-center justify-center border-2 border-gray-300 rounded-md p-4">
                    <label
                        htmlFor="logoUpload"
                        className="cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <span>Upload Logo</span>
                            <span className="text-xs text-gray-500">or drag it in</span>
                        </div>
                        <input
                            id="logoUpload"
                            type="file"
                            className="sr-only"
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </label>
                </div>
                {image && (
                    <div className="mt-4">
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Logo Preview"
                            className="h-20 w-20 object-cover rounded-md"
                        />
                    </div>
                )}
            </div>

            {/* Work Email */}
            <div className="mb-4">
                <label htmlFor="workEmail" className="font-serif font-medium text-lg  text-gray-800">
                    Work Email*
                </label>
                <input
                    type="email"
                    id="workEmail"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Work email should match company domain"
                    required
                />
            </div>

            {/* Website */}
            <div className="mb-4">
                <label htmlFor="website" className="font-serif text-lg font-medium text-gray-800">
                    Website*
                </label>
                <input
                    type="url"
                    id="website"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter website URL"
                    required
                />
            </div>

            {/* Location */}
            <div className="mb-6">
                <label htmlFor="location" className="font-serif text-lg font-medium text-gray-800">
                    Location*
                </label>
                <input
                    type="text"
                    id="location"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter company location"
                    required
                />
            </div>

        {/* Markets (multi-select with search) */}
        <div className="mb-4">
          <label htmlFor="markets" className="block text-sm font-medium text-gray-700">
            Markets*
          </label>
          <Select
            id="markets"
            isMulti
            options={marketsOptions}
            value={selectedMarkets}
            onChange={handleMarketsChange}
            placeholder="Select markets..."
            className="mt-1"
          />
        </div>
    
        {/* Number of Employees */}
        <div className="mb-4">
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700">
            Number of Employees*
          </label>
          <select
            id="employees"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">-</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        {/* One-line Pitch */}
        <div className="mb-4">
          <label htmlFor="pitch" className="block text-sm font-medium text-gray-700">
            One-line pitch*
          </label>
          <input
            type="text"
            id="pitch"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g. A platform for startups"
            maxLength={100}
            required
          />
        </div>
            {/* Submit Button */}
            <div className="flex justify-between">
                <button
                    type="button"
                    className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300"
                >
                    <Link href="OnboardingForm">
                    Back
                    </Link>
                </button>
                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                    <Link
                    href="InviteTeam">
                    Next
                    </Link>
                </button>
            </div>
            </div>
                );
            };

export default OnboardingForm;
