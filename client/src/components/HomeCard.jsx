import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Yeni ikonlar
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const HomeCard = ({ post }) => {
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(deletePostAction(id));
    toast("Post Deleted", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  const updatePost = (id) => {
    dispatch({ type: "MODAL", payload: { open: true, updateId: id } });
  };

  return (
    <div className="relative w-64 border p-4 rounded-lg shadow-lg bg-white max-sm:mt-4 sm:mx-3 ">
      <div className="font-bold text-lg text-gray-900">
        {/* Title'ı belli bir uzunlukta tutmak için clamp özelliği */}
        <span className="line-clamp-1">{post?.title}</span>
      </div>
      <div className="text-gray-600 text-sm mt-1">
        {/* Açıklamayı belli bir satır uzunluğu ile sınırla */}
        <span className="line-clamp-2 overflow-hidden text-ellipsis">
          {post?.description}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">By: {post?.user}</span>
        <span className="text-xs text-gray-500">
          {new Date(post?.date).toLocaleDateString("tr-TR")}
        </span>
      </div>

      <div className="absolute -top-4 -right-4 flex items-center space-x-2">
        <FaTrash
          onClick={() => deletePost(post._id)}
          size={24}
          className="bg-red-500 rounded-full text-white p-1.5 hover:bg-red-600 transition-all"
        />
        <FaEdit
          onClick={() => updatePost(post._id)} 
          size={24}
          className="bg-green-500 rounded-full text-white p-1.5 hover:bg-green-600 transition-all"
        />
      </div>
    </div>
  );
};

export default HomeCard;
