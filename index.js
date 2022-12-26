const cardButtons = document.querySelectorAll("a.button");
const modal = document.querySelector("div.modal");

function handleButtonClick (event) {
	const button = event.currentTarget;
	const card = button.closest(".card");
	modal.classList.add("open");
	console.log(card)
}

function modalClose() {
	modal.classList.remove("open");
}

modal.addEventListener("click", function(event) {
	const isOutside = event.target.closest(".modal_inner");
	if (!isOutside) {
		modalClose();
	}
})

window.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		modalClose();
	}
})

cardButtons.forEach(button => button.addEventListener("click", handleButtonClick));
