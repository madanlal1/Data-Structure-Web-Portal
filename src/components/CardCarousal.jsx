import image from '../images/pic.jpg';
import Marquee from "react-fast-marquee";
import ContentCard from './ContentCard';

export default function CardCarousal() {
    
    return (
      <>
      <div className="row1">
        <h1>Data Structures</h1>
      </div>
        <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={100} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >

                      <div className='col'>
                        <ContentCard image={image} name="Data Structure" />
                      </div>
                      <div className='col'>
                        <ContentCard image={image} name="Data Structure" />
                      </div>
                      <div className='col'>
                        <ContentCard image={image} name="Data Structure" />
                      </div>
                      <div className='col'>
                        <ContentCard image={image} name="Data Structure" />
                      </div>
                        
                    </Marquee>
                </div>
            </div>
          </>
    )
}