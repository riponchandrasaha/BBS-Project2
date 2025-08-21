const games = [
  {
    title: "Valorant",
    subtitle: "Season 4 reloaded",
    image: "/2.png"
  },
  {
    title: "CS:GO",
    subtitle: "New Operation",
    image: "/1.png"
  },
  {
    title: "Apex Legends",
    subtitle: "Defiance Update",
    image: "/3.png"
  },
  {
    title: "PUBG",
    subtitle: "Survivor Pass",
    image: "/5.png"
  },{
  title: "Valorant",
    subtitle: "Season 4 reloaded",
    image: "/6.png"
  },
  {
    title: "CS:GO",
    subtitle: "New Operation",
    image: "/7.png"
  },
  {
    title: "Apex Legends",
    subtitle: "Defiance Update",
    image: "/3.png"
  },
  {
    title: "PUBG",
    subtitle: "Survivor Pass",
    image: "/4.png"
  },
  {title: "Valorant",
    subtitle: "Season 4 reloaded",
    image: "/2.png"
  },
  {
    title: "CS:GO",
    subtitle: "New Operation",
    image: "/1.png"
  },
  {
    title: "Apex Legends",
    subtitle: "Defiance Update",
    image: "/3.png"
  },
  {
    title: "PUBG",
    subtitle: "Survivor Pass",
    image: "/4.png"
  },
];


// local data import

const Background = () => {
  return (
    <div className="p-[40px_140px_60px_140px] sm:p-4 md:p-6 lg:p-[24px_140px] ">
      {/* Cards Grid */}
      <div className="flex flex-wrap gap-[24px] justify-center">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative w-80 h-64 rounded-xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
            />

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-[rgba(48,51,57,0.6)] p-4 flex flex-col gap-1 rounded-b-xl">
              <h2 className="text-white text-lg font-semibold">{game.title}</h2>
              <p className="text-white text-sm">{game.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="flex justify-center items-center">
        <button className="p-[16px_32px] flex justify-center items-center bg-[#130202] text-amber-50 rounded-[50px] gap-8 mt-[48px] border-[1px] border-[#F16334]">
          Explore All Games
        </button>
      </div>
    </div>
  );
};

export default Background;
