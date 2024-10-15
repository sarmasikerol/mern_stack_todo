import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });

  const { modal } = useSelector((state) => state.modal);

  console.log("modal",modal);
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
    } else {
      dispatch(createPostAction(postData));
    }

    dispatch({ type: "MODAL", payload: false });
    toast("Added", {
      position: "top-right",
      autoClose: 5000,
    });
  };
  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 justify-center items-center flex">
      <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 rounded-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="font-bold text-xl md:text-2xl">
            {modal?.updateId ? "UPDATE POST" : "SHARE POST"}
          </h1>
          <BiX size={25} />
        </div>

        <div className="my-4 flex flex-col space-y-3">
          <input
            value={postData.user}
            name="user"
            onChange={onChangeFunc}
            className="input-style p-2 border rounded-md"
            type="text"
            placeholder="User"
          />
          <input
            value={postData.title}
            name="title"
            onChange={onChangeFunc}
            className="input-style p-2 border rounded-md"
            type="text"
            placeholder="Title"
          />
          <input
            value={postData.description}
            name="description"
            onChange={onChangeFunc}
            className="input-style p-2 border rounded-md"
            type="text"
            placeholder="Description"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer
        hover:bg-indigo-800 rounded-sm"
        >
          {modal?.updateId ? "Update" : "Share"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
