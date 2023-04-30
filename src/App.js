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
      {/* <Route path="/tutorials/introduction" element={<Tutorials/>}/> 
      <Route path="/tutorials/array" element={<Tutorials/>}/>
      <Route path="/tutorials/1d-array" element={<Tutorials/>}/>
      <Route path="/tutorials/2d-array" element={<Tutorials/>}/>
      <Route path="/tutorials/linkedlist" element={<Tutorials/>}/>
      <Route path="/tutorials/singly-linkedlist" element={<Tutorials/>}/>
      <Route path="/tutorials/doubly-linkedlist" element={<Tutorials/>}/>
      <Route path="/tutorials/circular-singly-linkedlist" element={<Tutorials/>}/>
      <Route path="/tutorials/circular-doubly-linkedlist" element={<Tutorials/>}/>
      <Route path="/tutorials/queue" element={<Tutorials/>}/>
      <Route path="/tutorials/priority-queue" element={<Tutorials/>}/>
      <Route path="/tutorials/stack" element={<Tutorials/>}/>
      <Route path="/tutorials/time-complexity" element={<Tutorials/>}/>
      <Route path="/tutorials/space-complexity" element={<Tutorials/>}/>
      <Route path="/tutorials/recursion" element={<Tutorials/>}/>
      <Route path="/tutorials/trees" element={<Tutorials/>}/>
      <Route path="/tutorials/binary-tree" element={<Tutorials/>}/>
      <Route path="/tutorials/binary-search-tree" element={<Tutorials/>}/>
      <Route path="/tutorials/avl-tree" element={<Tutorials/>}/>
      <Route path="/tutorials/max-heap" element={<Tutorials/>}/>
      <Route path="/tutorials/min-heap" element={<Tutorials/>}/>
      <Route path="/tutorials/pre-order" element={<Tutorials/>}/>
      <Route path="/tutorials/in-order" element={<Tutorials/>}/>
      <Route path="/tutorials/post-order" element={<Tutorials/>}/>
      <Route path="/tutorials/sorting" element={<Tutorials/>}/>
      <Route path="/tutorials/bubble-sort" element={<Tutorials/>}/>
      <Route path="/tutorials/merge-sort" element={<Tutorials/>}/>
      <Route path="/tutorials/quick-sort" element={<Tutorials/>}/>
      <Route path="/tutorials/selection-sort" element={<Tutorials/>}/>
      <Route path="/tutorials/insertion-sort" element={<Tutorials/>}/>
      <Route path="/tutorials/hashing" element={<Tutorials/>}/>
      <Route path="/tutorials/graph" element={<Tutorials/>}/>
      <Route path="/tutorials/dfs" element={<Tutorials/>}/>
      <Route path="/tutorials/bfs" element={<Tutorials/>}/> */}
    </Routes>  
  )
}
