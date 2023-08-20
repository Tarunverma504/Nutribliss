document.getElementById("toggle").addEventListener("click", ()=>{
    document.getElementsByClassName("navLinks")[0].classList.toggle("show");
})

// Inside the <script> tag in your HTML file
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.transformationImages');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
  
    scrollLeftButton.addEventListener('click', function () {
      container.scrollBy({ left: -400, behavior: 'smooth' }); // Adjust the value based on your item width
    });
  
    scrollRightButton.addEventListener('click', function () {
      container.scrollBy({ left: 400, behavior: 'smooth' }); // Adjust the value based on your item width
    });
  });