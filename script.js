

setInterval(() => {
  var today = new Date();
  if (today.getHours() > 12 ) {
    var t = (today.getHours()) - 12 + ":" + today.getMinutes() + ":" + today.getSeconds() + "  PM" + "<br>" + today.toDateString();

    document.getElementById("time").style.fontSize = "xxx-large";
    time.innerHTML = t;
  }
  else if (today.getHours() == 12) {
    var t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "  PM" + "<br>" + today.toDateString();

    document.getElementById("time").style.fontSize = "xxx-large";
    time.innerHTML = t;
  }
  else {
    var t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "  AM" + "<br>" + today.toDateString();
    document.getElementById("time").style.fontSize = "xxx-large";
    time.innerHTML = t;
  }
}, 1000)
function a() {
  var d = new Date();
  if (d.getHours() > 12) {
    var s = " Hello Anish, Now the time is " + ((d.getHours()) - 12) + ":" + d.getMinutes() + " PM And the date is " + d.toDateString();
    responsiveVoice.speak(s);
  }
  else if (d.getHours() == 12) {
    var s = " Hello Anish, Now the time is " + d.getHours() + ":" + d.getMinutes() + " PM And the date is " + d.toDateString();
    responsiveVoice.speak(s);
  }
  else if (d.getHours() == 0) {
    var s = " Hello Anish, Now the time is Zero" + ":" + d.getMinutes() + " AM And the date is " + d.toDateString();
    responsiveVoice.speak(s);
  }
  else {
    var s = " Hello Anish, Now the time is " + d.getHours() + ":" + d.getMinutes() + "AM And the date is " + d.toDateString();
    responsiveVoice.speak(s);
  }
}

