import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import aboutImg from "../assets/night.jpg"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"


function About () {
    return(
        <>
            <Navbar/>  
            <Hero
                cName = "hero"
                heroImg = {aboutImg}
                title = "About"
                text = 'Choose your facourite Destination'
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "show"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About
