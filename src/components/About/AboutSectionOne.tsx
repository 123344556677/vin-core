// import Image from "next/image";
// import SectionTitle from "../Common/SectionTitle";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

// const AboutSectionOne = () => {
//   const List = ({ text }) => (
//     <p className="mb-5 flex items-center text-lg font-medium text-body-color">
//       <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//         {checkIcon}
//       </span>
//       {text}
//     </p>
//   );

//   return (
//     <section id="about" className="pt-16 md:pt-20 lg:pt-28">
//       <div className="container">
//         <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">
//               <SectionTitle
//                 title="Crafted for Startup, SaaS and Business Sites."
//                 paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
//                 mb="44px"
//               />

//               <div
//                 className="mb-12 max-w-[570px] lg:mb-0"
//                 data-wow-delay=".15s"
//               >
//                 <div className="mx-[-12px] flex flex-wrap">
//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Premium quality" />
//                     <List text="Tailwind CSS" />
//                     <List text="Use for lifetime" />
//                   </div>

//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Next.js" />
//                     <List text="Rich documentation" />
//                     <List text="Developer friendly" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-1/2">
//               <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
//                 <Image
//                   src="/images/about/about-image.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
//                 />
//                 <Image
//                   src="/images/about/about-image-dark.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionOne;

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 mb-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="mb-12 max-w-[1200px] lg:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap mt-3">
                  <div className="w-full px-3 sm:w-1/2 lg:w-1/4 mt-3">
                    <List text="Title Records" />
                    <List text="Tailwind Title Brand Records" />
                    <List text="Junk & Salvage Records" />
                    <List text="Insurer “Total Loss”" />
                    <List text="Full Auto Specs" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-1/4  mt-3">
                    <List text="Recalls & Defects" />
                    <List text="Insurance Claims" />
                    <List text="Current & Past Owners" />
                    <List text="Prior Theft Records" />
                    <List text="Repair & Rebuilt Records" />
                    <List text="Current Title Records" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-1/4  mt-3">
                    <List text="Odometer Reading" />
                    <List text="Sales History" />
                    <List text="Awards and Accolades" />
                    <List text="NHTSA Crash Test Ratings" />
                    <List text="Safety and Security" />
                    <List text="Manufacturer Information" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-1/4  mt-3">
                    <List text="Flood Damage Records" />
                    <List text="Commercial Use Records" />
                    <List text="Fire & Hail Records" />
                    <List text="Historical Title Records" />
                    <List text="Cash For Clunkers" />
                    <List text="Residual Values" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center space-x-8 mb-8 mt-5 ">
          <span className="text-lg font-semibold cursor-pointer  text-body-color dark:text-body-color-dark">
            All
          </span>

          <span className="text-lg font-semibold text-body-color cursor-pointer dark:text-body-color-dark">
            New
          </span>
          <span className="text-lg font-semibold text-body-color cursor-pointer dark:text-body-color-dark">
            Used
          </span>
        </div>

        {/* Search bar */}
        <div className="flex justify-center mb-5">
          <div className="relative w-[700px]">
            <input
              type="text"
              placeholder="Search for VIN here..."
              className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 pr-14 text-base text-body-color placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white hover:bg-primary/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

