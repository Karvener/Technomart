
/*  Модальное окно   */
var link = document.querySelector(".btn-about-us-right");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-close");
var nameForm = document.querySelector("[name=name]");
var emailForm = document.querySelector("[name=email]");
var textForm = document.querySelector("[name=text]");
var form = document.querySelector(".modal-form");
var isStorageSupport = true;
var storage = "";


try {
	storage = localStorage.getItem("name");
} catch(err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("overlay-show");
	if(storage) {
		nameForm.value = storage;
		emailForm.focus();
	} else {
		nameForm.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
	popup.classList.remove("modal-error");
});

overlay.addEventListener("click", function(evt) {
	popup.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if(!nameForm.value || !emailForm.value || !textForm.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	} else {
		if(isStorageSupport) {
			localStorage.setItem("nameForm", nameForm.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if(popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			overlay.classList.remove("overlay-show");
			popup.classList.remove("modal-error");
		}
	}
});


/*  Интерактивная карта  */
var linkMap = document.querySelector(".map-mini");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map-close");


linkMap.addEventListener("click", function(evt) {
	popupMap.classList.add("map-show");
});

closeMap.addEventListener("click", function(evt) {
	popupMap.classList.remove("map-show");
});


/*  Слайдер  */
var arrowLeft = document.querySelector(".arrow-left");
var arrowRight = document.querySelector(".arrow-right");
var sliderRow = document.querySelector(".slider-row");
var sliderDots = document.querySelectorAll(".slider-dot");/* Подключить точки к слайдеру */
var sliderAmount = document.querySelectorAll(".slider").length;
var sliderWidth = document.querySelector(".slider").offsetWidth;
var sliderRowLenght = sliderWidth * sliderAmount + 30;
sliderRow.style.width = "1500 px";
console.log(sliderRow);


arrowLeft.addEventListener("click", function() {
	sliderRow.style.transform = 'translateX(0)';
});

arrowRight.addEventListener("click", function() {
	sliderRow.style.transform = 'translateX(-620px)';
});


/*  Смена блоков приемуществ  */
var delivery = document.querySelector(".services-list-1");
var gallery = document.querySelector(".services-list-2");
var credit = document.querySelector(".services-list-3");
var deliveryBlock = document.querySelector(".services-info-1");
var galleryBlock = document.querySelector(".services-info-2");
var creditBlock = document.querySelector(".services-info-3");

delivery.addEventListener("click", function() {
	gallery.classList.remove("services-list-active");
	credit.classList.remove("services-list-active");
	galleryBlock.classList.remove("services-info-active");
	creditBlock.classList.remove("services-info-active");
	delivery.classList.add("services-list-active");
	deliveryBlock.classList.add("services-info-active");
});

gallery.addEventListener("click", function() {
	delivery.classList.remove("services-list-active");
	credit.classList.remove("services-list-active");
	deliveryBlock.classList.remove("services-info-active");
	creditBlock.classList.remove("services-info-active");
	gallery.classList.add("services-list-active");
	galleryBlock.classList.add("services-info-active");
});

credit.addEventListener("click", function() {
	gallery.classList.remove("services-list-active");
	delivery.classList.remove("services-list-active");
	galleryBlock.classList.remove("services-info-active");
	deliveryBlock.classList.remove("services-info-active");
	credit.classList.add("services-list-active");
	creditBlock.classList.add("services-info-active");
});


/*  Модальное окно "В корзину"  */
/*
var addBuy = document.querySelector(".products-buy");
var addCard = document.querySelector(".modal-add-cart");
var cardClose = document.querySelector(".add-cart-close");

addBuy.addEventListener("click", function() {
	addCard.classList.add("modal-add-active");
});
*/


