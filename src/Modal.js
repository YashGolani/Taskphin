import React from "react";

const Modal = ({
  handleInputChange,
  newData,
  isModal,
  handleAddButtonClick,
}) => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 sm:p-8 md:p-8 lg:p-16 xl:p-20 shadow-md z-50">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={newData.title}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={newData.companyName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={newData.location}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Time"
            name="time"
            value={newData.time}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Experience"
            name="experience"
            value={newData.experience}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Salary"
            name="salary"
            value={newData.salary}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
            aria-errormessage="Please enter a valid number"
          />
          <input
            type="text"
            placeholder="Employees"
            name="employees"
            value={newData.employees}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <button
            className="m-2 sm:m-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
          <button
            className="m-2 sm:m-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white"
            onClick={isModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
