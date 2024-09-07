import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JobMatchingAnimation: React.FC = () => {
  useEffect(() => {
    // Portfolio Upload Animation
    gsap.from(".portfolio", { 
      duration: 1, 
      y: -200, 
    //   ease: "bounce.out",
      scrollTrigger: {
        trigger: ".portfolio",
        start: "bottom ",
        end: "top ",
        scrub: true
      }
    });

    gsap.from(".search-box", { 
      duration: 1, 
      y: -200, 
    //   ease: "bounce.out" ,
      scrollTrigger: {
        trigger: ".search-box",
        start: "bottom ",
        end: "top ",
        scrub: true
      }
    });

    // Scanning Animation
    gsap.timeline({
        scrollTrigger: {
          trigger: ".scan-line",
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
  
          onEnter: () => {
            gsap.to(".scan-line", {
              delay: 1,
              opacity: 1, 
              duration: 0.5,
 
            });
          },
          onLeave: () => {
            gsap.to(".scan-line", {
              opacity: 0, 
              duration: 0.5
            });
          }
        }
      })
      .to(".scan-line", { 
        duration: 2, 
        y: "250px", 
        ease: "power1.inOut", 
        repeat: 4, 
        yoyo: true
      });

    // Job Matching Animation (Stagger each job)
    gsap.to(".jobs", { 
      duration: 1.2, 
      opacity: 1, 
      y: -50, 
      ease: "power2.inOut", 
      delay: 0, 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".jobs",
        start: "top 80%",
        end: "bottom 30%",
        scrub: true
      }
    });

    // Notification Pop-up
    gsap.to(".notification", { 
      duration: 1.5, 
      opacity: 1, 
      scale: 1.2, 
      delay: 4.5, 
      ease: "elastic.out(1, 0.5)" ,
      scrollTrigger: {
        trigger: ".notification",
        start: "top 45%",
        end: "bottom 30%",
        scrub: true
      }
    });
  }, []);

  return (
<div className="h-[600px] ">

<div className="portfolio bg-black w-[300px] h-[400px] top-[300px]  rounded-lg z-1 flex justify-center items-center absolute"></div>
<div className="search-box bg-white rounded-full p-3 shadow-lg w-[300px] h-[50px] top-[320px]  z-6 flex justify-center items-center absolute">
        <div className="flex justify-between items-center w-full">
        <div className="text-gray-500 text-lg mr-auto " >AI search</div>
        <i className="fas fa-search text-gray-500 text-2xl"></i>
        </div>

      </div>
  <div className="scan-line ml-6 bg-blue-500 shadow-trailing-light w-[250px] h-[5px] absolute top-[250px] z-2"></div>


      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Machine Learning</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Data Cleaning</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Web Animations</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Video Editing</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Thumbnail CTR</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Model Labeling</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Data Cleaning</div>
      <div className="jobs bg-black text-white w-[300px] h-[50px] rounded-md opacity-0 flex justify-center items-center mt-2 absolute top-[300px] z-3">Web Animations</div>

      <div className="notification bg-green-300 w-[200px] h-[50px] rounded-md opacity-0 flex justify-center items-center ml-12 shadow-lg absolute top-[400px] z-4">
        Match Found!
      </div>
    </div>

  );
};

export default JobMatchingAnimation;
