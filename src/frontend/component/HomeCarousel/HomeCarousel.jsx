import './HomeCarousel.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sliderData = [
    {
        id:'1',
        title:'Spider-Man: No Way Home',
        desc:'endegame',
        img:'assets/banners/banner-xl-1.jpeg'
    },
    {   
        id:'2',
        title:'Avengers: Endgame',
        desc:'endegame',
        img:'assets/banners/banner-xl-2.jpeg'
    },
    {
        id:'3',
        title:'Doctor Strange in the Multiverse of Madness',
        desc:'endegame',
        img:'assets/banners/banner-xl-3.jpeg'
    }
]

function HomeCarousel() {

return (
  <Carousel autoPlay showThumbs={false} >
    { sliderData.map((banner) => {
        return(
          <div key={banner.id}>
              <img alt="no img" src={banner.img} className="slider-img"/>
              <div className="legend" id='legend'>
                <div className='legend-container'>
                  <div>
                    <h1 className='title'>{banner.title}</h1>
                  </div>
                  <div>
                    <button className="eplaybtn eplaybtn-primary font-size-regular">Watch Now</button>
                  </div>
                </div>
              </div>
          </div>
        )

    })
    }
  </Carousel>

)}


export { HomeCarousel }


