
// calculate acreage

$(document).ready(function($) {
  console.log("working");

  // initialize variables

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
     acres = (initialCapacity - currentVolume) / applicationRate;
     var acresText = "<div class='alert alert-success' role='alert'>You can spray " + acres + " acres at this tank capacity.</div>";
    $("#acres").append(acresText);
  });

});