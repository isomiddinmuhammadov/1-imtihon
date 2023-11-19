// import React, { useRef, useState } from "react";

import "./Carousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

let carouselData = ["https://minio.alifnasiya.uz/shop/catalog/carousel/183/1697264562-1600x491%20uz%20copy.png",  "https://minio.alifnasiya.uz/shop/catalog/carousel/185/1698244324-2%20uzb.jpg", "https://minio.alifnasiya.uz/shop/catalog/carousel/176/1694261957-1694018328-1600%D1%85491%20(2)%20(1).jpg", "https://minio.alifnasiya.uz/shop/catalog/carousel/188/1699607978-%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%205.jpg"];

const Carousell = () => {
  return (
    <div className="container">
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
        className="mySwiper"
      >
        {carouselData.map((i) => (
          <SwiperSlide>
            <img src={i} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousell;
