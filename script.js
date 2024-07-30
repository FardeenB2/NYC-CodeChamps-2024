document.addEventListener("DOMContentLoaded", function() { 
  const menu = document.querySelector('#mobile-menu');        //calls id mobile-menu from home.html
  const menuLinks = document.querySelector('.navbar_menu');      

  menu.addEventListener('click', function() {     //allows button action of the toggle menu button when it percieves a 'click'
      menu.classList.toggle('is-active');         //if toggle is clicked, is-active activates and the hamburger icon turns into an X.
      menuLinks.classList.toggle('active');       //if toggle is clicked, this enables the revealing or concealing of the menu.
  });

   // Function to add smooth scroll event listeners
function addScrollListener(linkId, sectionId) {
  document.getElementById(linkId).addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
});
}
 // Add event listeners to each link
addScrollListener("linkAbout", "About");
addScrollListener("linkTracks", "Tracks");
addScrollListener("linkFAQs", "FAQs");
addScrollListener("linkSponsors", "Sponsors");


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


//Countdown timer:
// Set the date we're counting down to
var countDownDate = new Date("September 29, 2024 0:00:00").getTime();




// Update the count down every 1 second
var x = setInterval(function() {




// Get today's date and time
var now = new Date().getTime();




// Find the distance between now and the count down date
var distance = countDownDate - now;




// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);




// Display the result in the element with id="demo"
document.getElementById("timer").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";




// If the count down is finished, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);