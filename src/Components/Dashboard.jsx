import axios from "axios";
import React, { useEffect, useState } from "react";
import Urldetails from "./Urldetails";

const Dashboard = ({ userData, baseURL }) => {
  const user = userData;
  const userId = user ? user._id : null;
  // console.log(userId);
  const [longurl, setLongurl] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const [data, setData] = useState([])
  
  // const fetchData = async () => {
  //   await axios.post(`${baseURL}geturlcount/${userId}`)
  //     .then((response) => setData(response.data))
  //     .catch((error) => setErrorMsg(error.response.data.message))
  // }
  // fetchData()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload =  {longurl} ;
    console.log(payload);
    try {
    const response = await axios.post(`${baseURL}createshorturl/${userId}`, payload);
      setResponseMsg(response.data.message);
      setShortUrl(response.data.shorturl);
      setLongurl('')
    } catch (err) {
      setErrorMsg(err.response.data.message);
    }
  };
  

  return user ? (
    <div className="relative">
      <h3 className="text-4 text-xl text-end  me-5 mt-2">
        User: <span className="text-1">{userData.name}</span>
      </h3>
      <hr className="shadow-xl" />
      {/* <div className=""> */}
        <form className="ml-6 my-4 flex flex-col w-[30em] border-[2px] border-4 p-2"  onSubmit={handleSubmit}>
          <label className="text-4" name="longurl">
            <h4 className="text-4 text-xl font-semibold uppercase">
              Create your short URL here
            </h4>
            <input
              name="longurl"
              placeholder="Paste your long url here"
              value={longurl}
              type="text"
              onChange={(e) => setLongurl(e.target.value)}
              className="bg-5 shadow-3xl w-96 p-2 focus:shadow-inner focus:shadow-2/95 rounded mt-6 shadow-2/80"
            />
          </label>
          <button
            type="submit"
            className="text-4 font-semibold mt-6 w-36  border-2 h-10 border-2-400 rounded-md p-1 bg-5"
          >
            Create Short URL
          </button>
        </form>
      {/* </div> */}
      <div className="absolute ms-6 mb-6 w-[30em] h-[8em] p-2 right-[10em] top-[4em] border-2 border-[2px]">
        <div className="text-3 uppercase text-lg text-center">Your Short URL will appear here</div>
        <h4 className="text-4">{responseMsg}</h4>
        {shortUrl ?
      <a className="text-4">{baseURL}{shortUrl}</a>
          :
          <><div className="text-red-500 text-xl uppercase text-center">Create short url</div></>
        }

      </div>

      <Urldetails userId={userId} baseURL = {baseURL} />
      
    
    </div>
  ) : (
    <>
      <div className="text-red-400 uppercase flex items-center justify-center h-[600px]">
        <img
          src="https://media.discordapp.net/attachments/1018124413176135700/1228545611192729652/wired-lineal-1140-error.gif?ex=662c6f42&is=6619fa42&hm=6189a496554b97d93eea88574f7c70df7864fbbe34bdb12793a7c10acfbdeedc&=&width=480&height=480"
          width={50}
          className="mb-2 me-2"
          alt="error"
        />{" "}
        UserData not found.{" "}
        
          <a
          className="text-mindaro ms-4 underline underline-offset-4"
          href="/login"
        >
          Login again to continue
        </a>
      </div>
    </>
  );
};

export default Dashboard;
