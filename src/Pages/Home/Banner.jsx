import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, A11y]}
      spaceBetween={30}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg "
          src="https://i.postimg.cc/vH27dsND/b2.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg opacity-50"
          src="https://i.postimg.cc/SNxL5sVw/b1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/YC46rs5R/b3.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/s275SZDZ/b4.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/PxMZVsDX/b5.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
