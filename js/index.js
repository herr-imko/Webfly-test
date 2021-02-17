$(document).ready(function () {
	document.querySelector("form ").onsubmit = () => {
		event.preventDefault();
		document.querySelector("form").remove();
		document.querySelector("#signup h2").innerHTML = "Спасибо";
		document.querySelector("#signup .subtitle").innerHTML = "В ближайшее время с Вами свяжется администратор. Напоминаем, что мы работаем без выходных с 9:00 до 21:00.";
	};

	if (window.innerWidth > 1024) {
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

		$("header .bot .button-primary.d-mobile").on("click", function () {
			$("header .bot").toggleClass("show");
		});
	}

	$("#signup .input-wrapper input").on("input", function () {
		this.value = this.value.replace(/[^0-9]/g, "");
	});

	if (document.querySelector(".subnav")) {
		window.addEventListener("scroll", function () {
			let sects = {};

			$(".subnav a").each(function () {
				sects[$(this).attr("href")] = null;
			});

			for (const key in sects) {
				sects[key] = $(key).offset().top;
			}

			for (const key in sects) {
				if (window.scrollY + 100 >= sects[key]) {
					var lastScroll = key.slice(1);
				}
			}

			if (lastScroll) {
				document.querySelectorAll(".subnav a").forEach((a) => {
					a.classList.remove("active");
				});
				$(`a[href="#${lastScroll}"]`).addClass("active");
			}
		});

		$(".subnav a").on("click", function () {
			event.preventDefault();
			console.log(window.scrollY, $($(this).attr("href")).offset().top);
			$([document.documentElement, document.body]).animate(
				{
					scrollTop: $($(this).attr("href")).offset().top,
				},
				200,
				"linear"
			);
		});
	}
});
