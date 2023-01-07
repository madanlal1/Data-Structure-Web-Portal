import Home from './components/Home';
import {Route, Routes} from 'react-router';
import Tutorials from './components/Tutorials';

export default function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tutorials" element={<Tutorials/>}/>
    </Routes>    
  )
}
