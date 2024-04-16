import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Forgotpassword = ({ baseURL }) => {
    const [username, setUsername] = useState('');
    const [responseMsg, setResponseMsg] = useState('')
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
    // Sending the username as payload to the backend and generating the email
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { username };
        // console.log(payload);
        const url = `${baseURL}forgotpassword`
        // console.log(url);
        try {
            const res =  await axios.post(url, payload)
                setResponseMsg(res.data.message)
            } catch (error) {
            console.error('Error sending reset password link:', error);
            console.log(error);
        }
      

    }
    return (
        <div className='fixed left-1/3 top-1/3 me-auto p-2 drop-shadow-2xl w-2/5 border-2 rounded-lg h-2/6   border-solid border-slate-500 bg-green-500'>
          
                
            <div className='text-4xl text-center'>Forgot Password</div>
            <form onSubmit={handleSubmit} className='mt-4'>
                    <label name='username' className='mt-6 font-semibold text-lg ms-3'>
                        Username:
                        <input className='h-10 font-normal ms-2  w-4/5 pr-12 pl-3 py-2 border-2 border-solid border-blue-100 shadow-xl rounded-md' type='email' name='username' placeholder='Enter your registered mail id' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                </label>
                    <button className='mt-6 font-bold text-xl rounded-lg ms-6 bg-white shadow-xl p-2' type='submit'>Send Reset Password Link</button>
                        <Link className='pt-2 ms-6 text-lg font-semibold text-white decoration-sky-900 underline underline-offset-4' to={'/login'}>Click here to go to Login page</Link>
                    <div className='mb-12 mt-4 font-semibold ms-6'>{responseMsg}
                    </div>
            </form>
            
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

export default Forgotpassword;