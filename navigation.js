const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").slice("1");

    const currentSection = document.getElementById(id);
    const blockElement = document.querySelector(".block");
    blockElement.classList.remove("block");
    blockElement.classList.add("none");
    currentSection.classList.remove("none");
    currentSection.classList.add("block");
  });
});

function startTime() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  let k = today.getMonth();
  let l = today.getDate();
  let n = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
    monthNames[k] + " " + l + " " + n + ", " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
