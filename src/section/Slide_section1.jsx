import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination ,Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay'

import '../css/slidesection1.css'

const Slide_section1 = () => {
    const [current, setCurrent] = useState(1);
    const total = 10;
  return (
     <div className='main_img_swiper'>
      <Swiper
      modules={[Navigation,Pagination,Autoplay]}
      slidesPerView={1}
      navigation={true}
      autoplay={{delay:2500, disableOnInteraction:false}}
      onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
      >
      <SwiperSlide className='slideimg'><img src='./slide1/1.jpg' alt='img1' /></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/2.png' alt='img2'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/3.jpg' alt='img3'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/4.jpg' alt='img4'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/5.jpg' alt='img5'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/6.jpg' alt='img6'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/7.jpg' alt='img7'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/8.png' alt='img8'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/9.jpg' alt='img9'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./slide1/10.jpg' alt='img10'/></SwiperSlide>
      </Swiper>
      <div className='slide_pagination'>{current}　/　{total}</div>
    </div>
  )
}

export default Slide_section1
