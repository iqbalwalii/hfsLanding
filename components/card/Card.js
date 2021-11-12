import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import card from "./Card.module.css";
import Image from "next/image";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel]);

export default function App() {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Swiper
        navigation={true}
        pagination={false}
        mousewheel={true}
        spaceBetween={30}
        keyboard={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          390: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        style={{ width: "100%", margin: "2rem 0" }}
      >
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe1.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>NIKE DUNK LOW PREMIUM GS 'HALLOWEEN'</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe3.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>NIKE DUNK LOW SB 'WHEAT DARK PURPLE'</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe2.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>AIR JORDAN 1 RETRO HIGH OG GS 'POLLEN'</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe4.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>ADIDAS YEEZY BOOST 700 'WASH ORANGE'</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe5.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>AIR JORDAN 4 RETRO GS 'LIGHTNING' 2021</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe6.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>AIR JORDAN 3 RETRO GS 'PINE GREEN'</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card.main}>
            <Image
              src="/assets/images/shoe7.png"
              width="160px"
              height="100px"
              alt="product image"
              className="productImg"
            />
            <h5>SUPREME X NIKE AIR FORCE 1 LOW SP 'FLAX'</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
