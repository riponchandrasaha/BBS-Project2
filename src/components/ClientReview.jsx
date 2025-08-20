import Marquee from "react-fast-marquee";


const reviews = [
  {
    id: 1,
    rating: 4,
    text: "Using AI in our recruitment has significantly improved efficiency, minimized bias, and allowed us to source talent globally.",
    name: "Annette Black",
    role: "CTO",
    avatar: "/men.svg",
  },
  {
    id: 2,
    rating: 5,
    text: "This platform streamlined our workflow and helped us scale internationally.",
    name: "John Doe",
    role: "CEO",
    avatar: "/men.svg",
  },
  {
    id: 3,
    rating: 3,
    text: "Good experience overall, though there’s room for improvement in analytics.",
    name: "Sarah Lee",
    role: "HR Manager",
    avatar: "/men.svg",
  },
];

const ClientReview = () => (
  <Marquee className="mt-5">
    {reviews.map((review) => (
      <div
        key={review.id}
        className="
          w-[90%] sm:w-[380px] md:w-[400px] lg:w-[427px] 
          h-[300px] sm:h-[320px] md:h-[340px] lg:h-[292px] 
          bg-[#2B2625] bg-gradient-to-l from-[rgba(241,100,51,0.28)] to-[rgba(139,58,29,0)]
          p-6 md:p-10 
          rounded-[16px] 
          mx-3 sm:mx-4 flex flex-col
        "
      >
        {/* Rating */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name={`rating-${review.id}`}
              className="mask mask-star-2 bg-orange-400"
              aria-label={`${star} star`}
              defaultChecked={review.rating === star}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-white mt-6 text-sm md:text-base">{review.text}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-3">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-white">
              <p className="text-sm md:text-base">{review.name}</p>
              <p className="text-xs opacity-80">{review.role}</p>
            </div>
          </div>

          <div>
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.6621 12H19.3242V14.9297C19.3242 16.5456 18.0105 17.8594 16.3945 17.8594H16.0283C15.884 17.859 15.7409 17.8872 15.6075 17.9423C15.474 17.9974 15.3528 18.0783 15.2507 18.1804C15.1486 18.2825 15.0677 18.4037 15.0126 18.5372C14.9575 18.6706 14.9293 18.8137 14.9297 18.958V21.1553C14.9293 21.2997 14.9575 21.4427 15.0126 21.5761C15.0677 21.7096 15.1486 21.8308 15.2507 21.9329C15.3528 22.035 15.474 22.1159 15.6075 22.171C15.7409 22.2261 15.884 22.2543 16.0283 22.254H16.3945C20.4412 22.254 23.7188 18.9764 23.7188 14.9297V3.94336C23.7188 2.73028 22.7346 1.74609 21.5215 1.74609H15.6621C14.449 1.74609 13.4648 2.73028 13.4648 3.94336V9.80274C13.4648 11.0158 14.449 12 15.6621 12ZM2.47852 12H6.14062V14.9297C6.14062 16.5456 4.82686 17.8594 3.21094 17.8594H2.84475C2.70038 17.859 2.55735 17.8872 2.4239 17.9423C2.29045 17.9974 2.1692 18.0783 2.06711 18.1804C1.96502 18.2825 1.88411 18.4037 1.82902 18.5372C1.77393 18.6706 1.74575 18.8137 1.74609 18.958V21.1553C1.74575 21.2997 1.77393 21.4427 1.82902 21.5761C1.88411 21.7096 1.96502 21.8308 2.06711 21.9329C2.1692 22.035 2.29045 22.1159 2.4239 22.171C2.55735 22.2261 2.70038 22.2543 2.84475 22.254H3.21094C7.25756 22.254 10.5352 18.9764 10.5352 14.9297V3.94336C10.5352 2.73028 9.55097 1.74609 8.33789 1.74609H2.47852C1.26544 1.74609 0.28125 2.73028 0.28125 3.94336V9.80274C0.28125 11.0158 1.26544 12 2.47852 12Z"
                fill="#F16334"
              />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </Marquee>
);

export default ClientReview;
