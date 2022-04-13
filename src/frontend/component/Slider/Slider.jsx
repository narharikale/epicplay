import './Slider.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sliderData = [
    {
        title:'Spider-Man: No Way Home',
        desc:'endegame',
        img:'assets/banners/banner-xl-1.jpeg'
    },
    {
        title:'Avengers: Endgame',
        desc:'endegame',
        img:'assets/banners/banner-xl-2.jpeg'
    },
    {
        title:'Doctor Strange in the Multiverse of Madness',
        desc:'endegame',
        img:'assets/banners/banner-xl-3.jpeg'
    }
]

function Slider() {

return (
  <Carousel autoPlay showThumbs={false} >
    { sliderData.map((banner) => {
        return(
          <div>
              <img alt="no img" src={banner.img} className="slider-img"/>
              <div className="legend" id='legend'>
                <h1>{banner.title}</h1>
                <button className="eplaybtn eplaybtn-primary font-size-regular">Watch Now</button>
              </div>
          </div>
        )

    })
    }
  </Carousel>

)}


export { Slider }


