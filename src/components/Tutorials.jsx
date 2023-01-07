import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import '../css/style.css';

const Tutorials = () => {
    return (
        <>
        <TopNavbar/>
        <div className="row g-0">
            <div className="col-2" id="sidebar">
                <ul>
                    <li>
                        <a href="/tutorials">Introduction</a>
                    </li>
                    <li>
                        <a href="/tutorials">Topic1</a>
                    </li>
                    <li>
                        <a href="/tutorials">Topic2</a>
                    </li>
                    <li>
                        <a href="/tutorials">Topic3</a>
                    </li>
                    <li>
                        <a href="/tutorials">Topic4</a>
                    </li>
                    <li>
                        <a href="/tutorials">Topic5</a>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                {/* for space */}
            </div>
            <div className="col-6" id="tutorials-body">
                <h1>Hellow from Tutorials</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem modi excepturi odio, minus exercitationem beatae impedit id fugiat eum magni officiis! Itaque veniam natus consectetur nisi. Animi, illo dolor.</p>
                <button className="btn btn-primary" id='left'>Previous</button>
                <button className="btn btn-primary" id='right'>Next</button>
            </div>
            <div className="col-3">
                {/* for space */}
            </div>
        </div> 
        <Footer/>
        </>
    )
}

export default Tutorials;