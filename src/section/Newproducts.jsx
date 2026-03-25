import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../css/newproducts.css'

const products = {
  남성: [
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 4.0, reviews: 1, img: './newproducts/man1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/man10.webp' },
  ],
  여성:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/woman10.webp' },
  ],
  아동:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kid10.webp' },
  ],
  패션잡화:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fashion10.webp' },
  ],
  주방용품:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/kitchen10.webp' },
  ],
  패브릭:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fabric10.webp' },
  ],
  '수납/정리':[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/clean10.webp' },
  ],
  가구:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/furniture10.webp' },
  ],
  생활용품:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/living7.webp' },
  ],
  '가전/디지털':[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/digital10.webp' },
  ],
  문구:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/fancy10.webp' },
  ],
  뷰티:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/beauty10.webp' },
  ],
  간편조리:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/cook10.webp' },
  ],
  스낵:[
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack1.webp' },
    { id: 2, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack2.webp' },
    { id: 3, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack3.webp' },
    { id: 4, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack4.webp' },
    { id: 5, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack5.webp' },
    { id: 6, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack6.webp' },
    { id: 7, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack7.webp' },
    { id: 8, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack8.webp' },
    { id: 9, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack9.webp' },
    { id: 10, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 0.0, reviews: 0, img: './newproducts/snack10.webp' },
  ]
}

const categories = ['남성','여성','아동','패션잡화','주방용품','패브릭','수납/정리','가구','생활용품','가전/디지털','문구','뷰티','간편조리','스낵']

const Newproducts = () => {
  const [activeCategory, setActiveCategory] = useState('남성')
  return (
      <div className='newproducts_section'>
     <h2>신상품이 입고 되었어요</h2>
      <div className='newproducts_category'>
        {categories.map(category => (
          <li
            key={category}
            className={activeCategory === category ? 'category_item active' : 'category_item'}
            onClick={() => setActiveCategory(category)}
          >{category}
          </li>
          ))}
      </div>


      <div className='newproducts_slider'>
  <Swiper
    modules={[Navigation]}
    navigation={true}
    slidesPerView={2}
    spaceBetween={16}
  >
    {products[activeCategory]?.map(item => (
      <SwiperSlide key={item.id}>
        <div className='product_card'>
          <img src={item.img} alt={item.name} className='product_imgs'/>
          <p className='product_name'>{item.name}</p>
          <div className='product_textbox'>
          <p className='product_price'>{item.price.toLocaleString()}원</p>
          <div className='star'><img src='./newproducts/star.svg'/><p className='product_rating'> {item.rating}({item.reviews})</p></div>
          </div>
        </div>
      </SwiperSlide>
    ))}
    <SwiperSlide>
      <div className='last_slide'>
        <p>신상품 모아보기</p>
        <span>→</span>
      </div>
    </SwiperSlide>
  </Swiper>
</div>
    </div>
  )
}

export default Newproducts
