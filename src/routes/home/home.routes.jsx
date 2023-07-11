import { Outlet } from "react-router-dom";
import HomeSlider from '../../components/home-slider/home-slider.component'
import HomePageSectionContent from '../../components/home-page-section-content/home-page-section-content.component'
import HomeInformationSection from '../../components/home-information-section/home-information-section.component'
import FooterSection from '../../components/footer-section/footer-section.component'
const Home=()=>{
    return(
        <>
            <div className="home-routes mx-auto font-montserrat-alternates">
                <HomeSlider/>
                <HomePageSectionContent/>
                <HomeInformationSection/>
                <FooterSection/>
            </div>
            <Outlet/>
        </>
    )
}

export default Home;
