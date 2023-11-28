import React, { useState } from "react";
import JobCard from "./JobCard";
import Modal from "./Modal";

const App = () => {
  const [dataArray, setDataArray] = useState([
    {
      id: 1,
      title: "UX UI Designer",
      companyName: "Great Vibes - Information Technology",
      location: "Chennai, Tamilnadu, India (In-office)",
      time: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "1 - 2 years",
      salary: 30000,
      employees: "51-200",
    },
    {
      id: 2,
      title: "UX UI Designer",
      companyName: "Great Vibes - Information Technology",
      location: "Chennai, Tamilnadu, India (In-office)",
      time: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "1 - 2 years",
      salary: 30000,
      employees: "51-200",
    },
  ]);
  const [newData, setNewData] = useState({
    title: "",
    companyName: "",
    location: "",
    time: "",
    experience: "",
    salary: "",
    employees: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAddButtonClick = () => {
    setNewData({
      title: "",
      companyName: "",
      location: "",
      time: "",
      experience: "",
      salary: "",
      employees: "",
    });

    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const itemToEdit = dataArray.find((item) => item.id === id);
    setNewData(itemToEdit);
    setEditId(id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedData = dataArray.filter((item) => item.id !== id);
    setDataArray(updatedData);
  };

  const isModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddJob = () => {
    if (
      newData.title &&
      newData.companyName &&
      newData.location &&
      newData.time &&
      newData.experience &&
      newData.salary &&
      newData.employees
    ) {
      if (editId !== null) {
        // If editId is not null, update the existing item
        const updatedData = dataArray.map((item) =>
          item.id === editId ? { ...item, ...newData } : item
        );
        setDataArray(updatedData);
        setEditId(null); // Reset editId after editing
      } else {
        // If editId is null, add a new item
        const nextId =
          dataArray.length > 0 ? dataArray[dataArray.length - 1].id + 1 : 1;
        setDataArray([...dataArray, { id: nextId, ...newData }]);
      }
    } else {
      alert("Please fill out all fields before adding.");
    }

    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end p-2 px-4">
        <button
          className="mb-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white"
          onClick={handleAddButtonClick}
        >
          Add Job
        </button>
      </div>
      <div className="flex flex-wrap">
        {dataArray.map((data) => (
          <div className="w-full md:w-1/2 lg:w-1/2 p-4 box-border items-start">
            <JobCard
              key={data.id}
              data={data}
              onEdit={() => handleEdit(data.id)}
              onDelete={() => handleDelete(data.id)}
            />
          </div>
        ))}
      </div>

      {/* Modal for input fields */}
      {isModalOpen && (
        <Modal
          isModal={isModal}
          newData={newData}
          handleInputChange={handleInputChange}
          handleAddButtonClick={handleAddJob}
        />
      )}
    </div>
  );
};

export default App;
