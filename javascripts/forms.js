jQuery(function ($) {
  if (Modernizr.inputtypes.date) {
    $("#cc_expiration").show();
	$("#cc_month").prop("required", false);
    $("#cc_year").prop("required", false);
  }
  else {
    $("#cc_month").show();
    $("#cc_year").show();
	$("#cc_expiration").prop("required", false);
  }
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#geo_latitude").val(position.coords.latitude);
      $("#geo_longitude").val(position.coords.longitude);
    }, function() {
      $("#geo_latitude").val(0);
      $("#geo_longitude").val(0);
    });
  }

  $("#map_button").click(function() {
    $(".geo_display").empty();
    var imgSrc = "http://maps.googleapis.com/maps/api/staticmap?center=" + $("#geo_latitude").val() + 
      "," + $("#geo_longitude").val() + "&zoom=" + $("#geo_zoom").val() + "&size=250x250&sensor=false";
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
      ctx.arc(75,75,35,Math.PI * 0.85,Math.PI * 0.15,true);   // Mouth (clockwise)
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

  $("#progress_button").click(function() {
    var progress = 0, maxProgress = 100;
    var currentProgress = $("#progress_bar").prop("value");
    if (currentProgress === 0 || currentProgress === maxProgress) {
      $("#progress_button").prop("disabled", true);
      $("#progress_bar").prop("max", maxProgress);
      $("#progress_bar").prop("value", progress);
      var progressTimer = window.setInterval(function() {
        progress += Math.floor(Math.random() * 20);
        if (progress >= maxProgress) {
          $("#progress_text").html(maxProgress + "%");
          $("#progress_bar").prop("value", progress);
          $("#progress_button").prop("disabled", false);
          window.clearInterval(progressTimer);
        }
        else {
          $("#progress_text").html(progress + "%");
          $("#progress_bar").prop("value", progress);
        }
      }, 1000);
    }
  });
});
