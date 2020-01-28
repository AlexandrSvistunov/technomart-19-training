var catalogModal = document.querySelector(".catalog-modal");
var cartFull = document.querySelector(".basket");
function catalogPopup(){
	catalogModal.classList.add("modal-show");
	cartFull.classList.add("full-cart");
   }

var catalogPopupClose = document.querySelector(".catalog-modal-close");

catalogPopupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogModal.classList.remove("modal-show");
	});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (catalogModal.classList.contains("modal-show")) {
            evt.preventDefault();
            catalogModal.classList.remove("modal-show");
			  }
    }
});
