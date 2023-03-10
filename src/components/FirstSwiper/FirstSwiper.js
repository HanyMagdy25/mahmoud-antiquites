import React from "react";
// Import Swiper React components
import "./FirstSwiper.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { swiperData } from "../../utils/data";
import { useWindowInner } from "../../hooks/useWindowInner";

export default function FirstSwiper() {
  const { isMobile } = useWindowInner();
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={60}
        slidesPerGroup={isMobile ? 1 : 3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperData.map((item,index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt="antique" className="firstSwiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
