jQuery(function ($) {
  var latitude = 0, longitude = 0;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#geo_latitude").val(position.coords.latitude);
      $("#geo_longitude").val(position.coords.longitude);
    }, function() {
      $("#geo_latitude").val(0);
      $("#geo_longitude").val(0);
    });
  }
  $("#geo_latitude").val(latitude);
  $("#geo_longitude").val(longitude);
  $("#map_button").click(function() {
    $(".geo_display").empty();
    var imgSrc = "http://maps.googleapis.com/maps/api/staticmap?center=" + $("#geo_latitude").val() + "," + $("#geo_longitude").val() + "&zoom=14&size=250x250&sensor=false";
    $(".geo_display").append("<img src=\"" + imgSrc + "\" />");
  });
  $("#canvas_button").click(function() {
  var canvas = document.getElementById('canvas_example');
    canvas.width = canvas.width;
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.fillStyle = $("#canvas_color_2").val();
      ctx.globalAlpha = $("#canvas_opacity").val() / 100.0;
      ctx.arc(75,75,60,0,Math.PI*2,true); // Outer circle
      ctx.fill();
      ctx.strokeStyle = $("#canvas_color_1").val();
      ctx.fillStyle = $("#canvas_color_1").val();
      ctx.arc(75,75,60,0,Math.PI*2,true); // Outer circle
      ctx.moveTo(45,90);
      ctx.arc(75,75,35,Math.PI * .85,Math.PI * .15,true);   // Mouth (clockwise)
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(60,60);
      ctx.arc(55,60,7,0,Math.PI*2,true);  // Left eye
      ctx.moveTo(100,60);
      ctx.arc(95,60,7,0,Math.PI*2,true);  // Right eye
      ctx.fill();
    }
  });
});
