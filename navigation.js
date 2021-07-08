const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice('1');

    const currentSection = document.getElementById(id);
    const blockElement = document.querySelector('.block');
    blockElement.classList.remove('block');
    blockElement.classList.add('none');
    currentSection.classList.remove('none');
    currentSection.classList.add('block');
  });
});

function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
}

function startTime() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const DateTime = luxon.DateTime;
  const time = DateTime.now().setZone("America/Los_Angeles");
  const k = time.c.month;
  const l = time.c.day;
  const n = time.c.year;
  const h = time.c.hour;
  let m = time.c.minute;
  let s = time.c.second;
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = `${monthNames[k]} ${l} ${n}, ${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

startTime();
