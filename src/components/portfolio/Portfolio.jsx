import React from 'react'
import "./portfolio.css"

import IMG1 from "../../assets/Youtube_logo.png"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/facebook_logo.png"
import IMG4 from "../../assets/bantoo.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: IMG4,
    title: "Bantoo logiel SIRH",
    github: "https://github.com",
    demo: "https://bantoo.ci/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Youtube clone",
    github: "https://github.com/rosefatim/myYoutube",
    demo: "https://youtube-clonebyme.netlify.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "ATS web site",
    github: "https://github.com",
    demo: "https://site-ats.netlify.app/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Facebook clone",
    github: "https://github.com/rosefatim/facebook-next",
    demo: "https://dribbble.com/Alien_pixels",
  },

  {
    id: 5,
    image: IMG5,
    title: "portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    image: IMG6,
    title: "portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },

]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My project</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map((item) => {
            return (
              <article key={item.id} className="portfolio__item">
                <div classname="portfolio__item-image">
                  <img src={item.image} width={200} height={188} alt="portfolio1" />
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
