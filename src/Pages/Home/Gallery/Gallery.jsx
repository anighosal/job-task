import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";
import img9 from "../../../assets/img9.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl mt-6 mb-5 text-teal-400">
        Graduation Gallery
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide className="image-container">
          <img src={img1} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img2} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img3} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img4} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img5} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img6} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img7} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img8} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
        <SwiperSlide className="image-container">
          <img src={img9} alt="Fixed Size Image" className="fixed-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Gallery;
