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
                            <iframe src={element.video} allow='autoplay' title="YouTube video" allowFullScreen></iframe>
                            {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1" allow='autoplay' title="YouTube video" allowFullScreen></iframe> */}
                        </div> <br/>
                        <p>{element.content1}</p>
                        <button onClick={() => previous()} disabled ={(element.link==='data-structure')? true : false } className="btn btn-primary" id='left'>Previous</button>
                        <button onClick={() => next()} disabled = {(element.link==='bfs')? true : false} className=" btn btn-primary" id='right'>Next</button>
                        </React.Fragment>
                    ) 
                })
            }
            
        </>
    )
}

export default TutorialsBody;   