import Home from './components/Home';
import {Route, Routes} from 'react-router';
import Tutorials from './components/Tutorials';
import Feedback from './components/Feedback';
import AboutUS from './components/AboutUS';

export default function App() {


  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/tutorials" exact element={<Tutorials/>}/>
      <Route exact path="/tutorials/:topic" element={<Tutorials/>}/>
      <Route exact path="/feedback" element={<Feedback/>}/>
      <Route exact path="/aboutus" element={<AboutUS/>}/>
    </Routes>  
  )
}
