export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function getWeather() {
  await sleep(500);
  let weatherData;
  fetch(
    "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Salt+Lake+City&units=imperial"
  )
    .then((res) => res.json())
    .then((data) => (weatherData = data));

  return weatherData;
}
