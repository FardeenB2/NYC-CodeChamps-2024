document.addEventListener("DOMContentLoaded", function() { 
  const menu = document.querySelector('#mobile-menu');        //calls id mobile-menu from home.html
  const menuLinks = document.querySelector('.navbar_menu');      

  menu.addEventListener('click', function() {     //allows button action of the toggle menu button when it percieves a 'click'
      menu.classList.toggle('is-active');         //if toggle is clicked, is-active activates and the hamburger icon turns into an X.
      menuLinks.classList.toggle('active');       //if toggle is clicked, this enables the revealing or concealing of the menu.
  });

  const faqQuestions = document.getElementsByClassName('faq-text-container')
  Array.from(faqQuestions).forEach(function(qst) {
    qst.addEventListener('click', function(e) {
      if (e.target.className == 'faq-question') {
        Array.from(faqQuestions).forEach(function(ele) {
          ele.id = "faq-close"
          ele.children[0].children[0].setAttribute("id", "faq-closed-text")
        })
      }
      e.target.parentNode.id = "faq-open"
      e.target.children[0].setAttribute("id", "faq-open-text")
    })
  })

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

});