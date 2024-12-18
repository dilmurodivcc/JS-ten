function m1() {
  const input = document.getElementById("inputValue").value;
  const arr = input.trim().split(" ");
  let length = [];
  for (let i = 0; i < arr.length; i++) {
    length.push(arr[i].length);
  }
  const max = Math.max(...length);
  const min = Math.min(...length);
  const maxW = arr.filter((item) => item.length === max);
  const minW = arr.filter((item) => item.length === min);
  document.getElementById(
    "output"
  ).innerHTML = `Eng uzun: ${maxW} <br> Eng qisqa: ${minW}`;
}

function m2() {
  const input = document.getElementById("inputValue2").value;
  const reverse = input.split("").reverse().join("");
  document.getElementById("output2").innerHTML = `Teskari qilingan: ${reverse}`;
}

function m3() {
  const input = document.getElementById("inputValue3").value;
  const array = input.trim().split(" ");
  const reversed = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    reversed.push(el.split("").reverse().join(""));
  }
  document.getElementById("output3").innerHTML = ` "${reversed.join(" ")}"`;
}

function m4() {
  const input = document.getElementById("inputValue4").value;
  const array = input.trim().split(" ");
  const result = array[array.length - 1].length;
  return (document.getElementById(
    "output4"
  ).innerHTML = `Oxirgi so'z lengthi: ${result} `);
}

function m5() {
  const input = document.getElementById("inputValue5").value;
  const array = input.trim().split(" ");
  let newArr = [];

  newArr = array.filter(
    (item) =>
      array.indexOf(item) !== array.lastIndexOf(item) &&
      newArr.indexOf(item) === -1
  );
  const set = new Set(newArr);
  document.getElementById("output5").innerHTML = `New arr: [ ${newArr.join(
    ", "
  )} ]  <br> or <br> Sorted Version: [ ${[...set].join(", ")} ]`;
}

function m6() {
  const input = document.getElementById("inputValue6").value;
  const array = input.trim().split(" ").join("");
  document.getElementById("output6").innerHTML = `Probelar siz: "${array}"`;
}



function m7() {
  const input = document.getElementById("inputValue7").value;
  const array = input.trim().split("");
  console.log(array);
  const numbersArray = array.filter((item) => !isNaN(item)).map(Number);
  console.log(numbersArray);
  const newArr = numbersArray.reduce((acc, item) => acc + item, 0);
  document.getElementById("output7").innerHTML = `Yigindi: [ ${newArr} ]`;
}






// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}
moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  touchEventsTarget: "container",
  touchRatio: 1,
});
