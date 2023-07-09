const $date = document.querySelector(".date");
const $time = document.querySelector(".time");
const dayOfWeeks = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function padStart(value, length) {
   return String(value).padStart(length, '0');
}

function update() {
   const now = new Date();
   const [
      hours, minutes, seconds,
      year, month, date, day
   ] = [
      now.getHours(), now.getMinutes(), now.getSeconds(),
      now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getDay()
   ];

   $date.innerText = `${dayOfWeeks[day]} ${padStart(date, 2)}-${padStart(month, 2)}-${padStart(year, 4)}`;
   $time.innerText = `${padStart(hours, 2)}:${padStart(minutes, 2)}:${padStart(seconds, 2)}`;
}

update();
setInterval(update, 1000);