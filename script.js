const menu = document.querySelector('#mobile-menu');        //calls id mobile-menu from home.html
const menuLinks = document.querySelector('.navbar_menu');      //assigns this menuLinks variable to be the container menu of navigation bar.

menu.addEventListener('click', function() {     //allows button action of the toggle menu button when it percieves a 'click'
    menu.classList.toggle('is-active');         //if toggle is clicked, is-active activates and the hamburger icon turns into an X.
    menuLinks.classList.toggle('active');       //if toggle is clicked, this enables the showing or hiding of the menu.
});