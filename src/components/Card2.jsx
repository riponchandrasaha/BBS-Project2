import React from 'react';

const Card2 = () => {
    return (
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[20px_50px] md:p-[30px_70px] lg:p-[60px_140px]">
  <div className="w-full h-[162px] backdrop-blur-[10px] rounded-[16px] flex flex-col justify-center items-center bg-[#2B2625] bg-gradient-to-l from-[rgba(241,100,51,0.28)] to-[rgba(139,58,29,0)]">
    <h1 className="text-[#FBBEA0] text-[48px] md:text-[56px] lg:text-[64px]">12,450+</h1>
    <p className="text-white text-sm md:text-base">total orders completed</p>
  </div>

  <div className="w-full h-[162px] backdrop-blur-[10px] rounded-[16px] flex flex-col justify-center items-center bg-[#2B2625] bg-gradient-to-l from-[rgba(241,100,51,0.28)] to-[rgba(139,58,29,0)]">
    <h1 className="text-[#FBBEA0] text-[48px] md:text-[56px] lg:text-[64px]">875</h1>
    <p className="text-white text-sm md:text-base">Active service providers</p>
  </div>

  <div className="w-full h-[162px] backdrop-blur-[10px] rounded-[16px] flex flex-col justify-center items-center bg-[#2B2625] bg-gradient-to-l from-[rgba(241,100,51,0.28)] to-[rgba(139,58,29,0)]">
    <h1 className="text-[#FBBEA0] text-[48px] md:text-[56px] lg:text-[64px]">4.7 / 5</h1>
    <p className="text-white text-sm md:text-base">average ratings</p>
  </div>
</div>

    );
};

export default Card2;