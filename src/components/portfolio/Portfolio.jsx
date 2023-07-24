import React from 'react'
import "./portfolio.css"

import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"



import { Pagination  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    image: IMG1,
    title: "portfolio item title",
    github:"https://github.com" ,
    demo : "https://dribbble.com/Alien_pixels",
  },
  {
    id:2,
    image: IMG2,
    title: "portfolio item title",
    github:"https://github.com" ,
    demo : "https://dribbble.com/Alien_pixels",
  },
  {
    id:3,
    image: IMG3,
    title: "portfolio item title",
    github:"https://github.com" ,
    demo : "https://dribbble.com/Alien_pixels",
  },
  {
    id:4,
    image: IMG4,
    title: "portfolio item title",
    github:"https://github.com" ,
    demo : "https://dribbble.com/Alien_pixels",
  },
  {
    id:4,
    image: IMG5,
    title: "portfolio item title",
    github:"https://github.com" ,
    demo : "https://dribbble.com/Alien_pixels",
  },
  {
    id:5,
    image: IMG6,
    title: "portfolio item title",
    github:"https://github.com" ,
    demo : "https://dribbble.com/Alien_pixels",
  },

]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>item portfolio</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map((item) =>{
            return(
              <article key={item.id} className="portfolio__item">
                <div classname="portfolio__item-image">
                  <img src={item.image}  alt="portfolio1" />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={item.github} className='btn' target='_blank' rel="noreferrer"> Github  </a>
                  <a href={item.demo} className='btn btn-primary' target='_blank' rel="noreferrer"> live demo  </a>
                </div>
              </article>
            )
            
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio
