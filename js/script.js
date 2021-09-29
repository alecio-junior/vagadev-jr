
 
 $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  $('.carousel_mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  $('.produtos-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  

  function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

  }

  function comprar(){
    let bg = document.querySelector('#bg')
    bg.style.display = 'block';
  }

  var count = 1;
  $('.click').click(function(){
  document.getElementById("carrinho").innerHTML = count;
  ++count;
  });
  

  function fechar(){
    let bg = document.querySelector('#bg')

    bg.style.display = 'none';

    
  }



    


  
                  