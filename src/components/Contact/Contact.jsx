import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPen,
  FaPaperPlane,
} from "react-icons/fa";
import Lanyard from "./Landyard/Lanyard";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-black text-white relative z-10 font-poppins">
      {/* Form Section */}
      <div className="w-full md:w-3/5 p-10 flex flex-col justify-center bg-black  rounded-lg m-6">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-4 font-poppins">
            Contact Me
          </h1>
          <p className="text-white text-lg">
            Got a question or proposal? Don’t hesitate to reach out! Just fill
            in the form below.
          </p>
        </div>

        <form className="space-y-6">
          {/* Full Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full shadow-sm hover:shadow-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaUser className="text-orange-500 mr-2" />
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full bg-black text-white focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full shadow-sm hover:shadow-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaEnvelope className="text-orange-500 mr-2" />
              <input
                type="email"
                placeholder="Email *"
                className="w-full bg-black text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile Number & Subject */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full shadow-sm hover:shadow-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaPhone className="text-orange-500 mr-2" />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full bg-black text-white focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full shadow-sm hover:shadow-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaPen className="text-orange-500 mr-2" />
              <input
                type="text"
                placeholder="Subject *"
                className="w-full bg-black text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex items-start border border-gray-700 rounded-lg px-4 py-3 w-full shadow-sm hover:shadow-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
            <textarea
              placeholder="Message *"
              className="w-full bg-black text-white focus:outline-none resize-none"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-40 bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
            >
              <span>Send</span>
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>

      {/* Lanyard Section */}
      <div className="w-full md:w-2/5 relative flex items-center justify-center bg-gray-100 rounded-lg m-6">
        <Lanyard />
      </div>
    </div>
  );
};

export default ContactPage;
