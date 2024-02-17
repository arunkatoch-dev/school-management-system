import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import classroom from "../../../../assets/classroom.webP";
import students from "../../../../assets/students.webP";
import library from "../../../../assets/library.webP";

const Slideshow = () => {
  return (
    <section>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        lazy={true.toString()}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper w-full h-[15rem] md:h-[25rem]`}
      >
        <SwiperSlide>
          <img
            src={classroom}
            alt="classroom"
            loading="lazy"
            className="w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={students}
            alt="students"
            loading="lazy"
            className="w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={library}
            alt="library"
            loading="lazy"
            className="w-full h-full "
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slideshow;
