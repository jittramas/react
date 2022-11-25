import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import aboutImg from "../assets/2.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function Contact () {
    return(
        <>
            <Navbar/>  
            <Hero
                cName = "hero"
                heroImg = {aboutImg}
                title = "Contact"
                text = 'Choose your facourite Destination'
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "show"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;