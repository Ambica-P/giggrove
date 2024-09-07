"use client";
import { SidebarDemo } from '@/components/sidebar2';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const OnboardingDone = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showConfetti, setShowConfetti] = useState(true); // State to control confetti visibility
  const [recycle, setRecycle] = useState(true); // State to control confetti recycling

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to detect window size changes
    window.addEventListener('resize', handleResize);

    // Set a timer to stop recycling confetti after 5 seconds
    const confettiTimeout = setTimeout(() => {
      setRecycle(false); // Stop generating new confetti
    }, 1000); // Confetti falls for 1 second, then stop recycling new ones

    // Set another timer to completely remove confetti after a few seconds
    const removeConfettiTimeout = setTimeout(() => {
      setShowConfetti(false); // Remove confetti from the DOM
    }, 2000); // Allow time for the confetti to fall down before disappearing

    // Clean up the event listener and timers
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(confettiTimeout);
      clearTimeout(removeConfettiTimeout);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarDemo />

      {/* Main Content */}
      <div className=" mt-12 p-6 ">
        {/* Confetti animation */}
        {showConfetti && (
          <div className="fixed top-0 left-0 w-full h-full z-10">
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={recycle} // Stop new confetti from appearing after the timer
              numberOfPieces={200} // Customize the number of confetti pieces
              gravity={0.3} // Make the confetti fall more slowly for a nice effect
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-6">You're all set and ready to go!</h2>
        <h6 className="text-sm mb-6 text-gray-600">Now you can Find Talent or Post a Job</h6>

        <div className="flex mt-1">
          <Button className="flex-1 p-2 border border-gray-300 shadow-sm mr-2 bg-logoBlue hover:bg-blue-400">
            < Link href='Dashboard'>
              Find Talent
            </Link>
          </Button>
          <Button className="flex-1 bg-white border border-gray-300 text-black hover:bg-gray-200">
            Post a Job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingDone;
