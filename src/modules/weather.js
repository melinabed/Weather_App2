import render from "./display";

const search = document.querySelector("#search");

const myWeather = (() => {
  const getCityName = () => {
    //Takes in the value of the search input and once the key enter is pressed runs getInfo with value in params
    search.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        getInfo(search.value);
        search.value = "";
      }
    });
  };

  const getInfo = async function (cityName) {
    //Fetches the url for weather data but with cityName being interchangeable

    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=99c082834be743eaa18223854241106&q=${cityName}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    if (response.status === 400) {
      console.log("custom error message");
      alert("Invalid city name");
    } else {
      const info = await response.json();
      console.log(info);
      render.displayInfo(info);
    }
  };

  return { getCityName, getInfo };
})();

export default myWeather;
