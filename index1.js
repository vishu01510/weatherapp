const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempstatus = "{%tempstatus%}";

if (tempstatus == "Sunny") {
  weathercon.innerHTML = "<i class='fas fa-sun' style='color: gold'></i>";
}

const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wed";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let currentTime = new Date();
  let day = weekday[currentTime.getDay()];
  return day;
};
//getCurrentDay();
const getCurrentTime = () => {
  var months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  var now = new Date();
  var month = months[now.getMonth()];
  var date = now.getDate();
  //var year = now.getFullYear();

  let hours = now.getHours();
  let mins = now.getMinutes();

  let period = "AM";
  if (hours > 11) {
    period = "pm";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }

  //console.log(month + "/" + day);
  return `${month}${date} |${hours}:${mins}${period}`;
};
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
