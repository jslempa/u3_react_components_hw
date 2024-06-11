export default function WeatherIcon (props) {
    return (
        <div>
            <img src={props.weatherForecasts[0].img} alt={props.weatherForecasts[0].imgAlt}/>
        </div>
    )
}