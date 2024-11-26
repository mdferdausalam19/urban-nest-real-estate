import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const bannerImages = [
    "/images/single_family_home.webp",
    "/images/townhouse.webp",
    "/images/apartment.webp",
    "/images/student_housing.webp",
    "/images/senior_community.webp",
    "/images/vacation_rental.webp",
    "/images/small_apartment.webp",
    "/images/mountain_cabin.webp",
  ];

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] mt-5 z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full rounded-lg"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
