jQuery(function ($) {
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
