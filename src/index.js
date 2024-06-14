import "./style.css";
import myWeather from "./modules/weather";

import Icon from "./search.svg";

myWeather.getInfo("Wahiawa");
myWeather.getCityName();

const searchIcon = document.querySelector("img");
searchIcon.src = Icon;

//FUNCTIONS AND/OR CHANGES NEEDED!

//1. Function to change from celcius to farenheight
//   -probalbly included in click event linked to button
//   -include function to change temp to whole numbers

//2. Request Needs to have an error message ✓
//3. Make search icon a pressable button
