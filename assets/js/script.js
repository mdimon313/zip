// SELECT DATE DOCUMENTS
let day = document.querySelector("#day");

// GET MONTHS FUNCTIONS

var today = new Date();
var cDay = today.getDay();

function getDayNames(dayNumbers) {
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "WednesDay",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayName[dayNumbers];
}
day.innerHTML = getDayNames(cDay);

// SELECT TIME DOCUMENTS

let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");

// GET TIME FUNCTIONS

function time() {
  let d = new Date();
  let cHour = d.getHours();
  let cMin = d.getMinutes();
  let cSec = d.getSeconds();
  let session = "AM";
  if (cHour == 0) {
    cHour = 12;
  }
  if (cHour > 12) {
    cHour = cHour - 12;
    session = "PM";
  }
  cHour = cHour < 10 ? "0" + cHour : cHour;
  cMin = cMin < 10 ? "0" + cMin : cMin;
  cSec = cSec < 10 ? "0" + cSec : cSec;

  hours.innerHTML = cHour;
  minutes.innerHTML = cMin;
  seconds.innerHTML = cSec;
  ampm.innerText = session;
}
setInterval(() => {
  time();
}, 1000);
