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
          src="https://i.postimg.cc/tCyFdp7p/banner1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/5tvtkQkG/banner3.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/QN6jmqdC/banner4.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/bwP8NV66/banner5.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-lg"
          src="https://i.postimg.cc/VNBJkbBt/banner6.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
