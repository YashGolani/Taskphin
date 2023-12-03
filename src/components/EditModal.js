import React from "react";

const EditModal = ({
  handleInputChange,
  newData,
  isEditModal,
  handleAddButtonClick,
}) => {
  return (
    <div
      className={`${isEditModal ? "fixed" : "hidden"} inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Create a Job</h2>
              <button
                onClick={isEditModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Title */}
              <input
                type="text"
                placeholder="Title"
                name="title"
                required
                value={newData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />

              {/* Company Name */}
              <input
                type="text"
                placeholder="Company Name"
                name="companyName"
                required
                value={newData.companyName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Industry"
                name="industry"
                required
                value={newData.industry}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />

              {/* Location */}
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={newData.location}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />

              {/* Time */}
              <input
                type="text"
                placeholder="Time"
                name="time"
                value={newData.time}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />

              {/* Experience */}
              <div className="flex space-x-4">
                <input
                  type="number"
                  placeholder="Min Experience"
                  name="minExperience"
                  value={newData.minExperience}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Max Experience"
                  name="maxExperience"
                  value={newData.maxExperience}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* Salary */}
              <div className="flex space-x-4">
                <input
                  type="number"
                  placeholder="Min Salary"
                  name="minSalary"
                  value={newData.minSalary}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Max Salary"
                  name="maxSalary"
                  value={newData.maxSalary}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* Employees */}
              <input
                type="text"
                placeholder="Employees"
                name="employees"
                value={newData.employees}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div className="flex justify-center items-center mt-8">
              {/* Add and Close buttons */}
              <button
                onClick={handleAddButtonClick}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white"
              >
                Add
              </button>
              <button
                onClick={isEditModal}
                className="ml-4 text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
