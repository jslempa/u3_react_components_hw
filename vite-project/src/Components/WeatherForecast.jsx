import '../WeatherForecast.css'

const WeatherForecast = (props) => {
    
    console.log(props.weatherForecasts[0]) // this line works
  
    return (
        <div>           
            <div className="weather">
                <h2>{props.weatherForecasts[0].day}</h2>
                <img src={props.weatherForecasts[0].img} alt={props.weatherForecasts[0].imgAlt}/>
                <p><span>conditions: </span>{props.weatherForecasts[0].conditions}</p>
                <p><span>time: </span>{props.weatherForecasts[0].time}</p>
            </div>
            <div className="weather">
                <h2>{props.weatherForecasts[1].day}</h2>
                <img src={props.weatherForecasts[1].img} alt={props.weatherForecasts[1].imgAlt}/>
                <p><span>conditions: </span>{props.weatherForecasts[1].conditions}</p>
                <p><span>time: </span>{props.weatherForecasts[1].time}</p>
            </div>
            <div className="weather">
                <h2>{props.weatherForecasts[2].day}</h2>
                <img src={props.weatherForecasts[2].img} alt={props.weatherForecasts[2].imgAlt}/>
                <p><span>conditions: </span>{props.weatherForecasts[2].conditions}</p>
                <p><span>time: </span>{props.weatherForecasts[2].time}</p>
            </div>
            <div className="weather">
                <h2>{props.weatherForecasts[3].day}</h2>
                <img src={props.weatherForecasts[3].img} alt={props.weatherForecasts[3].imgAlt}/>
                <p><span>conditions: </span>{props.weatherForecasts[3].conditions}</p>
                <p><span>time: </span>{props.weatherForecasts[3].time}</p>
            </div>
            <div className="weather">
                <h2>{props.weatherForecasts[4].day}</h2>
                <img src={props.weatherForecasts[4].img} alt={props.weatherForecasts[4].imgAlt}/>
                <p><span>conditions: </span>{props.weatherForecasts[4].conditions}</p>
                <p><span>time: </span>{props.weatherForecasts[4].time}</p>
            </div>
        </div>   
    )

}

export default WeatherForecast