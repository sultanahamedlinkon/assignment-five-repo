document.getElementById('discover').addEventListener('click', function (event) {
 window.location.href = 'discover.html'
})

const newDate = new Date();
const updateTime = (newDate.toLocaleString('en-us', {
 weekday: "long",
 year: "numeric",
 month: "long",
 day: "numeric"
}));
const currentTimeParent = document.getElementById('current-date-time');
currentTimeParent.innerHTML = `
 <p class='text-xl font-semibold'> ${updateTime} </p>
`


document.getElementById('mobile-btn').addEventListener('click', function (event) {
 completed();
 getHistory('mobile-text');
 event.target.setAttribute('disabled', true);
})

document.getElementById('dark-btn').addEventListener('click', function (event) {
 completed();
 getHistory('dark-text');
 event.target.setAttribute('disabled', true);
})


document.getElementById('home-btn').addEventListener('click', function (event) {
 completed();
 getHistory('home-title');
 event.target.setAttribute('disabled', true);
})


document.getElementById('emoji-btn').addEventListener('click', function (event) {
 completed();
 getHistory('emoji-title');
 event.target.setAttribute('disabled', true);
})


document.getElementById('api-btn').addEventListener('click', function (event) {
 completed();
 getHistory('api-title');
 event.target.setAttribute('disabled', true);
})


document.getElementById('job-btn').addEventListener('click', function (event) {
 completed();
 getHistory('job-title');
 event.target.setAttribute('disabled', true);
})


document.getElementById('clear-btn').addEventListener('click', function (event) {
 const clear = document.getElementById("history-container");
 clear.innerHTML = '';
})



document.addEventListener("DOMContentLoaded", function () {
 let button = document.getElementById("random-bg");

 if (button) {
     button.addEventListener("click", function () {
         document.body.style.backgroundColor = getRandomColor();
     });
 } else {
     console.error("not working");
 }
});

function getRandomColor() {
 let letters = "0123456789ABCDEF";
 let color = "#";
 for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
