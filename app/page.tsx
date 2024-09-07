"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingNavDemo } from "./(Work)/FloatingNavDemo/page";
import PinnedContainer from "./(Work)/pinnedContainer/page";
import Dashboard from "@/components/dashboardAnimation";
import JobMatchingAnimation from "./(Work)/aiserachAnnimation/page";

const Home: React.FC = () => {


  return (
    <div>
      <FloatingNavDemo />
      <div className="relative">
        {/* <ScrollSyncComponent /> */}
        <div>
          <PinnedContainer
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            VideoElement={Dashboard}
            contentPosition="text-left" // Change to "video-left" to swap positions
          />            
          <PinnedContainer
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            VideoElement={JobMatchingAnimation}
            contentPosition="text-left" // Change to "video-left" to swap positions
          />         

          {/* <VideoExample src= "public/clients.mp4" /> */}
          
          <motion.section
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Section 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.section>
          
          <motion.section
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.section>

         
          
          
          <motion.section
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
