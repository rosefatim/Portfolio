import React from 'react'
import "./Experience.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Rating from '@mui/material/Rating';


const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Tools </h2>

      <div className='container experience__container'>
          <div className='experience__front-end'>

            <h3>Frontend Developpement</h3>
            <div className='experience__content'>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                  <h4>HTML</h4>
                  <Rating name="half-rating-read" defaultValue={4} max={4} precision={0.5} readOnly />
                </div> 
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>CSS</h4>
                <Rating name="half-rating-read" defaultValue={3}  max={3} precision={0.5} readOnly />
                </div>          
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>Javascript</h4>
                <Rating name="half-rating-read" defaultValue={3} max={3} precision={0.5} readOnly />
                </div>
              </article>
              
              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>ReactJs</h4>
                <Rating name="half-rating-read"defaultValue={3} max={3} precision={0.5} readOnly />
                </div>          
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>Bootstrap</h4>
                <Rating name="half-rating-read" defaultValue={3} max={3} precision={0.5} readOnly />
                </div>            
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>Tailwindcss</h4>
                <Rating name="half-rating-read" defaultValue={3} max={3} precision={0.5} readOnly />
                </div>            
              </article>
            </div>
        
          </div>

          <div className='experience__backend'>
            <h3>Backend Developpement</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>NodeJs</h4>
                <Rating name="half-rating-read" defaultValue={2} max={2} precision={0.5} readOnly />
                </div>               
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>ExpressJs</h4>
                <Rating name="half-rating-read" defaultValue={2} max={2} precision={0.5} readOnly />
                </div>               
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>mongoDB</h4>
                <Rating name="half-rating-read" defaultValue={2} max={2} precision={0.5} readOnly />
                </div>          
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                <h4>PHP</h4>
                <Rating name="half-rating-read" defaultValue={4} max={4} precision={0.5} readOnly />
                </div>
              </article>

              <article className='experience__details'>
                <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
                <div>
                  <h4>MySQL</h4>
                  <Rating name="half-rating-read" defaultValue={4} max={4} precision={0.5} readOnly />
                </div>               
              </article>
            </div>
                  
          </div>
    
      </div>

    </section>
  )
}

export default Experience
