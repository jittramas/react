import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";



function Trip() {
    return (
        <div className="trip">
            <h1>
                Recent Trips
            </h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
            <TripData 
                image = {Trip1}
                heading = "Trip in Thailand"
                text = "You can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinations"
            />
            <TripData 
                image = {Trip2}
                heading = "Trip in Thailand"
                text = "You can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinations"
            />
            <TripData 
                image = {Trip3}
                heading = "Trip in Thailand"
                text = "You can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinationsYou can discover unique destinations"
            />
            </div>
        
        </div>
    )
}

export default Trip;
