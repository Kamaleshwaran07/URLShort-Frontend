import axios from "axios";
import React, { useEffect, useState } from "react";

const Urldetails = ({ userId, baseURL, urldetails }) => {
  const [responseMsg, setResponseMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [urlCount, setUrlCount] = useState("");
  const [url, setUrl] = useState([]);
  // const [data, setData] = useState([]);
  // console.log(userId);
  useEffect(() => {
    fetchData();
  }, [urldetails]);
  const fetchData = async () => {
    const response = await axios.post(`${baseURL}geturlcount/${userId}`);
    // const res = await axios.post(`${baseURL}getcreatedurls/${userId}`);
    try {
      // setUrl(res.data.urls)
      // console.log(response);
      // setData(response.data);
      // console.log(response.data);
      setUrlCount(response.data.urlLength);
      // console.log(setUrlCount);
      // setUrl(urldetails);
      // console.log(setUrl);
      setResponseMsg(response.data.message);
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };
  // fetchData()
  return (
    <div className="ms-6 relative">
      {/* {data} */}
          <div className="text-1 text-lg mb-6 font-semibold flex flex-row justify-center items-center">
              No. of short URL's created: {" "} <span className="text-4 ms-2 bg-2 block w-6 rounded-sm text-center">
              {urlCount}
                  
              </span>
              
          </div>
      <table className="border-5 ml-auto mr-auto ">
        <tr className="bg-5 border-5">
          {/* <th>S.no</th> */}
          <th className="text-2 text-xl border-3 border-[3px] uppercase">Long URL</th>
          <th className="ms-12 text-2 text-xl border-3 border-[3px] uppercase">Short URL</th>
        </tr>
        {urldetails.map((item, index) => {
          return (
            <tr className="text-4 bg-5 border-3 border-[3px]" key={index}>
              {/* <td>1</td> */}
              <td className="border-3 border-[3px] p-1">{item.Longurl}</td>
              <td className="border px-4"><a href={`${baseURL}${item.Shorturl}`} target='_blank'>{baseURL}{item.Shorturl}</a></td>
            </tr>
          );
        })}
      </table>
      {/* {errorMsg} */}
      {responseMsg && (
        <div className="text-1">{responseMsg}</div>
      )}
    </div>
  );
};

export default Urldetails;
