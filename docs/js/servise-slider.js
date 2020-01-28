var choiceDelivery = document.querySelector(".choice-delivery");
var choiceGuarantee = document.querySelector(".choice-guarantee");
var choiceCredit = document.querySelector(".choice-credit");
var delivery = document.querySelector(".delivery");
var guarantee = document.querySelector(".guarantee");
var credit = document.querySelector(".credit");

choiceDelivery.addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.classList.remove("visually-hidden");
	credit.classList.add("visually-hidden");
	guarantee.classList.add("visually-hidden");
	choiceDelivery.classList.add("current-choice");
	choiceGuarantee.classList.remove("current-choice");
	choiceCredit.classList.remove("current-choice");
});

choiceGuarantee.addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.classList.add("visually-hidden");
	credit.classList.add("visually-hidden");
	guarantee.classList.remove("visually-hidden");
	choiceGuarantee.classList.add("current-choice");
	choiceDelivery.classList.remove("current-choice");
	choiceCredit.classList.remove("current-choice");
});

choiceCredit.addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.classList.add("visually-hidden");
	credit.classList.remove("visually-hidden");
	guarantee.classList.add("visually-hidden");
	choiceCredit.classList.add("current-choice");
	choiceDelivery.classList.remove("current-choice");
	choiceGuarantee.classList.remove("current-choice");
});
