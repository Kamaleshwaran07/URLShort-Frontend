import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signin = ({ baseURL }) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  // const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (responseMsg) {
      setShowToast(true);
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Adjust the duration as needed
      return () => clearTimeout(timeout);
    }
  }, [responseMsg]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payloads = { username, name, password, location };
    // console.log(username, name, password, location)
    try {
      const res = await axios.post(`${baseURL}signup/`, payloads);

      setResponseMsg(res.data.message);
      setUsername('')
      setName('')
      setPassword('')
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setResponseMsg(error.response.data.message);
      } else setResponseMsg("An error occurred");
    }
  };

  return (
    <div className="container flex flex-row ">
      {/* <div className=' '> */}
      <form
        onSubmit={handleSubmit}
          className="form flex flex-col  mt-32 ml-[42.5%] mr-auto  p-6 w-[26rem]  bg-white  rounded-xl"
      >
        <h2 className="text-center text-2xl font-bold ">Signup</h2>

        <label
          name="email"
          className="text-xl text-2 font-semibold mt-4"
        >
          E-Mail ID <br />
          <input
            name="email"
            title="Invalid email address"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Enter your E-mail id"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-10 font-normal  w-full bg-white text-white pr-12 text-lg pl-3 py-2 border-2 2 border-slate-500/35 focus:bg-5 shadow-xl rounded-md"
            required
          />
        </label>
        <label
          name="name"
          className="text-xl text-purpureus font-semibold mt-4"
        >
          Name <br />
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 font-normal  w-full pr-12 pl-3 py-2 border-2  border-slate-500/35  bg-white shadow-xl rounded-md"
            required
          />
        </label>

        <label
          name="password"
          className="text-xl text-purpureus font-semibold mt-4"
        >
          Password
          <br />
          <div className="relative mt-2">
                      <button
                          type="button"
              className="text-gray-400 absolute inset-y-0 mr-0 right-4 active:text-gray-600"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
                      > {isPasswordHidden ? (
                          <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                          </svg>
                      ) : (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                          </svg>
                      )}</button>
            <input
              type={isPasswordHidden ? "password" : "text"}
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pr-8 pl-3 py-2 text-gray-500 bg-white font-normal outline-none border-2 2 border-slate-500/35  focus:border-indigo-600 shadow-xl rounded-lg"
              required
            />
          </div>
        </label>

        <p className="mt-3 ms-auto text-5 font-semibold">
          Already have an account? {" "}
          <Link to="/login" className="text-blue-500 hover:text-1 underline text-lg">
            Login here
          </Link>
        </p>
        <button
          type="submit"
          className="mt-4 font-bold text-xl rounded-lg ms-auto me-auto bg-5 text-white hover:text-purpureus drop-shadow-lg hover:ring-4 shadow-xl w-36 p-2"
        >
          Sign up
        </button>
      </form>
      {/* </div> */}
      {/* <div className='h-full w-2/5 mt-32'>
            <img src='https://media.discordapp.net/attachments/1018124413176135700/1220011153237737582/Saly-11.png?ex=660d62ed&is=65faeded&hm=15b5a9d4dbcd134851362cb29b186627ace13e6c0225392d9892e3811abacca4&=&format=webp&quality=lossless&width=442&height=420' className='signin' />


        </div> */}
      <div>
        {showToast && (
          <div className="toast bg-blue-500 text-white py-2 px-4 rounded-md fixed top-16 right-5 transition duration-500">
            {responseMsg}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
