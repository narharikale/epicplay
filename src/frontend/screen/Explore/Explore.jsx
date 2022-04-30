import { useState } from "react"
import { HorizontalVideoCard, Sidebar } from "../../component"
import { useFilter, useVideo } from "../../context"
import { CATEGORY } from "../../constants";
import './Explore.css';
import { getFilterdVideos } from "../../utils/filteredVideos";

function Explore(){
    const { videos , categories } = useVideo();
    const { filterDispatch } = useFilter();
    const [ selectedCategory , setSelectedCategory ]  = useState('All');
    
    const filterHandler = ( categoryname ) => {
        setSelectedCategory( categoryname )
        filterDispatch({ type:CATEGORY , payload:categoryname })
    }   


    const videosList = getFilterdVideos(videos , selectedCategory )

    return (
        <div className="explore-main-container">
            <div className="explore-side-container">
                <Sidebar/>
            </div>
            <div className="explore-container">
                <div className="categories-container" >
                    { categories.map(({categoryName , _id}) => {
                        return (
                            <button 
                            className={`eplaybtn ${categoryName !== selectedCategory ? 'eplaybtn-secondary' : 'eplaybtn-primary'}`}
                            key={_id} onClick={ ()=> filterHandler(categoryName)  } 
                            >
                            { categoryName }
                            </button>
                        )
                    }) }
                </div>
            
                <div className="videos-container">
                    {   videosList.map((video) => { 
                                return (<HorizontalVideoCard video={ video } key={video._id} />)
                        }) 
                    } 
                </div>
            </div>
        </div>
    )
}

export { Explore }