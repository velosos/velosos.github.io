import React from 'react';

const Timeline = (props) => {
   
    return(

<div> 

<div className="row"> 
      <div className="col-lg-12 text-center">
       <h2 className="section-heading text-uppercase">Experiência</h2>
       <h3 className="section-subheading text-muted"></h3>
     </div>
     </div>
    
{props.data.map((experience) => 

  <section classNameName="page-section" id="about">
    <div classNameName="container">
    <div classNameName="row">
    
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={experience.logo} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{props.date}</h4>
                  <h4 className="subheading">{experience.title}</h4>
                  <h4 className="subheading">{experience.company}</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">{experience.description}</p>
                </div>
              </div>
            </li>
            
            </ul>
            </div> 
            </div>
            </div>  
    </section>
  )
}
  
  </div>
    )
}

export default Timeline;