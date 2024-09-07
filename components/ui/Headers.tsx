import HoverBorderGradient from "./Buttons"; // Adjust the path if necessary
import  {useRouter}  from 'next/navigation'
function Header() {

    const router = useRouter();
  return (
    <div className="h-[50rem] w-full relative flex flex-col items-center justify-start pt-24">
      {/* Background gradient to match the provided image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#200c38] to-black"></div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
     
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern" style={{ opacity: 0.2, backgroundSize: '80px 80px', backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)' }}></div>
      <p className="text-4xl sm:text-7xl font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-8 text-center">
        Welcome to GigGrove
      </p>
      <p className="text-2xl sm:text-4xl font-normal relative z-20 text-neutral-400 text-center mt-4">
        Your One-Stop Platform for AI Gigs
      </p>
      <p className="text-xl sm:text-xl font-normal relative z-20 text-neutral-400 text-center mt-8 px-4">
        Whether you're looking to get small tasks done or seeking to contribute your skills <br className="hidden sm:block" /> to AI projects, GigGrove connects you with the right opportunities.
      </p>
      <div className="flex space-x-12 mt-12"> {/* Increased space-x for larger gap */}
        <HoverBorderGradient onClick={()=>{
            router.push("/client")
        }}containerClassName="bg-purple-600 w-40 h-14" textColor="text-white"> {/* Adjust size */}
          Client
        </HoverBorderGradient>
        <HoverBorderGradient containerClassName="bg-purple-600 w-40 h-14" textColor="text-white"> {/* Adjust size */}
          Worker
        </HoverBorderGradient>
      </div>
    </div>
  );
}

export default Header;

