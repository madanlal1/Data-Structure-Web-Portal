import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import '../assets/css/style.css';
import madan from '../assets/images/madan.png';

export default function AboutUS() {
    return (
        <>
        <TopNavbar/>
        <div className="row aboutus">
        <div className='outerDiv' style={{ paddingLeft: "50px" }}>
                <div className="row">
                    <h1>Technical Team</h1>
                    <br /><br /><br /><br />
                </div>

                <div className="row">

                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={madan} alt="developer pic" className="center" style={{ borderRadius: '270px' }} width="180px" height="180px" />
                    </div>

                </div>
                <div className="row">

                    <div className="col" style={{ display: 'grid', justifyContent: 'center', textAlign :'center' }}>
                        <h2>Madan Lal</h2><br/>
                        <h3>Software Engineer</h3><br/>
                        <p><strong><i>"Dream big, stay positive, work <br/> hard and enjoy the journey."</i></strong></p>
                        <p><strong>// Social Icons Here (YouTube | GitHub | LinkedIn )</strong></p>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}