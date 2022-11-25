import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import aboutImg from "../assets/1.jpg"
import Footer from "../components/Footer"
import Trip from "../components/Trip"


function Service () {
    return(
        <>
            <Navbar/>  
            <Hero
                cName = "hero"
                heroImg = {aboutImg}
                title = "Service"
                text = 'Choose your facourite Destination'
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "show"
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service
