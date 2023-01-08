import {Outline} from '../content/Outline';

const Sidebar = () => {
    return (
        <ul>
            {
                Outline.map(element => {
                    return (
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