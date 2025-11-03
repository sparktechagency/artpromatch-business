import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa6';

const UpcommingEvents = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Upcoming Events</h1>
        <h4 className="text-primary">Add Event</h4>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="border rounded-xl p-2 flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <div className="">
                <h1 className="text-xl font-semibold">
                  Tattoo & Piercing Expo
                </h1>
                <p className="text-xs text-neutral-500">
                  Manhattan, NY (Rivera Ink Studio)
                </p>
                <h5>30 Dec 2024</h5>
              </div>
              <div className="flex items-center gap-2">
                <FaPen className="cursor-pointer bg-primary text-white p-1 rounded"></FaPen>
                <FaTrash></FaTrash>
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-2 flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <div className="">
                <h1 className="text-xl font-semibold">
                  Tattoo & Piercing Expo
                </h1>
                <p className="text-xs text-neutral-500">
                  Manhattan, NY (Rivera Ink Studio)
                </p>
                <h5>30 Dec 2024</h5>
              </div>
              <div className="flex items-center gap-2">
                <FaPen className="cursor-pointer bg-primary text-white p-1 rounded"></FaPen>
                <FaTrash></FaTrash>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
