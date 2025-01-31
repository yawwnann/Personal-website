import { Globe } from "lucide-react";

export default function GlobeLocationCard() {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-full shadow-lg w-max">
      <div className="ml-14">
        <p className="text-gray-800 text-lg font-medium">Located in</p>
        <p className="text-gray-600">
          Yogyakarta, <br />
          Indonesia.
        </p>
      </div>
      <div className="flex-shrink-0 p-3 rounded-full ml-4 bg-black">
        <Globe className="w-14 h-14 text-orange-500 animate-spin-slow" />
      </div>
    </div>
  );
}
