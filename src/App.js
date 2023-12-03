import React, { useState } from "react";
import JobCard from "./components/JobCard";
import ModalOne from "./components/ModalOne";
import EditModal from "./components/EditModal";
import ModalTwo from "./components/ModalTwo";

const App = () => {
  const [dataArray, setDataArray] = useState([
    {
      id: 1,
      title: "UX UI Designer",
      companyName: "Apple",
      industry: "Information Technology",
      location: "Chennai, Tamilnadu, India (In-office)",
      time: "Part-Time (9.00 am - 5.00 pm IST)",
      minExperience: 1,
      maxExperience: 2,
      minSalary: 30000,
      maxSalary: 40000,
      employees: "51-200",
      applyType: "quick",
    },
    {
      id: 2,
      title: "UX UI Designer",
      companyName: "Microsoft",
      industry: "Information Technology",
      location: "Chennai, Tamilnadu, India (In-office)",
      time: "Part-Time (9.00 am - 5.00 pm IST)",
      minExperience: 1,
      maxExperience: 2,
      minSalary: 30000,
      maxSalary: 40000,
      employees: "51-200",
      applyType: "external",
    },
    {
      id: 3,
      title: "Software Engineer",
      companyName: "Google",
      industry: "Information Technology",
      location: "Mountain View, CA, USA (Remote)",
      time: "Full-Time",
      minExperience: 2,
      maxExperience: 5,
      minSalary: 80000,
      maxSalary: 120000,
      employees: "10000+",
      applyType: "quick",
    },
    {
      id: 4,
      title: "Data Scientist",
      companyName: "Amazon",
      industry: "E-Commerce",
      location: "Seattle, WA, USA (Hybrid)",
      time: "Full-Time",
      minExperience: 3,
      maxExperience: 7,
      minSalary: 90000,
      maxSalary: 150000,
      employees: "100000+",
      applyType: "external",
    },
  ]);

  const [newData, setNewData] = useState({
    title: "",
    companyName: "",
    industry: "",
    location: "",
    time: "",
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    employees: "",
    applyType: "",
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [secondModal, setSecondModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAddButtonClick = () => {
    setNewData({
      title: "",
      companyName: "",
      industry: "",
      location: "",
      time: "",
      minExperience: "",
      maxExperience: "",
      minSalary: "",
      maxSalary: "",
      employees: "",
      applyType: "",
    });

    setIsAddModalOpen(true);
  };

  const handleEdit = (id) => {
    const itemToEdit = dataArray.find((item) => item.id === id);
    setNewData(itemToEdit);
    setEditId(id);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedData = dataArray.filter((item) => item.id !== id);
    setDataArray(updatedData);
  };

  const isEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const isAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const handleAddJob = () => {
    if (editId !== null) {
      const updatedData = dataArray.map((item) =>
        item.id === editId ? { ...item, ...newData } : item
      );
      setDataArray(updatedData);
      setEditId(null);
    } else {
      const nextId =
        dataArray.length > 0 ? dataArray[dataArray.length - 1].id + 1 : 1;
      setDataArray([...dataArray, { id: nextId, ...newData }]);
    }
    setIsEditModalOpen(false);
  };

  console.log(
    "if we want to send data to post request can send this object",
    newData
  );
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
      {isEditModalOpen && (
        <EditModal
          isEditModal={isEditModal}
          newData={newData}
          handleInputChange={handleInputChange}
          handleAddButtonClick={handleAddJob}
        />
      )}
      {isAddModalOpen && (
        <ModalOne
          handleInputChange={handleInputChange}
          newData={newData}
          isAddModal={isAddModal}
          setSecondModal={setSecondModal}
        />
      )}
      {/* Second Modal */}
      {secondModal && (
        <ModalTwo
          handleInputChange={handleInputChange}
          newData={newData}
          secondModal={secondModal}
          handleAddJob={handleAddJob}
          setSecondModal={setSecondModal}
          isAddModal={isAddModal}
        />
      )}
    </div>
  );
};

export default App;
