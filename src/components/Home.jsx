import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Slider from './Slider';
import CardCarousal from './CardCarousal';
import StaticCard from './StaticCard';

const Home = () => {
    return (
        <>
            <TopNavbar/>
            <Slider/>
            <StaticCard/>
            <CardCarousal/>
            <Footer/>
          </> 
    )
}

export default Home;