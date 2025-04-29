// Wait until the full DOM is loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".premium-properties .slide");
    const nextBtn = document.querySelector(".premium-properties .next");
    const prevBtn = document.querySelector(".premium-properties .prev");

    // Function to show a specific slide
    function showSlide(n) {
        slides.forEach(slide => slide.style.display = "none"); // Hide all slides
        slideIndex = (n + slides.length) % slides.length; // Loop around
        slides[slideIndex].style.display = "block"; // Show current slide
    }

    // Show next slide
    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    // Show previous slide
    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    // Add click events if the buttons exist
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Show the first slide initially
    showSlide(slideIndex);
});

// Function to handle tab switching
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');

    // Hide all tab content
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Show selected tab if it exists
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}
