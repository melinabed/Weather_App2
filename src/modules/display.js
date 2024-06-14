const render = (() => {
  //Query Selectors for divs pertaining to user selected city temp details
  const locationDiv = document.querySelector("#location");
  const conditionDiv = document.querySelector("#condition");
  const currTempDiv = document.querySelector("#temp-num");

  const maxTempDiv = document.querySelector("#high");
  const minTempDiv = document.querySelector("#low");

  const displayInfo = (info) => {
    let location = info.location.name;
    locationDiv.textContent = location;

    let condition = info.current.condition.text;
    conditionDiv.textContent = condition;

    let currTempF = info.current.temp_f;
    currTempDiv.textContent = roundTemp(currTempF);

    let maxTemp = info.forecast.forecastday[0].day.maxtemp_f;
    maxTempDiv.textContent = roundTemp(maxTemp);

    let minTemp = info.forecast.forecastday[0].day.mintemp_f;
    minTempDiv.textContent = roundTemp(minTemp);
  };

  const roundTemp = (x) => {
    let num = Number(x);
    return num.toFixed();
  };

  return { displayInfo, roundTemp };
})();

export default render;
