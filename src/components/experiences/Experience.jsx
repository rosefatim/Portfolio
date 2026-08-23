// import React from 'react'
// import "./Experience.css"
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Rating from '@mui/material/Rating';


// const Experience = () => {
//   return (
//     <section id="experience">
//       <h5>What skills i have</h5>
//       <h2>My Tools </h2>

//       <div className='container experience__container'>
//           <div className='experience__front-end'>

//             <h3>Frontend Developpement</h3>
//             <div className='experience__content'>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                   <h4>HTML</h4>
//                   <Rating name="half-rating-read" defaultValue={4} max={4} precision={0.5} readOnly />
//                 </div> 
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>CSS</h4>
//                 <Rating name="half-rating-read" defaultValue={3}  max={3} precision={0.5} readOnly />
//                 </div>          
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>Javascript</h4>
//                 <Rating name="half-rating-read" defaultValue={3} max={3} precision={0.5} readOnly />
//                 </div>
//               </article>
              
//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>ReactJs</h4>
//                 <Rating name="half-rating-read"defaultValue={3} max={3} precision={0.5} readOnly />
//                 </div>          
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>Bootstrap</h4>
//                 <Rating name="half-rating-read" defaultValue={3} max={3} precision={0.5} readOnly />
//                 </div>            
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>Tailwindcss</h4>
//                 <Rating name="half-rating-read" defaultValue={3} max={3} precision={0.5} readOnly />
//                 </div>            
//               </article>
//             </div>
        
//           </div>

//           <div className='experience__backend'>
//             <h3>Backend Developpement</h3>
//             <div className='experience__content'>
//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>NodeJs</h4>
//                 <Rating name="half-rating-read" defaultValue={2} max={2} precision={0.5} readOnly />
//                 </div>               
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>ExpressJs</h4>
//                 <Rating name="half-rating-read" defaultValue={2} max={2} precision={0.5} readOnly />
//                 </div>               
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>mongoDB</h4>
//                 <Rating name="half-rating-read" defaultValue={2} max={2} precision={0.5} readOnly />
//                 </div>          
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                 <h4>PHP</h4>
//                 <Rating name="half-rating-read" defaultValue={4} max={4} precision={0.5} readOnly />
//                 </div>
//               </article>

//               <article className='experience__details'>
//                 <a href="#" className="experience__details-icon"><CheckCircleIcon /></a>
//                 <div>
//                   <h4>MySQL</h4>
//                   <Rating name="half-rating-read" defaultValue={4} max={4} precision={0.5} readOnly />
//                 </div>               
//               </article>
//             </div>
                  
//           </div>
    
//       </div>

//     </section>
//   )
// }

// export default Experience




import React from 'react'
import "./skills.css"

import ReactLogo from "../../assets/react-logo.png"
import JsLogo from "../../assets/js-logo.png"
import HtmlLogo from "../../assets/html-logo.png"
import CssLogo from "../../assets/css-logo.webp"
import NodeLogo from "../../assets/node-logo.jfif"
import GitLogo from "../../assets/git-logo.png"

const data = [
  {
    id: 1,
    image: HtmlLogo,
    title: "HTML5",
    level: 90,
    levelLabel: "Avancé",
  },
  {
    id: 2,
    image: CssLogo,
    title: "CSS3 / Sass",
    level: 85,
    levelLabel: "Avancé",
  },
  {
    id: 3,
    image: JsLogo,
    title: "JavaScript",
    level: 75,
    levelLabel: "Intermédiaire",
  },
  {
    id: 4,
    image: ReactLogo,
    title: "React",
    level: 80,
    levelLabel: "Avancé",
  },
  {
    id: 5,
    image: NodeLogo,
    title: "Node.js",
    level: 60,
    levelLabel: "Intermédiaire",
  },
  {
    id: 6,
    image: GitLogo,
    title: "Git / GitHub",
    level: 70,
    levelLabel: "Intermédiaire",
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <h5>Mes compétences</h5>
      <h2>Stack technique</h2>
      <div className="container skills__container">
        {
          data.map((item) => {
            return (
              <article key={item.id} className="skills__item">
                <div className="skills__item-image">
                  <img src={item.image} width={200} height={188} alt={item.title} />
                </div>
                <h3>{item.title}</h3>

                <div className="skills__item-bar">
                  <div
                    className="skills__item-bar-fill"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>

                <small className="skills__item-level">{item.levelLabel} · {item.level}%</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills

