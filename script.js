window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY > 0;
    navbar.classList.toggle('scrolled', scrolled);
  });

document.getElementById('box').addEventListener('click', function(){
     alert('I got clicked');
  })



const rotatingImage = document.querySelector('.rotating-image');
window.addEventListener('scroll', () => {
  const rotation = window.scrollY;
  rotatingImage.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});
