const hours = document.querySelector(".hours")
const minuts = document.querySelector(".minuts")
const secunds = document.querySelector(".secunds")


setInterval(() => {
     let date = new Date();
     let hour = date.getHours();
     let min = date.getMinutes();
     let sec = date.getSeconds();
          hours.innerHTML = hour < 10 ? "0" + hour : hour;
          minuts.innerHTML = min < 10 ? "0" + min : min;
          secunds.innerHTML = sec < 10 ? "0" + sec : sec;
}, 1000)