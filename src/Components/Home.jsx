import React from 'react';

const Home = () => {
    return (
       <>
            
        <div className='w-full h-[36em] flex'> 
           
            <div className='me-auto mt-36 mb-auto ms-auto'>

                    <h2 className='text-4xl text-[#9448BC] font-bold text-center'>SHORT URL</h2>
                    <h4 className='text-1 text-lg mt-4 uppercase'>Tired of sharing long urls. We have got you <span className='text-4'>covered</span></h4>
                </div>

            </div>
            <div className='w-full absolute bottom-[9rem] mt-6 flex flex-col'>
                <div className='ms-auto me-auto'>
            <div className='text-1 mb-4 text-center font-bold text-xl uppercase'>Convert this</div>
            <img className='opacity ' src='https://media.discordapp.net/attachments/1018124413176135700/1226520185939165236/long-url-string-288626373.png?ex=662510ef&is=66129bef&hm=0e4c10195dd2dbd944eb39da4a87ca65b34a75f78135f6282fbbcf4e9171c9c2&=&format=webp&quality=lossless&width=1441&height=188' alt='hero' width={800}  />
                    <div className='text-4 text-xl font-bold uppercase text-center mt-4'>
                        Into this
                    </div>
                    <img src='https://media.discordapp.net/attachments/1018124413176135700/1226520393003569253/120201723821_120201723353_howtoconvertalongurltoashorturlphancyboxnewzealanddigitalagency.jpg?ex=66251121&is=66129c21&hm=505bd2ae30df5270ee57740e2496c2771e13cc8b5964ae7eba29afcc8a310d16&=&format=webp&width=924&height=148' className='ms-24 mt-4'  width={600} alt='intoimage' />
                </div>

            </div>
       </>

       
    );
};

export default Home;