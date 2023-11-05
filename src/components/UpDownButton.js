import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
const UpDownButton = ({ onUpClick, onDownClick }) => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col z-50">
      <button
        onClick={onUpClick}
        className="mb-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <button
        onClick={onDownClick}
        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
};
export default UpDownButton;
