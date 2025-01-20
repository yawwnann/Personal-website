import PropTypes from "prop-types";

const RunningText = ({ runningText }) => (
  <div className="w-full bg-orange-500 py-5 overflow-hidden">
    <div className="bg-black py-3 -rotate-2">
      <div className="marquee-container flex items-center whitespace-nowrap">
        <span className="text-white text-xl font-semibold mx-2">
          {runningText}
        </span>
      </div>
    </div>
  </div>
);

// Validasi properti menggunakan PropTypes
RunningText.propTypes = {
  runningText: PropTypes.string.isRequired, // Properti ini wajib dan harus berupa string
};

export default RunningText;
