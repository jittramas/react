import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import aboutImg from "../assets/12.jpg"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"


function Home () {
    return(
        <>
            <Navbar/>  
            <Hero
                cName = "hero"
                heroImg = {aboutImg}
                title = " Your Jorney Story"
                text = 'Choose your facourite Destination'
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home
