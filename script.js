//This is for the toggle nav menu
const menu = document.querySelector('#mobile-menu');        //calls id mobile-menu from home.html
const menuLinks = document.querySelector('.navbar_menu');      

menu.addEventListener('click', function() {     //allows button action of the toggle menu button when it percieves a 'click'
    menu.classList.toggle('is-active');         //if toggle is clicked, is-active activates and the hamburger icon turns into an X.
    menuLinks.classList.toggle('active');       //if toggle is clicked, this enables the revealing or concealing of the menu.
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  });
  
  const h3ToFade = document.querySelector('.fade-on-scroll');
  observer.observe(h3ToFade);