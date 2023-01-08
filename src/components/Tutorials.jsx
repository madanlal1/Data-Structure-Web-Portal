import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import '../css/style.css';
import Sidebar from "./Sidebar";
import TutorialsBody from "./TutorialsBody";

const Tutorials = () => {
    return (
        <>
        <TopNavbar/>
        <div className="row g-0">
            <div className="col-3" id="sidebar">
                <Sidebar/>
            </div>
            <div className="col-1">
                {/* for space */}
            </div>
            <div className="col-6" id="tutorials-body">
                <TutorialsBody/>
            </div>
            <div className="col-2">
                {/* for space */}
            </div>
        </div> 
        <Footer/>
        </>
    )
}

export default Tutorials;