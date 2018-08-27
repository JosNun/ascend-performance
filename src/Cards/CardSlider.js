import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper/lib/custom';

import 'react-id-swiper/src/styles/css/swiper.css';

const SliderContainer = styled.div`
  @media screen and (min-width: 720px) {
    margin: 0 15px;
  }
`;

export default props => {
  const params = {
    slidesPerView: 3,
    initialSlide: 1,
    loop: false,
    loopedSlides: 0,
    centeredSlides: true,
    spaceBetween: 15,
    allowTouchMove: false,
    breakpoints: {
      720: {
        allowTouchMove: true,
        slidesPerView: 1.5,
        loopedSlides: props.children.length,
        loop: true,
      },
    },
  };

  return (
    <SliderContainer>
      <Swiper {...params}>{props.children}</Swiper>
    </SliderContainer>
  );
};
