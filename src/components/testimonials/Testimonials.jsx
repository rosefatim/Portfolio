import React from 'react'
import "./testimonials.css"

import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


import { Pagination  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR1,
    name: "H&M",
    review : "lorem ipsum dolor sit amet, consectetur adip loremvqodj mojvvjov efovezvnzevùoz d difhseqd fiqsfqsfnlksFfiz blbbbv buifaze dike nfef efefrfd fedf  "
  },
  {
    avatar: AVTR2,
    name: "carrefour",
    review : "lorem ipsum dolor sit amet, consectetur adip loremvqodj mojvvjov efovezvnzevùoz d difhseqd fiqsfqsfnlksFfiz blbbbv buifaze dike nfef efefrfd fedf  "
  },
  {
    avatar: AVTR3,
    name: "cap-sud",
    review : "lorem ipsum dolor sit amet, consectetur adip loremvqodj mojvvjov efovezvnzevùoz d difhseqd fiqsfqsfnlksFfiz blbbbv buifaze dike nfef efefrfd fedf  "
  },
  {
    avatar: AVTR4,
    name: "chic shop",
    review : "lorem ipsum dolor sit amet, consectetur adip loremvqodj mojvvjov efovezvnzevùoz d difhseqd fiqsfqsfnlksFfiz blbbbv buifaze dike nfef efefrfd fedf  "
  },
]

const Testimonials = () => {
  return (
    <section id="testimony">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper   
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}         
        className="container testimonials__container">
        {
          data.map((item) => {
            return(  
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar}  alt="" />
              </div>
              <h5>{item.name}</h5>
              <small className="client__review"> {item.review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>            
    </section>
  )
}

export default Testimonials
