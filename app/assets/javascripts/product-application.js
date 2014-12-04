// calculate acreage

$(document).ready(function($) {
  console.log("working");

  var initialCapacity;
  var currentVolume;
  var applicationRate;
  var acres;

  $("#initial-capacity").blur(function(){
     initialCapacity =  parseInt($("#initial-capacity").val(), 10);
  });

  $("#current-volume").blur(function(){
     currentVolume =  parseInt($("#current-volume").val(), 10);
  });

  $("#application-rate").blur(function(){
     applicationRate =  parseInt($("#application-rate").val(), 10);
  });
  
  $( "#calculate" ).click(function() {
    acres = (initialCapacity - currentVolume) / applicationRate;
    $("#acres").text(acres);
  });
});