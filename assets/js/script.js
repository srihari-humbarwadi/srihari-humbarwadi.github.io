$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 200, 
      edge: 'left',    
    }
  );

 });
 $(document).ready(function(){
    $('.parallax').parallax();
 });
 var $root = $('html, body');

$('a[href^="#res"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

$('a[href^="#resmobile"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('a[href^="#con"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

$('a[href^="#conmobile"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

function hidesidenav(){
	 $('.button-collapse').sideNav('hide');
}