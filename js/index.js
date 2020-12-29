document.querySelector("form ").onsubmit = () => {
	event.preventDefault();
	document.querySelector("form").remove();
	document.querySelector("#signup h2").innerHTML = "Спасибо";
	document.querySelector("#signup .subtitle").innerHTML = "В ближайшее время с Вами свяжется администратор. Напоминаем, что мы работаем без выходных с 9:00 до 21:00.";
};

if (window.screen.width > 1024) {
	document.querySelectorAll(".subnav a").forEach((a) => {
		a.onclick = () => {
			document.querySelectorAll(".subnav a").forEach((aa) => {
				aa.classList.remove("active");
			});
			a.classList.add("active");
		};
	});
} else {
	$("footer .title").on("click", function () {
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	});

	$("header .top .more").on("click", function () {
		$("header .bot").toggleClass("show");
	});

	$("header .bot .close").on("click", function () {
		$("header .bot").toggleClass("show");
	});
}

$("#signup .input-wrapper input").on("input", function () {
	let last = this.value[this.value.length - 1];
	this.value = this.value.slice(0, this.value.length - 1);
	if (last.match("^[0-9]+$")) {
		this.value = this.value + last;
	}
});


