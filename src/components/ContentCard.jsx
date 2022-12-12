import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default function ContentCard(props) {

    return (
        <div className="card_scale" style={{borderRadius: "20px"}}   data-aos="zoom-in-up">
                <Card className="cardScale" style={{ width: '17.8rem', margin:"20px auto 20px auto"}}>
                  <Card.Img variant="top" src={props.image} alt="image..." style={{width:"285px", height: "240px"}} />
                  <Card.Body>
                    <div className='row g-0'>

                      <div className='col-12'>
                          <Card.Title style={{textAlign: "center", display:'grid', marginBottom:"10px", fontFamily: "sans-serif", fontWeight:"bold", fontSize:'18px'}}>{props.name}</Card.Title>
                      </div>
                      
                    </div>

                    <a href={`/Pack_Detail/${props.id}`} >       
                      <Button variant="outline-primary form-control">Learn Now</Button>
                    </a>
                  </Card.Body>
                </Card> 
           </div>
    )
}