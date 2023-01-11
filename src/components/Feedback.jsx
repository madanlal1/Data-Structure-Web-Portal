import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import '../assets/css/style.css';
import feedbackVector from '../assets/images/feedback.jpg'
import Ratings from "./Ratings";

const Feedback = () => {
    return (
        <>
        <TopNavbar/>

        <div className="row g-0">
            <div id="feedback-vector" className="col-6">
                <img src={feedbackVector} alt="feedback-vector" width="90%"/>
            </div>
            
            <div id="feedback-form" className="col-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Fullname</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Fullname"/>
                    </div><br/>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput2">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                    </div><br/>

                    <Ratings/><br/>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type your feedback here..."></textarea>
                    </div><br/>

                    <button type="submit" className="btn btn-primary">Submit Feedback</button>
                    </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Feedback;