document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		document.getElementById("pageLoader").classList.add("hidden");
		setTimeout(() => {
			document.getElementById("pageLoader").style.display = "none";
		}, 1000);
	}, 1900);
});

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.toggle("nav--active");

	navBtnBars.classList.remove("black-bars-color");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

// HOLO CARD FLIPPING

const holoCard = document.querySelector('.holo-card');

holoCard.addEventListener('click', function() {
  holoCard.classList.toggle('flipped');
});

// BIRTHDAY COUNTER
const startDate = new Date("2007-02-03T01:50:00");

function updateCounter() {
	const now = new Date();
	const diff = now - startDate;
	const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	const months = Math.floor(
		(diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
	);
	const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);
	document.getElementById("years").textContent = years < 10 ? "0" + years : years;
	document.getElementById("months").textContent = months < 10 ? "0" + months : months;
	document.getElementById("days").textContent = days < 10 ? "0" + days : days;
	document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
	document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
	document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateCounter, 1000);

updateCounter();

// STATISTICS COUNTERS

function isSectionInView(section) {
	const rect = section.getBoundingClientRect();
	return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

let valueDisplays = document.querySelectorAll(".stats-number");
let interval = 10000;

valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function countingStats () {
		startValue += 1;
		valueDisplay.textContent = startValue + "+";
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});

const counterSection = document.getElementById("statsWheelBox");
window.addEventListener("scroll", function (){
	if (isSectionInView(counterSection)) {
		this.setTimeout(countingStats, 2000);
	}
});

// CURRENT YEAR IN A FOOTER

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleObserver);
