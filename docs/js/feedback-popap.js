var link = document.querySelector(".feedback-link");
var popap = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");

// Открытие - закрытие окна обратной связи
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
	popap.classList.remove("modal-error");
});

// Закрываем по ESC

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popap.classList.contains("modal-show")) {
            evt.preventDefault();
            popap.classList.remove("modal-show");
            popap.classList.remove("modal-error");
        }
    }
});

// Проверка на заполнение полей

var form = popap.querySelector("form");
var name = popap.querySelector("[name=name]");
var mail = popap.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
    if (!name.value || !mail.value) {
        evt.preventDefault();
        popap.classList.add("modal-error");
    }
});


