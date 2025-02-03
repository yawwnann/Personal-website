import PropTypes from "prop-types";

const RunningText = ({ runningText }) => (
  <div className="w-full bg-orange-500 py-3 sm:py-4 md:py-5 overflow-hidden">
    <div className="bg-gray-900 py-2 sm:py-3 -rotate-2">
      <div className="marquee-container flex items-center whitespace-nowrap">
        <span className="text-white text-base sm:text-lg md:text-xl font-semibold mx-2">
          {runningText}
        </span>
      </div>
    </div>
  </div>
);

RunningText.propTypes = {
  runningText: PropTypes.string.isRequired,
};

export default RunningText;
