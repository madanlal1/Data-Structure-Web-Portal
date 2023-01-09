import {Outline} from '../content/Outline';
import {useParams} from 'react-router-dom';
// 

const Sidebar = () => {
    
    const param = useParams();
    console.log("Now >> ",param.topic);
    
    return (
        <ul>
            { 
                Outline.map(element => {
                    return (
                        param.topic === element.link ? 
                    <li>
                        <a style={{fontWeight : 'bold',fontSize: '17px'}} href={`/tutorials/${element.link}`}>{element.topic}</a>
                    </li>
                    :
                    <li>
                        <a href={`/tutorials/${element.link}`}>{element.topic}</a>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default Sidebar;