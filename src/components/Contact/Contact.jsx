import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPen,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";
import Lanyard from "./Landyard/Lanyard";

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-black text-white relative z-10 font-poppins">
      {/* Modal Notification */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-sm sm:max-w-md w-full relative border border-orange-500/30">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            <div className="text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
                Oops! 😅
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Ups! Backendnya belum selesai bang, sabar ya.😉
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form Section */}
      <div className="w-full md:w-3/5 p-6 sm:px-6 md:px-10 flex flex-col justify-center bg-black rounded-lg m-4 md:m-6">
        <div className="text-center md:text-left mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Contact <span className="text-orange-500">Me</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Got a question or proposal? Don’t hesitate to reach out! Just fill
            in the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Fields */}
          <div className="flex flex-col gap-4">
            {/* Full Name Input */}
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full group focus-within:border-orange-500 transition-colors">
              <FaUser className="text-orange-500 mr-2 text-lg" />
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full group focus-within:border-orange-500 transition-colors">
              <FaEnvelope className="text-orange-500 mr-2 text-lg" />
              <input
                type="email"
                placeholder="Email *"
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Phone Input */}
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full group focus-within:border-orange-500 transition-colors">
              <FaPhone className="text-orange-500 mr-2 text-lg" />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Subject Input */}
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 w-full group focus-within:border-orange-500 transition-colors">
              <FaPen className="text-orange-500 mr-2 text-lg" />
              <input
                type="text"
                placeholder="Subject *"
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="border border-gray-700 rounded-lg px-4 py-3 group focus-within:border-orange-500 transition-colors">
            <textarea
              placeholder="Message *"
              className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400 resize-none min-h-[150px]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <span>Send Message</span>
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </form>
      </div>

      {/* Lanyard Section */}
      <div className="w-full md:w-2/5 relative flex items-center justify-center bg-gray-900 rounded-lg m-4 md:m-6 overflow-hidden">
        <Lanyard />
      </div>
    </div>
  );
};

export default ContactPage;
