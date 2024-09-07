import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Dashboard: React.FC = () => {
  useEffect(() => {
        // Header Animation
        gsap.to(".dashboard-header", 
            { 
                duration: 1.2, 
                opacity: 1, 
                y: -50, 
                ease: "power2.inOut", 
                delay: 0, 
                // stagger: 0.3,
                scrollTrigger: {
                  trigger: ".dashboard-header",
                  start: "top center",
                  end: "bottom center",
                  scrub: true
                }
              }
          );

    // Pie Chart Animation
    gsap.fromTo(".pie-chart", 
      { opacity: 0, scale: 0.8, y: -50 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power1.out", 
        scrollTrigger: {
          trigger: ".pie-chart",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );

    // Text Lines Animation
    gsap.fromTo(".text-line", 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, stagger: 0.3, ease: "power1.out", 
        scrollTrigger: {
          trigger: ".text-line",
          start: "top 80%",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div className="text-line mx-auto max-w-9xl p-8 bg-black shadow-lg rounded-lg border border-gray-200 w-[600px]">
      {/* Header */}
      <header className=" p-4 rounded-t-lg mb-1 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-100">Personalised Dashboard </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Side (Metrics and Text) */}
        <div className="text-line left-panel flex flex-col space-y-3 w-full lg:w-2/3">
          <div className="text-line summary-card bg-gray-700 shadow-md rounded-lg p-6 flex flex-col space-y-5">
            <h2 className="text-line text-l font-semibold text-gray-100">Portfolio</h2>
            <div className="text-line bg-gray-900 w-[75px] h-1 rounded-md"></div>
            <div className="text-line bg-gray-900 w-[150px] h-1 rounded-md"></div>
            <div className="text-line bg-gray-900 w-[200px] h-1 rounded-md"></div>
          </div>
          <div className="text-line summary-card bg-gray-700 shadow-md rounded-lg p-6 flex flex-col space-y-5">
            <h2 className="text-line text-l font-semibold text-gray-100">Experience</h2>
            <div className="text-line bg-gray-900 w-[75px] h-1 rounded-md"></div>
            <div className="text-line bg-gray-900 w-[150px] h-1 rounded-md"></div>
          </div>
        </div>
        
        {/* Right Side (Pie Chart) */}
        <div className="pie-chart-container flex-shrink-0  lg:w-1/3 relative  h-[200px]">
          <svg
            className="pie-chart"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
          >
            {/* Define pie slices */}
            <circle className="pie1" cx="50" cy="50" r="50"/>
            <circle className="pie2" cx="50" cy="50" r="50"/>
            <circle className="pie3" cx="50" cy="50" r="50"/>
            <circle className="pie4" cx="50" cy="50" r="50"/>
          </svg>
          <style jsx>{`
        figure {
          height: 0;
          padding-bottom: 40em;
        }
        .pie1,
        .pie2,
        .pie3,
        .pie4 {
          fill: rgba(0, 0, 0, 0);
          stroke-width: 31.8309886184;
          stroke-dasharray: 0,0,0,100;
          stroke-dashoffset: 25;
          animation: pieAnimation 6s infinite ease both;
        }
        .pie1 {
          stroke: hsl(180, 70%, 30%);
          animation-name: pie1;
        }
        .pie2 {
          stroke: hsl(180, 70%, 50%);
          animation-name: pie2;
        }
        .pie3 {
          stroke: hsl(180, 70%, 20%);
          animation-name: pie3;
        }
        .pie4 {
          stroke: hsl(180, 0%, 70%);
          animation-name: pie4;
        }
        @keyframes pie1 {
          50%, 100% { stroke-dasharray: 40,60,0,0; }
        }
        @keyframes pie2 {
          50%, 100% { stroke-dasharray: 0,40,30,30; }
        }
        @keyframes pie3 {
          50%, 100% { stroke-dasharray: 0,70,20,10; }
        }
        @keyframes pie4 {
          50%, 100% { stroke-dasharray: 0,90,10,0; }
        }
        @keyframes pieAnimation {
          50%, 100% { stroke-dasharray: 0,100; }
        }
      `}</style>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
