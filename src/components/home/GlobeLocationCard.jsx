import { Globe } from "lucide-react";

export default function GlobeLocationCard() {
  return (
    <div className="flex items-center bg-gray-100 p-3 sm:p-4 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-r-full">
      <div className="ml-4 sm:ml-8 md:ml-14">
        <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium">
          Located in
        </p>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
          Yogyakarta, <br />
          Indonesia.
        </p>
      </div>
      <div className="flex-shrink-0 p-2 sm:p-3 rounded-full ml-2 sm:ml-4 bg-black">
        <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-orange-500 animate-spin-slow" />
      </div>
    </div>
  );
}
