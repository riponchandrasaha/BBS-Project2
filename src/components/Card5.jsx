import React from 'react';

const Card5 = () => {
    return (
        <div className='p-[60px_140px] '>

            <div className=' flex items-center justify-between bg-[#2B2625] bg-gradient-to-l from-[rgba(241,100,51,0.28)] to-[rgba(139,58,29,0)] p-[32px] rounded-[12px]'>

                <div>
                    <p className='text-white'>View more articles</p>
                    <p className='text-[32px] text-white'>Visit our blog</p>
                </div>

                <div className=' w-[24px] h-[24px] rounded-[50px] bg-[#F16334] backdrop-blur-[10px] '>

                    <svg className='gap-[8px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9.00002 19.7498C8.80802 19.7498 8.61599 19.6768 8.46999 19.5298C8.17699 19.2368 8.17699 18.7618 8.46999 18.4688L14.94 11.9988L8.46999 5.52883C8.17699 5.23583 8.17699 4.7608 8.46999 4.4678C8.76299 4.1748 9.23803 4.1748 9.53103 4.4678L16.531 11.4678C16.824 11.7608 16.824 12.2358 16.531 12.5288L9.53103 19.5288C9.38403 19.6768 9.19202 19.7498 9.00002 19.7498Z" fill="white" />
                    </svg>
                </div>



            </div>
        </div>
    );
};

export default Card5;