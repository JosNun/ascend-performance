import React from 'react'
import Swiper from 'react-id-swiper/lib/custom';

import 'react-id-swiper/src/styles/css/swiper.css';


export default props => {
  
  const params = {
    slidesPerView: 1.5,
    loopedSlides: props.children.length,
    loop: true,
    centeredSlides: true,
    spaceBetween: 15,
  }
  
  return (
    <Swiper {...params}>
      {props.children}
    </Swiper>
  )
}
