import ContentCard from "./ContentCard";
import image from "../images/pic.jpg";

export default function StaticCard() {
  return (
    <>
      <div className="row1">
        <h1>Explore Data Structures</h1>
      </div>
      <div className="row g-0">
        <div className="col">
          <ContentCard image={image} name="Data Structure" />
        </div>
        <div className="col">
          <ContentCard image={image} name="Data Structure" />
        </div>
        <div className="col">
          <ContentCard image={image} name="Data Structure" />
        </div>
        <div className="col">
          <ContentCard image={image} name="Data Structure" />
        </div>
      </div>
    </>
  );
}
