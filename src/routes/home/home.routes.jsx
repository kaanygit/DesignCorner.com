import { Outlet } from "react-router-dom";
import HomeSlider from '../../components/home-slider/home-slider.component'

const Home=()=>{
    return(
        <>
            <div className="home-routes">
                <HomeSlider/>
            </div>
            <Outlet/>
        </>
    )
}

export default Home;
