import React from 'react';

const Card3 = () => {
    return (
        <div className='p-[60px_140px]'>
            <div className=' flex flex-col items-center justify-center text-center gap-6'>
                <div className="p-[4px_16px] bg-[#332C2A] rounded-[100px] w-[94px] text-[#F16334] h-[24px] text-[14px] flex flex-wrap gap-[6px] items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                        <path
                            d="M4.1449 15.0453C4.55709..."
                            fill="#F16334"
                        />
                    </svg>
                    Offers
                </div><p className="text-[48px] text-white">Featured <span className=' text-[#F16334]'>Games</span> </p>
                <p className="text-[16px] text-white">
                    Discover our handpicked selection of premium gaming experiences
                </p>

            </div>

            <div className='p-[60px_140px]' >
                <div className="carousel ">
                    {/* Slide 1 */}
                    <div id="item1" className="carousel-item w-full flex gap-2 center">
                        <img
                            src="../../public/Frame 222.png"
                            className="w-full h-[640px]"
                        />

                        <img
                            src="../../public/Frame 222.png"
                            className="w-full h-[640px]"
                        />
                        <img
                            src="../../public/Frame 222.png"
                            className="w-full h-[640px]"
                        />

                    </div>

                    {/* Slide 2 */}
                    <div id="item1" className="carousel-item w-full flex gap-2 center">
                        <img
                            src="../../public/Frame 222.png"
                            className="w-full h-[640px]"
                        />

                        <img
                            src="../../public/Frame 222.png"
                            className="w-full h-[640px]"
                        />
                        <img
                            src="../../public/Frame 222.png"
                            className="w-full h-[640px]"
                        />

                    </div>

                </div>

                {/* Navigation buttons */}
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn rounded-[3px] w-[18px] h-[6px] hover:bg-[#F16334]"></a>
                    <a href="#item2" className="btn rounded-[3px] w-[18px] h-[6px] hover:bg-[#F16334]"></a>
                    <a href="#item1" className="btn rounded-[3px] w-[18px] h-[6px] hover:bg-[#F16334]"></a>
                    <a href="#item2" className="btn rounded-[3px] w-[18px] h-[6px] hover:bg-[#F16334]"></a>
                </div>

            </div>


        </div>
    );
};

export default Card3;