import PropTypes from 'prop-types';
import { useState } from 'react';

const DropdownSelect = ({ types, handleChangeType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectType = (type) => {
    handleChangeType(type);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-72 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Types
          <svg
            className={`ml-2 h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 3l-7 7m0 0l7 7m-7-7h14" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              onClick={() => handleSelectType('')}
              className="capitalize block px-4 py-2 text-sm text-gray-700 hover:bg-red-400 hover:text-white cursor-pointer"
            >
              All
            </div>
            {types.map((type) => (
              <div
                key={type.url}
                onClick={() => handleSelectType(type.name)}
                className="capitalize block px-4 py-2 text-sm text-gray-700 hover:bg-red-400 hover:text-white cursor-pointer"
              >
                {type.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownSelect.propTypes = {
  types: PropTypes.array,
  handleChangeType: PropTypes.func,
};

export default DropdownSelect;
