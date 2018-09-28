$(document).ready(function() { 
  var $data=$('#data');
  var $weathercond=$('#weathercond');
  var $converted=$('#converted');
  let lat;
  let lon;
  var C;
  var F;
  
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    url= 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon;
 
 // start get
  $.get(url, function (response) {
      C= response.main.temp;
      C= Math.round(C * 10) / 10;
      F=(C*1.8 +32);
      F=Math.round(F * 10) / 10;
      var temper='c'; //init
    $("#location").html(response.name + ', ' + response.sys.country);
    $("#converted").html(C + ' C');
    $("#weathercond").html(response.weather[0].main + " (" + response.weather[0].description + ")");
    $("#weathericon").html('<img src=' + response.weather[0].icon + '>');
    
    $("#convert").on("click", 
       function () {
               
          if(temper=='f') {
            $(".converted").html( C + " C"); 
            temper='c';
            }
          else if(temper=='c'){
            $(".converted").html( F + " F");
            temper='f';
            }
        }); //end convert temp
      });  //end get
    }); //end get location
    }   //end if

  });
