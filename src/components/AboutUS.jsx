import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import '../assets/css/style.css';
import madan from '../assets/images/madan.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function AboutUS() {
    return (
        <>
        <TopNavbar/>
        <div className="row aboutus g-0">
        <div className='outerDiv'>
                <div className="row g-0"  style={{ paddingLeft: "50px" }}>
                    <h1>Technical Team</h1>
                    <br /><br /><br />
                </div>

                <div className="row g-0">

                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={madan} alt="developer pic" className="center" style={{ borderRadius: '270px' }} width="180px" height="180px" />
                    </div>

                </div>
                <div className="row g-0">

                    <div className="col" style={{ display: 'grid', justifyContent: 'center', textAlign :'center' }}>
                        <h2>Madan Lal</h2>
                        <h4>Software Engineer</h4><br/>
                        <p><strong><i>"Dream big, stay positive, work <br/> hard and enjoy the journey."</i></strong></p>
                        <div>
                            <a target='_blank' href="https://www.youtube.com/@visualhow/videos">
                                <YouTubeIcon style={{fontSize:"40px", margin:'5px', color:'#c4302b'}}/>
                            </a>
                            <a target='_blank' href="https://github.com/madanlal1">
                                <GitHubIcon style={{fontSize:"40px", margin:'5px', color:'#171515 '}}/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/madanlal1/">
                                <LinkedInIcon style={{fontSize:"40px", margin:'5px', color:'#0A66C2'}}/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}