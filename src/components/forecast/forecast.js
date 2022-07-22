
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const today = new Date().getDay();
    const days = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(WEEK_DAYS, today));
    return (
        <div className="forecast">
            {data.list.splice(0, 7).map((item, id) => {
                return (
                    <div className="container" key={id}>
                        <div className="center">
                            <img src={`icons/${item.weather[0].icon}.png`} className="icon" />
                        </div>
                        <p className="day">{days[id]}</p>
                        <p className="tempature">{Math.round(item.main.temp)}°C</p>
                    </div>
                )
            })}

        </div>
    );
}
export default Forecast;