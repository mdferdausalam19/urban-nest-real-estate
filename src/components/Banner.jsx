import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const bannerImages = [
    "/images/single_family_home.jpg",
    "/images/townhouse.jpg",
    "/images/apartment.jpg",
    "/images/student_housing.jpg",
    "/images/senior_community.jpg",
    "/images/vacation_rental.jpg",
    "/images/small_apartment.jpg",
    "/images/mountain_cabin.jpg",
  ];

  return (
    <div className="w-full aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] mt-5">
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
        navigation={true}
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
