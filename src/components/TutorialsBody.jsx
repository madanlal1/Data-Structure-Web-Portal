import {Data} from "../content/Data";
import { useParams } from "react-router-dom";

const TutorialsBody = () => {

    const param = useParams();
        
    return (
        <>
            {
                Data.filter(elem => elem.link === param.topic).map(element => {
                    return (
                        <>
                        <h1>{element.title}</h1>
                        <p>{element.content1}</p>
                        <img src={element.image.img} width="100%" alt="image"/>
                        <p>{element.content2}</p>
                        </>
                    )
                })
            }
            
            <button className="btn btn-primary" id='left'>Previous</button>
            <button className="btn btn-primary" id='right'>Next</button>
        </>
    )
}

export default TutorialsBody;   