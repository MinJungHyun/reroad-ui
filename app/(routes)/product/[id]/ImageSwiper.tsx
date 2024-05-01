'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ImageSwiper({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images &&
          images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Image-${index}`} className="w-full" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

