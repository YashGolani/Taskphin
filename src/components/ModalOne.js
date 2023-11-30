import React from "react";

const ModalOne = ({
  handleInputChange,
  newData,
  isAddModal,
  setSecondModal,
}) => {
  const handleNext = () => {
    if (newData.title && newData.companyName && newData.industry) {
      setSecondModal(true);
    } else {
      alert("Please fill out all required fields before proceedinggggg.");
    }
  };

  return (
    <div
      className={`${isAddModal ? "fixed" : "hidden"} inset-0 overflow-y-auto`}
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
              <h2 className="text-2xl font-semibold">Step 1</h2>
            </div>
            <div className="mt-6 space-y-4">
              <h2 className="text-lg">Job Title *</h2>
              <input
                type="text"
                placeholder="Title"
                name="title"
                required
                value={newData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />
              <h2 className="text-lg">Company Name</h2>
              <input
                type="text"
                placeholder="Company Name *"
                name="companyName"
                required
                value={newData.companyName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />
              <h2 className="text-lg">Industry</h2>
              <input
                type="text"
                placeholder="Information Technology *"
                name="industry"
                required
                value={newData.industry}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />
              <div className="flex">
                <div className="mr-3">
                  <h2 className="text-lg">Location</h2>
                  <input
                    type="text"
                    placeholder="Chennai"
                    name="location"
                    value={newData.location}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg">Remote Type</h2>
                  <input
                    type="text"
                    placeholder="In-Office"
                    name="time"
                    value={newData.time}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center mt-8">
              <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
