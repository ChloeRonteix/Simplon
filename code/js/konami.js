if ( window.addEventListener ) {     
  var state = 0, do_want = [83,85,66,77,65,82,73,78,69] /*[38,38,40,40,37,39,37,39,66,65]*/;     
  window.addEventListener("keydown", function(e) { 
        if ( e.keyCode == do_want[state] ) state++; 
        else state = 0; 
        if ( state == 9 ) 
           window.location = "submarine.html"; 
        }, true); 
  }