


  mybutton = document.getElementById("myBtn");


  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


    function passWord() {
      var testV = 1;
      var pass1 = prompt('Skriv in det lösenord du fått på sms.', ' ');
      while (testV < 3) {
        if (!pass1)
          history.go(-1);
        if (pass1.toLowerCase() == "1234") {
          alert('Rätt lösenord!');
          window.open('2index.html');
          break;
        }
        testV += 1;
        var pass1 =
          prompt('Åtkommst nekad - Lösenordet fel, försök igen.', 'Password');
      }
      if (pass1.toLowerCase() != "Lösenord" & testV == 3)
        history.go(-1);
      return " ";
    }
