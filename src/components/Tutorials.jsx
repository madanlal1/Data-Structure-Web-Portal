import '../assets/css/style.css';
import Sidebar from "./Sidebar";
import TutorialsBody from "./TutorialsBody";
import TopNavbar from './TopNavbar';
import Footer from './Footer';


const Tutorials = () => {
    return (
        <>
        <TopNavbar/>
        <div className="row g-0" style={{padding: '0 20px'}}>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1">
                {/* for space */}
            </div>

            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10" id="tutorials-body">
                <TutorialsBody/>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-1">
                {/* for space */}
            </div>

        </div> 
        <Footer/>
        </>
    )
}

export default Tutorials;