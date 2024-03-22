const clock = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  //console.log(date.tolocaleTimeString());
  clock.innerHtml = date.toLocaleTimeString();
}, 1000);
