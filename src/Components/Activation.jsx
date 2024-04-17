import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ActivationPage = () => {
  const [responseMsg, setResponseMsg] = useState("");
  const [error, setErrorMsg] = useState("");
  const { userId, token } = useParams(); // Extract activation token from URL
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const activateUser = async () => {
      try {
        const response = await axios.post(
          `https://urlshort-backend-r5lw.onrender.com/api/activation/${userId}/${token}`
        );
        // Handle successful activation
        setTimeout(() => {
          setIsLoading(false);
          setResponseMsg(response.data.message); // Or show a success message to the user
        }, 3000);
      } catch (error) {
        // Handle activation error
        setTimeout(() => {
          setIsLoading(false);
          setErrorMsg(error.response.data.message);
          // console.error('Error activating account:', error);
        }, 3000);
      }
    };
    activateUser();
  }, [userId, token]);

  return (
    <div>
      <h2 className="text-white text-center font-bold text-2xl mt-12 uppercase">
        Activation Page
      </h2>
      <div className="container flex flex-col justify-center items-center w-full h-[30rem]">
        <div className="ms-12">
          <div className="  bg-5 ">
            {isLoading && (
              <>
                <div className="text-4 flex flex-col items-center">
                  Please wait...
                </div>
                <div className="loader  bg-white my-4"></div>
              </>
            )}
            {!isLoading && responseMsg && (
              <div className="text-purpureus text-xl">{responseMsg}</div>
            )}
            {!isLoading && error && (
              <div className="w-full flex flex-col justify-center items-center">
                <div className="text-red-500 text-xl font-semibold uppercase">
                  {error}
                </div>
                <img
                  src="https://media.discordapp.net/attachments/1018124413176135700/1227129402442256477/wired-outline-1140-error.gif?ex=66274850&is=6614d350&hm=b647df4af132f14dd37e6b98de6169d58f41ca887866f11f6d1907d8256d3338&=&width=670&height=670"
                  className=""
                  width={200}
                  alt="error"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
