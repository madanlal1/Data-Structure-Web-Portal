import ContentCard from "./ContentCard";
import {Data} from '../assets/content/Data';
import SearchIcon from '@material-ui/icons/Search';
import '../assets/css/style.css';
import {useState} from 'react';
// import { Search } from "@material-ui/icons";
import pageNotFound from '../assets/images/pageNotFound.jpg';



export default function StaticCard() {

  const [search, setSearch] = useState('');
  var found = false;

  return (
    <>
      <div className="row1">
        <h1>Explore Data Structures</h1>
      </div>

      <div className="search-input" style={{width:'40%',display:'grid', margin:'30px auto'}}>
          <input type="text" onChange={e => setSearch(e.target.value)} className="form-control" placeholder="Search "/>
        <SearchIcon className='icon'/>
      </div>
      <div className="row g-0 m-2 ">
        {
          Data.filter(ele => ele.title.toLowerCase().match(search.toLocaleLowerCase())).map(element => 
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <ContentCard image={element.image} name={element.title} key={element.title} link={element.link} />
              {found = true}
            </div>
          )
        }
      </div>
      
        {found === false ? 
        <div>
          <br/>
        <img src={pageNotFound} alt="Package Not Found!" width="600px" style={{justifyContent:'center', display:'grid', marginLeft:'auto', marginRight:'auto'}}/>
      </div>
       : 
       null}
      
    </>
  );
}
