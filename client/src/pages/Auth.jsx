import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center ">
      <div className="w-full max-w-sm bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl text-indigo-700 font-bold text-center">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              type="text"
              placeholder="Username"
              className="input-style p-2 border border-gray-300 rounded"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            type="text"
            placeholder="Email"
            className="input-style p-2 border border-gray-300 rounded"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            type="password"
            placeholder="Password"
            className="input-style p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="text-red-500 text-xs cursor-pointer mb-4 text-center">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Daha önce giriş yaptınız mı?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>
              Kayıt olmak için tıklayınız
            </span>
          )}
        </div>
        <div
          onClick={authFunc}
          className="cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded transition duration-200"
        >
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
