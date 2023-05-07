import {Data} from "../assets/content/Data";
import {Outline} from "../assets/content/Outline";
import { useParams ,useNavigate} from "react-router-dom";
import React from 'react';
import '../assets/css/style.css';

const TutorialsBody = () => {

    const param = useParams();
    const navigate = useNavigate();

    function next(ind) {

        const link = Outline.filter((item,ind)=> (item.link===param.topic)).map(i => i.index+1)
        navigate(`/tutorials/${Outline[link].link}`)
    } 
    
    function previous(ind) {
    
        const link = Outline.filter((item,ind)=> (item.link===param.topic)).map(i => i.index-1)
        navigate(`/tutorials/${Outline[link].link}`)
    }

    return (
        <>
            {
                Data.filter(elem => elem.link === param.topic).map((element, ind) => {
                    return (
                        <React.Fragment key={element.title}>
                        <h1>{element.title}</h1>
                        <div className="ratio ratio-16x9"> 
                            <iframe title={element.title} width="560" height="315" src={`https://www.youtube.com/embed/${element.video}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div> <br/>
                        <div>{element.content1}</div>
                        <button onClick={() => previous()} disabled ={(element.link==='data-structure')? true : false } className="btn btn-primary" id='left'>Previous</button>
                        <button onClick={() => next()} disabled = {(element.link==='separate-chaining')? true : false} className=" btn btn-primary" id='right'>Next</button>
                        </React.Fragment>
                    ) 
                })
            }
            
        </>
    )
}

export default TutorialsBody;   