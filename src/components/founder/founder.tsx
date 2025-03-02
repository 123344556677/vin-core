const Founder = () => {
  return (
    <div
      className="max-w-6xl mx-auto my-3 p-8 border-2 bg-white dark:border-blue-500 
         dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 
         shadow-2xl text-black dark:text-white relative rounded-2xl"
      style={{ marginTop: "150px" }}
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Container with Photorealistic Effects */}
        <div className="relative -mt-32 md:-mt-40 md:w-1/2 lg:w-2/5">
          <div className="relative group">
            {/* Subtle 3D Shadow Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-300/20 
                    rounded-2xl transform rotate-3 scale-95 -z-10"
            />

            {/* Main Image with Natural Shadow and Border */}
            <img
              src="/images/hero/founder9.png"
              alt="Founder"
              className="w-full h-auto rounded-2xl shadow-2xl border-8 border-white dark:border-gray-900 
               transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
               group-hover:rotate-0 group-hover:scale-105
               rotate-2 scale-100 
               saturate-125 contrast-110 brightness-100 
               hover:saturate-150 hover:contrast-125"
            />

            {/* Reflective Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/5 
                    rounded-2xl pointer-events-none"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 lg:w-3/5 space-y-6 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Message from Our Founder
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p className="border-l-4 border-blue-400 pl-4 italic">
              "Welcome to our platform! We are committed to providing you with the best experience and
              unparalleled services. Thank you for being part of our journey."
            </p>
            <div className="mt-6">
              <p className="text-xl font-semibold text-blue-500">Bryan Muller</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Founder & CEO - Vin Core®
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
