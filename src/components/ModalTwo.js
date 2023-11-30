import React from "react";

const ModalTwo = ({
  handleInputChange,
  newData,
  secondModal,
  handleAddJob,
  setSecondModal,
  isAddModal,
}) => {
  return (
    <div
      className={`${secondModal ? "fixed" : "hidden"} inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Create a Job</h2>
              <h2 className="text-2xl font-semibold">Step 2</h2>
            </div>
            <div className="mt-6 space-y-4">
              <h2 className="text-lg">Experience</h2>
              <div className="flex">
                <input
                  type="number"
                  placeholder="Minimum Experience"
                  name="minExperience"
                  value={newData.minExperience}
                  onChange={handleInputChange}
                  className="w-full mr-3 border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Maximum Experience"
                  name="maxExperience"
                  value={newData.maxExperience}
                  onChange={handleInputChange}
                  className="w-full ml-3 border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <h2 className="text-lg">Salary</h2>
              <div className="flex">
                <input
                  type="number"
                  placeholder="Minimum Salary"
                  name="minSalary"
                  value={newData.minSalary}
                  onChange={handleInputChange}
                  className="w-full mr-3 border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Maximum Salary"
                  name="maxSalary"
                  value={newData.maxSalary}
                  onChange={handleInputChange}
                  className="w-full ml-3 border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <h2 className="text-lg">Total Employees</h2>
              <input
                type="text"
                placeholder="ex. 100"
                name="employees"
                value={newData.employees}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 sm:p-4 focus:outline-none focus:ring focus:border-blue-500"
              />
              <div>
                <h2 className="text-lg mb-2">Apply Type</h2>
                <div className="flex">
                  <div className="mr-2">
                    <input
                      type="radio"
                      id="quick"
                      name="applyType"
                      className="mr-1"
                    />
                    <label htmlFor="quick">Quick Apply</label>
                  </div>
                  <div className="ml-2">
                    <input
                      type="radio"
                      id="external"
                      name="applyType"
                      className="mr-1"
                    />
                    <label htmlFor="external">External Apply</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center mt-8">
              {/* Add and Close buttons */}
              <button
                onClick={() => {
                  handleAddJob();
                  setSecondModal(!secondModal);
                  isAddModal();
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTwo;
