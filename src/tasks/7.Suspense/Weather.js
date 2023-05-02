import { useLoaderData, defer, Await } from "react-router-dom";
import { getWeather } from "./utils";

export async function loader() {
  const weather = await getWeather();
  console.log(weather);
  return weather;
}

export default function Weather() {
  const loaderData = useLoaderData();
  const iconUrl = `http://openweathermap.org/img/wn/${loaderData.weather[0].icon}@2x.png`;

  return (
    <section className="weather-container">
      <h1>Weather in Salt Lake City</h1>
      <h3>{loaderData.main.temp}ºF</h3>
      <img src={iconUrl} />
    </section>
  );
}
{
  /*       <Await resolve={loaderData.weather}>
        {(loadedWeather) => {
          console.log(loadedWeather);
          const iconUrl = `http://openweathermap.org/img/wn/${loaderData.weather[0].icon}@2x.png`;
          return (
            <>
              <h3>{loadedWeather.main.temp}F</h3>
              <img src={iconUrl} />
            </>
          );
        }}
      </Await> */
}
