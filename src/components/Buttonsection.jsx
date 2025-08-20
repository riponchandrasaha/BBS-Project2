import category from "../pages/Category";


const Buttonsection = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-6">
{/*   <div className="p-[4px_16px] bg-[#332C2A] rounded-[100px] w-[94px] text-[#F16334] h-[24px] text-[14px] flex flex-wrap gap-[6px] items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path
        d="M4.1449 15.0453C4.55709..."
        fill="#F16334"
      />
    </svg>
    Offers
  </div>

  <p className="text-[48px] text-white">Latest Game Offers</p>
  <p className="text-[16px] text-white">
    Discover the newest deals and exclusive offers
  </p>

  <div className="flex gap-2 items-center justify-center">
    <button className="text-white px-3 py-2 bg-[#F16334] rounded-[6px]">All Offers</button>
    <button className="text-white px-3 py-2 rounded-[6px] bg-white/5 backdrop-blur-md">All Offers</button>
    <button className="text-white px-3 py-2 rounded-[6px] bg-white/5 backdrop-blur-md">All Offers</button>
    <button className="text-white px-3 py-2 rounded-[6px] bg-white/5 backdrop-blur-md">All Offers</button>
    <button className="text-white px-3 py-2 rounded-[6px] bg-white/5 backdrop-blur-md">All Offers</button>
  </div> */}
  <div className="p-[4px_16px] bg-[#332C2A] rounded-[100px] w-[94px] text-[#F16334] h-[24px] text-[14px] flex flex-wrap gap-[6px] items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path
        d="M4.1449 15.0453C4.55709..."
        fill="#F16334"
      />
    </svg>
    Offers
  </div>

  <p className="text-[48px] text-white">Latest Game Offers</p>
  <p className="text-[16px] text-white">
    Discover the newest deals and exclusive offers
  </p>
  
 <div className="flex gap-2 items-center justify-center ">
  

{category.map((item)=>(
    <button key={item.name} className="text-white px-3 py-2 hover:bg-[#F16334] bg-white/5 rounded-[6px]">
      {item.name}
    </button>
))}


 </div>


</div>

    );
};

export default Buttonsection;