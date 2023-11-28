import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function JobCard({ data, onEdit, onDelete }) {
  console.log("🚀 ~ file: JobCard.js:5 ~ JobCard ~ data:", data);
  return (
    <div className="border border-solid border-gray-300 p-4 flex flex-col justify-center sm:items-start md:items-center w-full md:w-full lg:w-full relative">
      <div className="absolute top-2 right-2 flex">
        <FaEdit
          className="cursor-pointer text-blue-500"
          onClick={() => onEdit(data.id)}
        />
        <FaTrash
          className="cursor-pointer text-red-500 ml-2"
          onClick={() => onDelete(data.id)}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
      <p className="mb-1">Company: {data.companyName}</p>
      <p className="mb-1">Location: {data.location}</p>
      <p className="mb-1">Time: {data.time}</p>
      <p className="mb-1">Experience: {data.experience}</p>
      <p className="mb-1">Salary: {data.salary}</p>
      <p className="mb-1">Employees: {data.employees}</p>
    </div>
  );
}

export default JobCard;
