import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ baseURL, setUserData, setIsAuthenticated }) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  // Toast

  useEffect(() => {
    if (responseMsg || errorMsg) {
      setShowToast(true);
      const timeout = setTimeout(() => {
        setIsLoading(false)
        setShowToast(false);
      }, 5000); // Adjust the duration as needed
      return () => clearTimeout(timeout);
    }
  }, [responseMsg, errorMsg]);
  // Logging in
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payloads = { username, password };
    // console.log(username, password)
    try {
      const response = await axios.post(`${baseURL}login/`, payloads)
      setIsLoading(true)
      setResponseMsg(response.data.message)
      setUserData(response.data.user)
      setIsAuthenticated(true)
      console.log(setUserData);
      setTimeout(() => {
        navigate("/dashboard")
        
      }, 3000)
    }

    catch (error) {
      setIsLoading(false)
      setErrorMsg(error.response.data.message)
    };
  };
  return (
    <div>
      
      {
        isLoading && (
          <div className="flex flex-col w-scree h-screen items-center justify-center pb-[9rem]">
            <div className="loginLoader">
              <div className="half"></div>
              <div className="half"></div>
            </div>
           
            <h3 className="text-2 text-2xl mt-6">Logging you in</h3>
          </div>
        )}
      {!isLoading && (

        <form onSubmit={handleSubmit}>
          <div className="container flex flex-row justify-center">
            <div className="form flex flex-col h-full w-[24rem] p-6 ms-32 mt-40 bg-white  rounded-xl">
              <h2 className="text-center text-2xl font-bold ">Login</h2>

              <label name="email" className="text-xl font-semibold mt-4">
                E-mail ID
                <br />
                <input
                  name="email"
                  type="email"

                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  placeholder="Enter your e-mail id"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-10 font-normal w-full shadow-xl pr-12 pl-2 py-2 border-2 2 border-slate-500/35 border-solid border-blue-100 rounded-md"
                />
              </label>
              <label name="password" className="text-xl font-semibold mt-4">
                Password
                <br />
                <div className="relative mt-2">
                  <button
                    type="button"
                    className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                    onClick={() => setPasswordHidden(!isPasswordHidden)}
                  >
                    {isPasswordHidden ? (
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
                    )}
                  </button>
                  <input
                    type={isPasswordHidden ? "password" : "text"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pr-12 pl-3 py-2 text-gray-500  font-normal outline-none border-2 border-slate-500/35 focus:bg-5 focus:border-indigo-600 shadow-xl rounded-lg"
                  />
                </div>
              </label>
              {/* <div>{responseMsg}</div> */}
              <Link
                to={"/forgotpassword"}
                className="font-semibold ms-auto text-5 underline-offset-2 underline mt-4"
              >
                Forgot Password?
              </Link>
              <button
                type="submit"
                className="mt-2 font-bold text-xl rounded-lg ms-auto me-auto bg-5 text-4 shadow-xl w-36 p-2"
              >
                Login
              </button>
              <p className="mt-3 ms-auto text-5 font-semibold">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-blue-500 hover:text-1 underline underline-offset-2"
                >
                  Sign up here
                </Link>{" "}
              </p>
            </div>
            {/* <div className="h-4/6 p-6 mt-28">
            <img
              src="https://media.discordapp.net/attachments/1018124413176135700/1220017854460592158/Saly-10.png?ex=660d692b&is=65faf42b&hm=9f0278c31dba9c887340bceee445488c8cf86db7fae3e7dc6a8c5fe740b6ac69&=&format=webp&quality=lossless&width=670&height=670"
              className="login"
            />
          </div> */}
            <div>
            </div>
          </div>
        </form>
      )
      }
      {!isLoading && responseMsg &&
        <div>
          {showToast && (
            <div className="toast bg-blue-500 text-white py-2 px-4 rounded-md fixed top-16 right-5 transition duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="13.25 13.25 37.5 37.5" enable-background="new 0 0 64 64">
                <g>
                  <g>
                  </g>

                  <circle fill="#FFFFFF" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="32" cy="32" r="17.5" />
                </g>
                <g>

                  <polyline fill="none" stroke="#536DFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="   21.5,32 28.5,39 42.5,25  " />
                </g>
              </svg><br /> {responseMsg}
            </div>
          )}

 
         
        
        </div>}
      {!isLoading && errorMsg &&
        <div>
          {showToast && (
            <div className="toast flex flex-row items-center text-red-600 bg-3 py-2 px-4 rounded-md fixed top-16 right-5 transition duration-500">
              <img
                src="https://media.discordapp.net/attachments/1018124413176135700/1228545611192729652/wired-lineal-1140-error.gif?ex=662c6f42&is=6619fa42&hm=6189a496554b97d93eea88574f7c70df7864fbbe34bdb12793a7c10acfbdeedc&=&width=480&height=480"
                width={50}
                className=" me-2"
                alt="error"
              />
              <div className="text-red-600 font-bold">{errorMsg}</div>
            </div>
          )}




        </div>}
      </div>
  );
};


export default Login;
