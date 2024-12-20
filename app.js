function m1() {
  const n = +document.getElementById("inputValue").value;
  let obj = {
    a: 2,
    b: 3,
    c: 4,
  };
  const res = Object.entries(obj).map(([key, value]) => [key, value * n]);
  document.getElementById("output").innerHTML = `<pre>${JSON.stringify(
    Object.fromEntries(res),
    null,
    2
  )}</pre>`;
}

function m2() {
  const books = [
    { title: "Halqa", author: "Akrom Malik", read: false },
    { title: "Dunyoning ishlari", author: "O’tkir Hoshimov", read: true },
    {
      title: "Iymon",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      read: true,
    },
  ];
  books.forEach((book) => {
    if (book.read) {
      document.getElementById(
        "output2"
      ).innerHTML += `${book.title} - ${book.author}:  o'qildi. <br>`;
    } else {
      document.getElementById(
        "output2"
      ).innerHTML += `${book.title} - ${book.author}:  o'qilmadi <br>`;
    }
  });
}
function m3() {
  const input = document.getElementById("inputValue3").value;
  const arr = input.trim().split(" ");
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    const el = arr[i];
    for (let c = 0; c < arr.length; c++) {
      const e = arr[c];
      if (el === e) {
        count++;
      }
    }
    obj[el] = count;
  }

  const formattedOutput = JSON.stringify(obj, null, 4);
  document.getElementById(
    "output3"
  ).innerHTML = `<pre>${formattedOutput}</pre>`;
}

function m4() {
  const obj = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Simon",
      age: 10,
    },
    {
      name: "Jack",
      age: 20,
    },
    {
      name: "Cate",
      age: 80,
    },
    {
      name: "Jane",
      age: 67,
    },
  ];

  const sorted = obj.sort((a, b) => b.age - a.age);
  let res = sorted[0].age - sorted[sorted.length - 1].age;
  document.getElementById("output4").innerHTML = `Yosh farqi: ${res}`;
}

function m5() {
  const input = document.getElementById("inputValue5").value;
  const array = input.trim().split(" ");
  let obj = {};
  let length = [];
  for (let i = 0; i < array.length; i++) {
    length.push(array[i].length);
  }
  const minL = Math.min(...length);
  const maxL = Math.max(...length);
  obj.minWord = array.filter((item) => item.length === minL).join("");
  obj.maxWord = array.filter((item) => item.length === maxL).join("");
  document.getElementById("output5").innerHTML = `<pre> ${JSON.stringify(
    obj,
    null,
    2
  )} </pre>`;
}

const m6 = () => {
  const inputValue = document.getElementById("inputValue6").value;
  const numbers = inputValue.split(" ").map(Number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const result = sum
    .toString()
    .split("")
    .map((num) => parseInt(num));
  document.getElementById("output6").innerHTML = `Result: [${result.join(
    ", "
  )}]`;
};

function m7() {
  let obj = { a: 2, b: 5, c: 7 };
  let res = Object.entries(obj)
    .map(([key, value]) => `'${key}${value}'`)
    .join(", ");
  document.getElementById("output7").innerHTML = `<pre>[${res}]</pre>`;
}

function m8() {
  let obj = { a: 2, b: 5, c: 7 };
  let sum = Object.values(obj).reduce((acc, value) => acc + value, 0);
  let res = sum
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
  document.getElementById("output8").innerHTML = `<pre>[${res}]</pre>`;
}

function m9() {
  const input9 = +document.getElementById("inputValue9").value;
  const digitCount = input9.toString().length;
  document.getElementById(
    "output9"
  ).innerHTML = `<pre>Son Uzunligi: ${digitCount}</pre>`;
  
}





function m10() {
  const input10 = +document.getElementById("inputValue10").value;
  const reversed = input10.toString().split("").reverse().join("");
  const res = parseInt(reversed);
  document.getElementById("output10").innerHTML = `<pre>${res}</pre>`;
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
