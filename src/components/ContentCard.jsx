import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default function ContentCard(props) {

    return (
        // <div className="card_scale" style={{borderRadius: "20px", border : '1px solid red'}}   data-aos="zoom-in-up">
                <Card className="cardScale card_scale" style={{ width: '17.9rem', margin:"20px auto 20px auto"}}>
                  <Card.Img variant="top" src={props.image} alt="image..." style={{width:"285px", height: "240px"}} />
                  <Card.Body>
                    <div className='row g-0'>

                      <div className='col-12'>
                          <Card.Title style={{textAlign: "center", display:'grid', marginBottom:"10px", fontFamily: "sans-serif", fontWeight:"bold", fontSize:'18px'}}>{props.name}</Card.Title>
                      </div>
                      
                    </div>

                    <a href={`tutorials/${props.link}`} >       
                      <Button variant="outline-success form-control"><strong>Learn Now</strong></Button>
                    </a>
                  </Card.Body>
                </Card> 
          //  </div>
    )
}