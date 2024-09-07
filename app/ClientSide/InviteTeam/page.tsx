"use client"
import { SidebarDemo } from '@/components/sidebar2';
import Link from 'next/link';
import React, { useState } from 'react';

const InviteTeamMembers: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<string[]>(['']);
  
  // Handle changes in input fields
  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index] = event.target.value;
    setTeamMembers(newTeamMembers);
  };

  // Add a new input field for team members
  const addTeamMember = () => {
    setTeamMembers([...teamMembers, '']);
  };

  // Remove a team member input field
  const removeTeamMember = (index: number) => {
    const newTeamMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newTeamMembers);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Team Members:', teamMembers);
    // Perform the action like sending invites here
  };

  return (
<div className="flex h-screen">
        {/* Sidebar */}
        <SidebarDemo />
  
        <div className=" mt-12 p-6 font-sans text-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Invite Your Team</h2>

        {teamMembers.map((member, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`teamMember-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Team Member {index + 1}
            </label>
            <div className="flex items-center">
              <input
                type="email"
                id={`teamMember-${index}`}
                value={member}
                onChange={(event) => handleInputChange(index, event)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g. person@company.com"
                required
              />
              {teamMembers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeTeamMember(index)}
                  className="ml-5 px-3 py-2 bg-gray-400 text-white p-2 rounded-md hover:bg-red-400"
                >
                  X
                </button>
              )}
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addTeamMember}
          className="text-indigo-600 hover:text-indigo-500 mb-4"
        >
          + Add more team members
        </button>

        <div className="flex ">
          <button
            type="button"
            className="bg-gray-200 text-black px-4 py-2  rounded-md hover:bg-gray-300"
          >
            <Link 
            href="OnboardingDone">
            Skip for now
            </Link>
          </button>
          <button
            type="submit"
            className=" text-white px-3 py-2 rounded-md ml-14  bg-logoBlue hover:bg-blue-400"
          >
            Next up: Start recruiting
          </button>
        </div>
    </div>
    </div>
  );
};

export default InviteTeamMembers;
