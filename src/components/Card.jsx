import React from 'react';

function Card() {
    return (
        <div className='p-[60px_140px]' >
            <div className="carousel ">
                {/* Slide 1 */}
                <div id="item1" className="carousel-item w-full flex gap-2 center">
                    <img
                        src="../../public/Offer Card (1).png"
                        className="w-[312px] h-[400px]"
                    />

                    <img
                        src="../../public/Offer Card (2).png"
                        className="w-[312px] h-[400px]"
                    />
                    <img
                        src="../../public/Offer Card (2).png"
                        className="w-[312px] h-[400px]"
                    />
                    <img
                        src="../../public/Offer Card (2).png"
                        className="w-[312px] h-[400px]"
                    />
                    <img
                        src="../../public/Offer Card (2).png"
                        className="w-[312px] h-[400px]"
                    />
                </div>

                {/* Slide 2 */}
                <div id="item2" className="carousel-item w-full flex gap-2">
                    <img
                        src="../../public/Offer Card (1).png"
                        className="w-[312px] h-[400px]"
                    />

                    <img
                        src="../../public/Offer Card (2).png"
                        className="w-[312px] h-[400px]"
                    />
                    <img
                        src="../../public/Offer Card (2).png"
                        className="w-[312px] h-[400px]"
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
    );
};

export default Card;