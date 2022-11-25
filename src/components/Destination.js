import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import "./DestinationStyles.css"


const Destination = () => {
    return (
        <div className="destination">
           <h1>Popular Destinations</h1>
           <p>Tours give you the opportunity to see a lot within a time frame</p>

           <div className="frist-des">
                <div className="des-text">
                <h2>Taal Volcana, Batanges</h2>
                <p> ours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a l
                </p>
                </div>

                <div className="image">
                    <img alt="img" src={Mountain1}/>
                    <img alt="img" src={Mountain2}/>
                </div>

                
           </div>

           <div className="first-des-reverse">
                <div className="des-text">
                <h2>Taal Volcana, Batanges</h2>
                <p> ours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a lours give you the opportunity to see a l
                </p>
                </div>

                <div className="image">
                    <img alt="img" src={Mountain1}/>
                    <img alt="img" src={Mountain2}/>
                </div>

                
           </div>
        </div>
    )
}

export default Destination;
