//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//Open the menu on click
selectElement('.open').addEventListener('click', () =>{
   selectElement( '.nav-list').classList.add('active');
});
//Close the menu on click
selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
});
//Close the menu on clicking the nav-link
selectElement('.nav-list').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 },600);
        return false;
    });

    AOS.init({
        easing:'ease',
        duration:1800,
        once:true
    })
});


