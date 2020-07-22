if (window.addEventListener) {
  var state = 0,
    do_want = [
      83,
      85,
      66,
      77,
      65,
      82,
      73,
      78,
      69,
    ]; /*submarine*/ /*[38,38,40,40,37,39,37,39,66,65]*/
  var state2 = 0,
    do_want2 = [65, 67, 67, 85, 69, 73, 76]; /*accueil*/
  var state3 = 0,
    do_want3 = [83, 84, 69, 69, 86, 69, 78]; /*steeven*/
  window.addEventListener(
    "keydown",
    function (e) {
      if (e.keyCode == do_want[state]) state++;
      else state = 0;
      if (state == 9) window.location = "submarine.html";
      if (e.keyCode == do_want2[state2]) state2++;
      else state2 = 0;
      if (state2 == 7) window.location = "index.html";
      if (e.keyCode == do_want3[state3]) state3++;
      else state3 = 0;
      if (state3 == 7) window.location = "bdsm.html";
      },
    true
  );
  }
