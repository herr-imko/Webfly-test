document.querySelector("form button").onclick = () => {
	document.querySelector("form").remove();
	document.querySelector("#signup h2").innerHTML = "Спасибо";
	document.querySelector("#signup .subtitle").innerHTML = "В ближайшее время с Вами свяжется администратор. Напоминаем, что мы работаем без выходных с 9:00 до 21:00.";
};

document.querySelectorAll(".subnav a").forEach((a) => {
	a.onclick = () => {
		document.querySelectorAll(".subnav a").forEach((aa) => {
			aa.classList.remove("active");
		});
		a.classList.add("active");
	};
});

var Parent = document.querySelector("#doctor-about");
var ChildHeight = Parent.firstElementChild.offsetHeight;
var a = document.querySelector(".fixed-aqua");


