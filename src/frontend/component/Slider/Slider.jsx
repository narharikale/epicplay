import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useSidebar, useVideo } from "../../context";
import { useNavigate } from 'react-router-dom'

function Slider() {
  const { videos } = useVideo();
  const { windowWidth } = useSidebar();
  const navigate = useNavigate()
  return (
    <>
    
      <Swiper
        slidesPerView={windowWidth > 616 ? 5 : windowWidth > 450 ? 3 : 1 }
        spaceBetween={25}
        slidesPerGroup={windowWidth > 616 ? 5 : windowWidth > 450 ? 3 : 1 }
        loop={true}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
       { videos.map((video) => {
           return(
            <SwiperSlide key={ video._id }>
                 <img
                  onClick={() => navigate(`/explore/${video._id}`)}  key={ video._id } 
                  src={`https://i.ytimg.com/vi_webp/${video.thumbnail_id}/movieposter.webp`} alt="broken" 
                  className="cursor-pointer"
                  /> 
            </SwiperSlide>
           )
       })

       }
      </Swiper>
    </>
  );
}


export { Slider }