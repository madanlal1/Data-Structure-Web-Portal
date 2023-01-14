import ContentCard from "./ContentCard";
import {Data} from '../assets/content/Data';




export default function StaticCard() {
  return (
    <>
      <div className="row1">
        <h1>Explore Data Structures</h1>

        <h1 style={{textAlign:'center'}}>// search bar here...</h1>

      </div>
      <div className="row g-0">
        {
          Data.map(element => 
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <ContentCard image={element.image} name={element.title} />
            </div>
          )
        }
       
      </div>
    </>
  );
}
