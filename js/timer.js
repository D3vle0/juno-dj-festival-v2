// var countDownDate = new Date("August 22, 2020 13:00:00").getTime();
// var x = setInterval(function () {
//     var time = new Date().getTime();
//     var timeleft = countDownDate - time;

//     var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
//     document.getElementById("counter").innerHTML = '<div class="box time">' + days + '</div><div class="box time">' + hours + '</div><div class="box time">' + minutes + '</div><div class="box time">' + seconds + '</div>';

// }, 1000);