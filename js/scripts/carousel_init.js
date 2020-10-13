document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init({
        fullWidth: true
      });
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  //reference: https://materializecss.com/carousel.html