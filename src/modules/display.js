const render = (() => {
  //Query Selectors for divs pertaining to user selected city temp details
  const locationDiv = document.querySelector("#location");
  const conditionDiv = document.querySelector("#condition");
  const currTempDiv = document.querySelector("#temp-num");

  const maxTempDiv = document.querySelector("#high");
  const minTempDiv = document.querySelector("#low");

  const toggleSwitch = document.querySelector("#switch");

  const displayInfo = (info) => {
    let location = info.location.name;
    locationDiv.textContent = location;

    let condition = info.current.condition.text;
    conditionDiv.textContent = condition;

    let currTemp = info.current.temp_f;
    currTempDiv.textContent = roundTemp(currTemp);

    let maxTemp = info.forecast.forecastday[0].day.maxtemp_f;
    maxTempDiv.textContent = roundTemp(maxTemp);

    let minTemp = info.forecast.forecastday[0].day.mintemp_f;
    minTempDiv.textContent = roundTemp(minTemp);

    toggleSwitch.addEventListener("click", () => {
      if (toggleSwitch.checked == true) {
        currTemp = info.current.temp_c;
        currTempDiv.textContent = roundTemp(currTemp);

        maxTemp = info.forecast.forecastday[0].day.maxtemp_c;
        maxTempDiv.textContent = roundTemp(maxTemp);

        let minTemp = info.forecast.forecastday[0].day.mintemp_c;
        minTempDiv.textContent = roundTemp(minTemp);
      } else {
        currTemp = info.current.temp_f;
        currTempDiv.textContent = roundTemp(currTemp);

        maxTemp = info.forecast.forecastday[0].day.maxtemp_f;
        maxTempDiv.textContent = roundTemp(maxTemp);

        minTemp = info.forecast.forecastday[0].day.mintemp_f;
        minTempDiv.textContent = roundTemp(minTemp);
      }
    });
  };

  const roundTemp = (x) => {
    let num = Number(x);
    return num.toFixed();
  };

  return { displayInfo, roundTemp };
})();

export default render;
