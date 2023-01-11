import {Data} from "../assets/content/Data";
import { useParams } from "react-router-dom";

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
                        <>
                        <h1>{element.title}</h1>
                        <img src={element.image.img} width="100%" alt="image" className="mt-3 mb-4"/>
                        <p>{element.content1}</p>
                        </>
                    ) 
                })
            }
            
            <button onClick={() => previous()} className="btn btn-primary" id='left'>Previous</button>
            <button onClick={() => next()} className="btn btn-primary" id='right'>Next</button>
        </>
    )
}

export default TutorialsBody;   