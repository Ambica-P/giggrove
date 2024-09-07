import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

interface PinnedContainerProps {
  text: string;
  VideoElement: React.ComponentType;
  contentPosition: "text-left" | "video-left"; // New prop to control positioning
}

const PinnedContainer: React.FC<PinnedContainerProps> = ({ text, VideoElement, contentPosition }) => {
  useEffect(() => {
    // Pin the container and control its scrolling
    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        start: "bottom",
        end: "top", // Adjust end point dynamically based on content height
        pin: true,
        scrub: true,
        anticipatePin: 1,
        // markers: true, // Optional: Helps with debugging by showing start and end markers
      }
    });
  }, []);

  return (
    <div className="relative">
      <div className="container max-w-4xl mx-auto flex flex-wrap">
        {/* Conditional rendering based on contentPosition */}
        {contentPosition === "text-left" ? (
          <>
            {/* Text section on the left */}
            <div className="text-section flex items-center flex-1 pr-8">
              <div className="content space-y-4">
                <p>{text}</p>
              </div>
            </div>
            
            {/* Animation section on the right */}
            <div className="animation-section flex-1">
              <VideoElement />
            </div>
          </>
        ) : (
          <>
            {/* Animation section on the left */}
            <div className="animation-section flex-1">
              <VideoElement />
            </div>

            {/* Text section on the right */}
            <div className="text-section flex items-center flex-1 pl-8">
              <div className="content space-y-4">
                <h1 className="text-3xl font-bold mb-4">Pinned Container</h1>
                <p>{text}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add extra space for scrolling if needed */}
    </div>
  );
};

export default PinnedContainer;
