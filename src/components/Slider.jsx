import image from '../images/pic.jpg';
import image2 from '../images/pic2.jpg';
import image3 from '../images/pic3.jpg';

export default function Slider() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="image1"/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="image2"/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="image3"/>
    </div>
  </div>
</div>
  );
}
