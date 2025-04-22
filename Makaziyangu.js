*document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".premium-properties .slide");

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex = (n + slides.length) % slides.length;
        slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    document.querySelector(".premium-properties .next").addEventListener("click", nextSlide);
    document.querySelector(".premium-properties .prev").addEventListener("click", prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    showSlide(slideIndex);
});
function showTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Show the selected tab
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}*