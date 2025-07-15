export default function Entry(props){
    return(
        <article>
            <div className="container">
                <img src ={props.img} alt={props.name} />
            </div>
            <div className="content">
                <div className="location">

            <img src="./src/images/marker.svg" alt="" />
            <span>{props.country}</span>
            <span><a href={props.googleMaps}>View on Google Maps</a></span>
                </div>
            <h1>{props.name}</h1>
            <h5>Dates:
            {props.dates}</h5> 
            <p>{props.description}</p>           
            </div>
        </article>
    )
}