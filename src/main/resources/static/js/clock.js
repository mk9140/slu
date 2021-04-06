function clock() {
  let hour = document.getElementById('hour');
  let minute = document.getElementById('minute');
  let seconds = document.getElementById('second');
  let ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = 'AM';

  // converter 24h format to 12h format with AM PM indicator
  if (h > 12) {
    h = h - 12;
    am = 'PM';
  }

  // add 0 to the beginning of number if less than 10
  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

}

let interval = setInterval(clock, 1000);
