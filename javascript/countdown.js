/* en funktion start */
(function start()
   {
      v = setInterval(mytimer, 1);
      v = setInterval(mytimer, 1000);
      x = setInterval(mytimer2, 1);
      x = setInterval(mytimer2, 1000);
   })();

  function mytimer() {
      var obj = getTime('2018-01-15');
        if(obj.days<=0 && obj.hours<=0)  {
          clearInterval(v);                         //Stoppa timern
          document.getElementById("clock").innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
        }
         document.getElementById("dday").innerHTML = obj.days;
         document.getElementById("dhour").innerHTML = obj.hours;
         document.getElementById("dmin").innerHTML = obj.minutes;
         document.getElementById("dsec").innerHTML = obj.seconds;
  }

  function mytimer2()
    {
      var obj = getTime('2018-05-31');
      if(obj.days<=0 && obj.hours<=0)  {
        clearInterval(x);                           //Stoppa timern
        document.getElementById("clock2").innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
      }
        document.getElementById("dday2").innerHTML = obj.days;
        document.getElementById("dhour2").innerHTML = obj.hours;
        document.getElementById("dmin2").innerHTML = obj.minutes;
        document.getElementById("dsec2").innerHTML = obj.seconds;
  }

  function getTime(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());            // parses a date string and returns the number of milliseconds between the date string and midnight of January 1, 1970.
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
  }
