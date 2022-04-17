import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useVideo } from "../../context";


function Slider() {
  const { videos } = useVideo()
  return (
    <>
    
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
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
                  
                 <img key={ video._id } src={`https://i.ytimg.com/vi_webp/${video.thumbnail_id}/movieposter.webp`} alt="broken" /> 
            </SwiperSlide>
           )
       })

       }
      </Swiper>
    </>
  );
}


export { Slider }