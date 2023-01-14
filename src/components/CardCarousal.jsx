import Marquee from "react-fast-marquee";
import ContentCard from './ContentCard';
import '../assets/css/style.css';
import {Data} from '../assets/content/Data';

export default function CardCarousal() {
    
    return (
      <>
      <div className="row2">
        <h1>Data Structures</h1>
      </div>
        <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                      {
                        Data.map(element => 
                          
                          <div className='card-carousal'>
                            <ContentCard image={element.image} name={element.title} />
                          </div>
                        )
                      }                        
                    </Marquee>
                </div>
            </div>
          </>
    )
}