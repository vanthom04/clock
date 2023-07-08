const dates = document.querySelector(".date");
const times = document.querySelector(".time");

const now = new Date();

const dayOfWeeks = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function kt(value) {
   return value < 10 ? `0${value}` : value;
}

function timeUpdate() {
   let hour = now.getHours();
   let minute = now.getMinutes();
   let second = now.getSeconds();
   let day = now.getDate();
   let month = now.getMonth() + 1;
   let year = now.getFullYear();
   let date = now.getDay();

   dates.innerText = `${dayOfWeeks[date]} ${kt(day)}/${kt(month)}/${kt(year)}`;
   times.innerText = `${kt(hour)}:${kt(minute)}:${kt(second)}`;
}

timeUpdate();
setInterval(timeUpdate, 1000);