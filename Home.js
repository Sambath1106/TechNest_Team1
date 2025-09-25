document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".banner img")
  const dots = document.querySelectorAll(".navigation-tutton .fa-regular")
  let currentSlide = 0
  let slideInterval

  // Initialize first slide
  function initSlider() {
    images[0].classList.add("active")
    dots[0].classList.add("active")
    startAutoSlide()
  }

  // Show specific slide
  function showSlide(index) {
    // Remove active class from all images and dots
    images.forEach((img) => img.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    // Add active class to current slide and dot
    images[index].classList.add("active")
    dots[index].classList.add("active")

    currentSlide = index
  }

  // Next slide function
  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length
    showSlide(currentSlide)
  }

  // Start auto-slide
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000) // Change slide every 4 seconds
  }

  // Stop auto-slide
  function stopAutoSlide() {
    clearInterval(slideInterval)
  }

  // Add click event listeners to navigation dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide()
      showSlide(index)
      startAutoSlide() // Restart auto-slide after manual navigation
    })
  })

  // Pause auto-slide on hover
  const banner = document.querySelector(".banner")
  banner.addEventListener("mouseenter", stopAutoSlide)
  banner.addEventListener("mouseleave", startAutoSlide)

  // Initialize the slider
  initSlider()
})
