$(function (){


  //flickity slider

  $('.main-carousel').flickity({
  // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true
  });

  // A function to check for an email address in the format
  $('form').on('submit', function(event){

      event.preventDefault();

      var userEmail = $('input[type="email"]').val();

      if (userEmail) {
        alert('Thank you for subscribing!');
      } else {
        alert('Please provide a valid email address');
      }
  });


  // smooth scrolling function, taking into account the fixed header
  // $target.offset().top - height of header

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var $target = $(this.hash);

	    $('html, body').stop().animate(
        {
	        'scrollTop': $target.offset().top - ($('header').height())
        },
        900, 'swing');
	});

  //shopping cart incrementing function

  var numItems = 0;

  $('.product-list button').on('click', function (e) {
      e.preventDefault();

      numItems++;
      $('.counter').text(numItems);
      $('.counter').show();


  });


});
