import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function JobCard({ data, onEdit, onDelete }) {
  const unsplashLink = "https://source.unsplash.com/featured/640x480";
  const imageUrl = `${unsplashLink}?${data.id}`;

  return (
    <div className="border border-solid border-gray-300 p-4 flex flex-col justify-center items-start w-full md:w-full lg:w-full relative">
      <div className="flex items-start justify-end text-right absolute top-5 right-2">
        <FaEdit
          className="cursor-pointer text-blue-500"
          onClick={() => onEdit(data.id)}
        />
        <FaTrash
          className="cursor-pointer text-red-500 ml-2"
          onClick={() => onDelete(data.id)}
        />
      </div>
      <div className="flex">
        <div className="m-2">
          <source srcSet={`${imageUrl}.webp`} type="image/webp" />
          <img
            src={`${imageUrl}.jpg`}
            alt={`Job ${data.id}`}
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
          <h3 className="mb-1">
            {data.companyName} - {data.industry}
          </h3>
          <p className="mb-1">Location: {data.location}</p>
          <p className="mb-1">Time: {data.time}</p>
          <p className="mb-1">
            {`Experience: (${data.minExperience} - ${data.maxExperience}) years`}
          </p>
          <p className="mb-1">{`Salary: (${data.minSalary} - ${data.maxSalary}) /Month`}</p>
          <p className="mb-1">Employees: {data.employees}</p>
          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
