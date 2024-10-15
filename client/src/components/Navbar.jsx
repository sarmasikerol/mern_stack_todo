import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };
  return (
    <div className="h-16 bg-indigo-600 flex items-center justify-between px-4 sm:px-5 md:px-10">
      <div className="text-white font-bold text-xl sm:text-2xl cursor-pointer">
        SHARE POST
      </div>
      <div className="flex items-center space-x-3 sm:space-x-5">
        <input
          type="text"
          placeholder="Ara"
          className="p-2 outline-none rounded-md"
        />
        <div
          onClick={openModal}
          className="w-28 sm:w-36 border p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800"
        >
          Create Post
        </div>
        <BiLogOut
          onClick={logoutFunc}
          size={20}
          className="text-white cursor-pointer sm:size-25"
        />
      </div>
    </div>
  );
};

export default Navbar;
