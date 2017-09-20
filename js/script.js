$(function () { // wait for document ready
  var flightpath = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        {x: 100, y: -20},
        {x: 300, y: 10}
      ]
    },
    looping: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        {x: 510, y: 60},
        {x: 620, y: -60},
        {x: 500, y: -100},
        {x: 380, y: 20},
        {x: 500, y: 60},
        {x: 580, y: 20},
        {x: 620, y: 15}
      ]
    },
    leave: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        {x: 660, y: 20},
        {x: 800, y: 130},
        {x: $(window).width() + 300, y: -100},
      ]
    }
  };
  // init controller
  var controller = new ScrollMagic.Controller();

  // create tween
  var tween = new TimelineMax()
    .add(TweenMax.to($("#plane"), 1.2, {css: {bezier: flightpath.entry}, ease: Power1.easeInOut}))
    .add(TweenMax.to($("#plane"), 2, {css: {bezier: flightpath.looping}, ease: Power1.easeInOut}))
    .add(TweenMax.to($("#plane"), 1, {css: {bezier: flightpath.leave}, ease: Power1.easeInOut}));

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
    .setPin("#target")
    .setTween(tween)
    //      .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});

window.onload = function () {
  try {
    TagCanvas.activeCursor = 'default';
    TagCanvas.wheelZoom = false;
    TagCanvas.noMouse = true;
    TagCanvas.initial = [-0.1, 0.1];
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.Start('myCanvas');
  } catch (e) {
    // something went wrong, hide the canvas container
//      document.getElementById('myCanvasContainer').style.display = 'none';
    console.log("Jakis problem, zgłoś do developera...!");
  }
};

$(document).ready(function () {


  if (!$('myCanvas').tagcanvas({
      activeCursor: 'none',
      textHeight: 25,
      outlineColour: 'transparent',
      minBrightness: 0.04,
      pulsateTo: 0.6,
      initial: [-0.1, 0.1],
      decel: 0.95,
      reverse: true,
      hideTags: false,
      weight: false,
      imageScale: 1,
      fadeIn: 1000,
//      textColour : 'null',
//      outlineThickness : 'null',
      maxSpeed: 0.03,
      depth: 0.99
    })) {
    $('#myCanvasContainer').hide();
  }
})