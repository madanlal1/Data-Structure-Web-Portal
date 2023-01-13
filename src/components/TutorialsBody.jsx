import {Data} from "../assets/content/Data";
import { useParams } from "react-router-dom";
import React from 'react';

function next() {
    // implement it's functionality...
    alert('next');
}
function previous() {
    // implement it's functionality...
    alert('previous');
}

const TutorialsBody = () => {

    const param = useParams();
        
    return (
        <>
            {
                Data.filter(elem => elem.link === param.topic).map(element => {
                    return (
                        <React.Fragment key={element.title}>
                        <h1>{element.title}</h1>
                        <div className="ratio ratio-16x9">
                            <iframe src={element.video} allow='autoplay' title="YouTube video" allowFullScreen></iframe>
                            {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1" allow='autoplay' title="YouTube video" allowFullScreen></iframe> */}
                        </div> <br/>
                        <p>{element.content1}</p>
                        </React.Fragment>
                    ) 
                })
            }
            
            <button onClick={() => previous()} className="btn btn-primary" id='left'>Previous</button>
            <button onClick={() => next()} className="btn btn-primary" id='right'>Next</button>
        </>
    )
}

export default TutorialsBody;   