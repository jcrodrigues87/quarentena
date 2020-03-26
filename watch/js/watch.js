function updateTime () {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // solve the zeros leading
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // get the elements
  var eHour = document.querySelectorAll('.hour')[0];
  var eMin = document.querySelectorAll('.minutes')[0];
  var eSec = document.querySelectorAll('.seconds')[0];

  eHour.innerHTML = hour;
  eMin.innerHTML = minutes;
  eSec.innerHTML = seconds;

  // update the day
  var today = date.getDay();
  var arrDays = ['domingo', 
                 'segunda-feira', 
                 'terça-feira',
                 'quarta-feira',
                 'quinta-feira',
                 'sexta-feira',
                 'sábado'];
  var eToday = document.querySelectorAll('.today')[0];
  eToday.innerHTML = arrDays[today];
}

// call this function each 1/2 second
updateTime();
window.setInterval(updateTime, 500);
