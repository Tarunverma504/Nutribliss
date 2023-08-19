document.getElementById("toggle").addEventListener("click", ()=>{
    document.getElementsByClassName("navLinks")[0].classList.toggle("show");
})

// Inside the <script> tag in your HTML file
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.transformationImages');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
  
    scrollLeftButton.addEventListener('click', function () {
        console.log("sdfdsf");
      container.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the value based on your item width
    });
  
    scrollRightButton.addEventListener('click', function () {
        console.log("d,mndfkgfgnfd,gf");
      container.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the value based on your item width
    });
  });