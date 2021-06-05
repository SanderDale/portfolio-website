const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	links.forEach((link) => {
		link.classList.toggle("fade");
	});
	hamburger.classList.toggle("toggle");
});

const hotelContainer = document.querySelector(".home-hotel-container");
const imageOverlayHotel = document.querySelector(".image-overlay-hotel");
const imageOverlayIconsHotel = document.querySelector(".image-overlay-icons-hotel");

hotelContainer.addEventListener("mouseover", () => {
	imageOverlayHotel.style.opacity = 1;
	imageOverlayIconsHotel.style.transform = "translateY(0)";
	imageOverlayIconsHotel.style.transition = "transform 0.25s";
});

hotelContainer.addEventListener("mouseout", () => {
	imageOverlayHotel.style.opacity = 0;
	imageOverlayIconsHotel.style.transform = "translateY(20px)";
	imageOverlayIconsHotel.style.transition = "transform 0.25s";
});

const portfolioContainer = document.querySelector(".home-portfolio-container");
const imageOverlayPortfolio = document.querySelector(".image-overlay-portfolio");
const imageOverlayIconsPortfolio = document.querySelector(".image-overlay-icons-portfolio");

portfolioContainer.addEventListener("mouseover", () => {
	imageOverlayPortfolio.style.opacity = 1;
	imageOverlayIconsPortfolio.style.transform = "translateY(0)";
	imageOverlayIconsPortfolio.style.transition = "transform 0.25s";
});

portfolioContainer.addEventListener("mouseout", () => {
	imageOverlayPortfolio.style.opacity = 0;
	imageOverlayIconsPortfolio.style.transform = "translateY(20px)";
	imageOverlayIconsPortfolio.style.transition = "transform 0.25s";
});
