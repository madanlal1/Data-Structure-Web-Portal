import Home from './components/Home';
import {Route, Routes} from 'react-router';
import Tutorials from './components/Tutorials';
import Feedback from './components/Feedback';
import AboutUS from './components/AboutUS';

export default function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tutorials" exact element={<Tutorials/>}/>
      <Route path="/tutorials/:topic" element={<Tutorials/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/aboutus" element={<AboutUS/>}/>
    </Routes>  
  )
}
