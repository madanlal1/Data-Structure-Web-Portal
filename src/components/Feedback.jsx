import '../assets/css/style.css';
import feedbackVector from '../assets/images/feedback.jpg'
import Ratings from "./Ratings";
import TopNavbar from './TopNavbar';
import {useState} from 'react';
import axios from 'axios';


const Feedback = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const rating = localStorage.getItem("rating");
    
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            Fullname:fullname,
            Email:email,
            Rating:rating,
            Comment:comment
        }
        axios.post('https://sheet.best/api/sheets/c6230704-223e-4cc5-b00a-ca297dd66690',data).then(response => {

            alert("Thank You for your Feedback.");
            setFullname('');
            setEmail('');
            setComment('');
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
        <TopNavbar/>
        <div className="row g-0 feedbackContainer">
            <div id="feedback-vector" className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                <img src={feedbackVector} alt="feedback-vector" width="100%"/>
            </div>
            
            <div id="feedback-form" className="col-xl-6 col-lg-6 col-md-7 col-sm-12">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Fullname</label>
                        <input type="text" onChange={e => setFullname(e.target.value)} value={fullname} className="form-control" id="exampleFormControlInput1" placeholder="Fullname" required/>
                    </div><br/>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput2">Email address</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" required/>
                    </div><br/>

                    <Ratings/><br/>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Comment</label>
                        <textarea className="form-control" onChange={e => setComment(e.target.value)} value={comment} id="exampleFormControlTextarea1" rows="5" placeholder="Type your feedback here..." required></textarea>
                    </div><br/>

                    <button type="submit" className="btn btn-primary">Submit Feedback</button>
                    </form>
            </div>
        </div>
        </>
    )
}
export default Feedback;