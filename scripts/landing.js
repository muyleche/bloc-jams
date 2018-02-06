// This function will animate all each element in the provided 'points' array.
function animatePoints (points) {

  function revealPoint(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
  };

  // reveal each point (triggering CSS transitions).
  forEach(points, revealPoint);
};

// Callback function to run when the document is loaded.
window.onload = function() {
  if (window.innerHeight > 950) {
    animatePoints(points);
  }
  var sellingPoints = document.getElementsByClassName('selling-points')[0],
      points = document.getElementsByClassName('point'),
      scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200,
      arrow = document.getElementsByClassName('arrow')[0];
  window.addEventListener('scroll',function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(points);
      arrow.style.opacity = 0;
    }
  });
}
