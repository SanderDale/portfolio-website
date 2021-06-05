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

const watchesContainer = document.querySelector(".home-watches-container");
const imageOverlayWatches = document.querySelector(".image-overlay-watches");
const imageOverlayIconsWatches = document.querySelector(".image-overlay-icons-watches");

watchesContainer.addEventListener("mouseover", () => {
	imageOverlayWatches.style.opacity = 1;
	imageOverlayIconsWatches.style.transform = "translateY(0)";
	imageOverlayIconsWatches.style.transition = "transform 0.25s";
});

watchesContainer.addEventListener("mouseout", () => {
	imageOverlayWatches.style.opacity = 0;
	imageOverlayIconsWatches.style.transform = "translateY(20px)";
	imageOverlayIconsWatches.style.transition = "transform 0.25s";
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
