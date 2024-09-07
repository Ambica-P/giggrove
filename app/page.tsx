"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Appbar1 } from "@/components/AppBar1";
import TopBar from "@/components/ui/TopBar";
import Header from "@/components/ui/Headers";
import FAQSection from "@/components/ui/FAQ";
import { FloatingNavDemo } from "./(Work)/FloatingNavDemo/page";
import PinnedContainer from "./(Work)/pinnedContainer/page";
import Dashboard from "@/components/dashboardAnimation";
// import { PieChart } from "your-chart-library";
// import { VideoExample } from "@/components/VideoExample";

// const Home: React.FC = () => {
//   const router = useRouter();
//   const handleNavigation = (url: string) => {
//     router.push(url);
//   };
//   const faqRef = useRef<HTMLElement>(null);

//   return (
//     <div>
//       <TopBar faqRef={faqRef} />
//       <Header />
//       <FAQSection faqRef={faqRef} />
//     </div>
//   );
// };

// export default Home;
const Home: React.FC = () => {
  // const router = useRouter();
  // const handleNavigation = (url: string) => {
  //   router.push(url);
  // };
  // const faqRef = useRef<HTMLElement>(null);

  return (
    <div>
      <FloatingNavDemo />
      <div className="relative">
        {/* <ScrollSyncComponent /> */}
        <div>
          {/* <PinnedContainer
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            VideoElement={Dashboard}
            contentPosition="video-left" // Change to "video-left" to swap positions
          />            
          <PinnedContainer
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            VideoElement={JobMatchingAnimation}
            contentPosition="text-left" // Change to "video-left" to swap positions
          />         
          <PieChart/> */}

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

          <PinnedContainer
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            VideoElement={Dashboard}
            contentPosition="video-left" // Change to "video-left" to swap positions
          />    
          
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
