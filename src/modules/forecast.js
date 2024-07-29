import { format } from "date-fns";
import render from "./display";

const todayDiv = document.querySelector(".day-today");
const highToday = document.querySelector(".high-today");
const iconTodayImg = document.querySelector("#icon-today");
const lowToday = document.querySelector(".low-today");

const tommorowDiv = document.querySelector(".day-tommrow");
const highTommorow = document.querySelector(".high-tommrow");
const iconTommorowImg = document.querySelector("#icon-tommrow");
const lowTommorow = document.querySelector(".low-tommrow");

const nextDiv = document.querySelector(".day-next");
const highNext = document.querySelector(".high-next");
const iconNextImg = document.querySelector("#icon-next");
const lowNext = document.querySelector(".low-next");

const toggleSwitch = document.querySelector("#switch");

const forecast = (() => {
  const formatDate = (date) => {
    let nums = date.split("-").map((num) => +num);

    const result = format(new Date(nums[0], nums[1] - 1, nums[2]), "cccc");
    return result;
  };

  const weekly = (info) => {
    //Forecast variables for today
    let today = info.forecast.forecastday[0].date;
    today = formatDate(today);
    todayDiv.textContent = today;

    let minTempF_today = info.forecast.forecastday[0].day.mintemp_f;
    let maxTempF_today = info.forecast.forecastday[0].day.maxtemp_f;

    maxTempF_today = render.roundTemp(maxTempF_today);
    highToday.textContent = maxTempF_today + "\u00B0";

    let minTempC_today = info.forecast.forecastday[0].day.mintemp_c;
    let maxTempC_today = info.forecast.forecastday[0].day.maxtemp_c;

    minTempF_today = render.roundTemp(minTempF_today);
    lowToday.textContent = minTempF_today + "\u00B0";

    let iconToday = info.forecast.forecastday[0].day.condition.icon;
    iconTodayImg.src = iconToday;

    //Forecast variables for tommorow
    let tommorow = info.forecast.forecastday[1].date;
    tommorow = formatDate(tommorow);
    tommorowDiv.textContent = tommorow;

    let minTempF_tommrow = info.forecast.forecastday[1].day.mintemp_f;
    let maxTempF_tommrow = info.forecast.forecastday[1].day.maxtemp_f;

    maxTempF_tommrow = render.roundTemp(maxTempF_tommrow);
    highTommorow.textContent = maxTempF_tommrow + "\u00B0";

    let minTempC_tommrow = info.forecast.forecastday[1].day.mintemp_c;
    let maxTempC_tommrow = info.forecast.forecastday[1].day.maxtemp_c;

    minTempF_tommrow = render.roundTemp(minTempF_tommrow);
    lowTommorow.textContent = minTempF_tommrow + "\u00B0";

    let iconTommorow = info.forecast.forecastday[1].day.condition.icon;
    iconTommorowImg.src = iconTommorow;

    //Forecast variables for next day after tommorow
    let nextDay = info.forecast.forecastday[2].date;
    nextDay = formatDate(nextDay);
    nextDiv.textContent = nextDay;

    let minTempF_next = info.forecast.forecastday[2].day.mintemp_f;
    let maxTempF_next = info.forecast.forecastday[2].day.maxtemp_f;

    maxTempF_next = render.roundTemp(maxTempF_next);
    highNext.textContent = maxTempF_next + "\u00B0";

    let minTempC_next = info.forecast.forecastday[2].day.mintemp_c;
    let maxTempC_next = info.forecast.forecastday[2].day.maxtemp_c;

    minTempF_next = render.roundTemp(minTempF_next);
    lowNext.textContent = minTempF_next + "\u00B0";

    let iconNext = info.forecast.forecastday[2].day.condition.icon;
    iconNextImg.src = iconNext;

    toggleSwitch.addEventListener("click", () => {
      if (toggleSwitch.checked == true) {
        highToday.textContent = render.roundTemp(maxTempC_today) + "\u00B0";
        lowToday.textContent = render.roundTemp(minTempC_today) + "\u00B0";
        highTommorow.textContent =
          render.roundTemp(maxTempC_tommrow) + "\u00B0";
        lowTommorow.textContent = render.roundTemp(minTempC_tommrow) + "\u00B0";
        highNext.textContent = render.roundTemp(maxTempC_next) + "\u00B0";
        lowNext.textContent = render.roundTemp(minTempC_next) + "\u00B0";
      } else {
        highToday.textContent = render.roundTemp(maxTempF_today) + "\u00B0";
        lowToday.textContent = render.roundTemp(minTempF_today) + "\u00B0";
        highTommorow.textContent =
          render.roundTemp(maxTempF_tommrow) + "\u00B0";
        lowTommorow.textContent = render.roundTemp(minTempF_tommrow) + "\u00B0";
        highNext.textContent = render.roundTemp(maxTempF_next) + "\u00B0";
        lowNext.textContent = render.roundTemp(minTempF_next) + "\u00B0";
      }
    });
  };

  return { weekly };
})();

export default forecast;
