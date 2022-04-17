import { HomeCarousel, Slider } from "../../component";
import './Home.css';

function Home() {
    return(
        <div>
            <section>
                <HomeCarousel/>
            </section>
            <section className="nowplaying-sec" >
                <h2 className="title"> Now Playing </h2>
                <Slider/>
            </section>
            <section className="nowplaying-sec" >
                <h2 className="title"> Top Rated </h2>
                <Slider/>
            </section>
            
        </div>
    )
}


export { Home }