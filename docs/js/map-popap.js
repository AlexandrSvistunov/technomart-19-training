var maplink = document.querySelector(".map");
var mappopap = document.querySelector(".modal-map");
var mapclose = document.querySelector(".map-close");

maplink.addEventListener("click",function(evt){
    evt.preventDefault();
    mappopap.classList.add("modal-show");
});
mapclose.addEventListener("click",function(evt){
  evt.preventDefault();
    mappopap.classList.remove("modal-show");
}); 

window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27) {
      if (mappopap.classList.contains ("modal-show")) {
          evt.preventDefault();
          mappopap.classList.remove("modal-show");
      }
    }
});

