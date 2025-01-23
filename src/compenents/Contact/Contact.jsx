import Lanyard from "../Landyard/Lanyard";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-gray-50 relative z-10">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white shadow-md">
        <h1 className="text-3xl font-bold mb-4">Chat to our team</h1>
        <p className="text-gray-600 mb-6">
          Need help with something? Want a demo? Get in touch with our friendly
          team and ll get in touch within 2 hours.
        </p>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Job title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-4">
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="US">US</option>
              <option value="ID">ID</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="employees"
                className="text-blue-500 focus:ring-blue-500"
              />
              <span>m a solo creator</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="employees"
                className="text-blue-500 focus:ring-blue-500"
              />
              <span>m part of a team</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get in touch
          </button>
        </form>
      </div>

      {/* Lanyard Component */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gray-100">
        <Lanyard />
      </div>
    </div>
  );
};

export default ContactPage;
