function sideBar(){
  //Funcion que transforma el boton del menu lateral y abre o cierra el menu lateral
  $('.menu-link-wrapper').click(function(){
    $('.menu-link-wrapper .menu-link').toggleClass('menu-trigger-open');
    if($('#menu-trigger').hasClass('menu-trigger-open')){
      openNav();
    }
    else{
      closeNav();
    }
  });
  //Funcion que abre la barra lateral secundaria con la informacion de la cita
  // $('.date').click(function(e){
  //   e.stopPropagation();
  //   console.log('Clicko');
  //   $('.date').toggleClass('appmt-open');
  //   if($('.date').hasClass('appmt-open')){
  //     $('.appmt-data').animate({width: '200px'}, function(){
  //       $('.data-wrapper').fadeIn('fast');
  //     });
  //     //$('.appmt-cal').animate({width: '200px'});
  //   }
  //   else{
  //     $('.data-wrapper').fadeOut('fast', function(){
  //       $('.appmt-data').animate({width: '0'});
  //     });
  //     //$('.appmt-cal').animate({width: '0'});
  //   }
  // });
  //Funcion que abre la barra lateral secundaria para gragar cita
  // $('.schedule td').click(function(){
  //   console.log('Clicko');
  //   $('.schedule td').toggleClass('new-open');
  //   if($('.schedule td').hasClass('new-open')){
  //
  //     $('.appmt-new').animate({width: '200px'}, function(){
  //       $('.appmt-new span').fadeIn('fast');
  //       $('.appmt-new img').fadeIn('fast');
  //     });
  //     //$('.appmt-cal').animate({width: '200px'});
  //     //$('.appmt-new').animate({paddingTop: '2%'});
  //     //$('.appmt-new').animate({paddingLeft: '2%'});
  //   }
  //   else{
  //     $('.appmt-new span, .appmt-new img').fadeOut('fast', function(){
  //       $('.appmt-new').animate({width: '0'});
  //     });
  //     //$('.appmt-cal').animate({width: '0'});
  //     //$('.appmt-new').animate({paddingTop: '0'});
  //     //$('.appmt-new').animate({paddingLeft: '0'});
  //   }
  // });
  //Funcion para el hover de la sección agregar cita
  $('#app-new-pac').hover(
    function(){
      $('#app-new-pac>img').attr('src', 'assets/img/app-add-icon-blue.png');
      $('#app-new-pac>span').css('color', '#135E9C');
    },
    function(){
      $('#app-new-pac>img').attr('src', 'assets/img/app-add-icon.png');
      $('#app-new-pac>span').css('color', '#5D5D5D');
    }
  );
  $('#app-new-date').hover(
    function(){
      $('#app-new-date>img').attr('src', 'assets/img/app-schedule-icon-blue.png');
      $('#app-new-date>span').css('color', '#135E9C');
    },
    function(){
      $('#app-new-date>img').attr('src', 'assets/img/app-schedule-icon.png');
      $('#app-new-date>span').css('color', '#5D5D5D');
    }
  );
  $('.edit-data').hover(
    function(){
      $('.edit-data').attr('src', 'assets/img/app-edit-icon-blue.png');
      //$('#app-new-date>span').css('color', '#135E9C');
    },
    function(){
      $('.edit-data').attr('src', 'assets/img/app-edit-icon.png');
      //$('#app-new-date>span').css('color', '#5D5D5D');
    }
  );
  $('.pacient-list li').hover(function(){
    //console.log('Engtra');
      $(this).find('.edit-data').show();
      //$('#app-new-date>span').css('color', '#135E9C');
    },
    function(){
      //console.log('sale');
      $(this).find('.edit-data').hide();
      //$('#app-new-date>span').css('color', '#5D5D5D');
    }
  );
  $('#1').hover(
    function(){
      //console.log('Dentro');
      $('#1>a>img').attr('src', 'assets/img/app-add-icon-blue.png');
      $('#1>a>div>span').css('color', '#135E9C');
    },
    function(){
      //console.log('Fuera');
      $('#1>a>img').attr('src', 'assets/img/app-add-icon.png');
      $('#1>a>div>span').css('color', '#5D5D5D');
    }
  );
  $('#2').hover(
    function(){
      $('#2>img').attr('src', 'assets/img/app-ch-icon-blue.png');
      $('#2>div>span').css('color', '#135E9C');
    },
    function(){
      $('#2>img').attr('src', 'assets/img/app-ch-icon.png');
      $('#2>div>span').css('color', '#5D5D5D');
    }
  );
  $('#3').hover(
    function(){
      $('#3>a>img').attr('src', 'assets/img/app-xr-icon-blue.png');
      $('#3>a>div>span').css('color', '#135E9C');
    },
    function(){
      $('#3>a>img').attr('src', 'assets/img/app-xr-icon.png');
      $('#3>a>div>span').css('color', '#5D5D5D');
    }
  );
  $('#4').hover(
    function(){
      $('#4>img').attr('src', 'assets/img/app-notes-icon-blue.png');
      $('#4>div>span').css('color', '#135E9C');
    },
    function(){
      $('#4>img').attr('src', 'assets/img/app-notes-icon.png');
      $('#4>div>span').css('color', '#5D5D5D');
    }
  );
  $('#5').hover(
    function(){
      //console.log('Dentro');
      //$('#5').hide();
      $('#5>a>img').attr('src', 'assets/img/app-edit-icon-blue.png');
      $('#5>a>span').css('color', '#135E9C');
    },
    function(){
      //console.log('Fuera');
      //$('#5').show();
      $('#5>a>img').attr('src', 'assets/img/app-edit-icon.png');
      $('#5>a>span').css('color', '#5D5D5D');
    }
  );
  $('#6').hover(
    function(){
      //console.log('Dentro');
      //$('#5').hide();
      $('#6>a>img').attr('src', 'assets/img/app-addxr-icon-blue.png');
      $('#6>a>div>span').css('color', '#135E9C');
    },
    function(){
      //console.log('Fuera');
      //$('#5').show();
      $('#6>a>img').attr('src', 'assets/img/app-addxr-icon.png');
      $('#6>a>div>span').css('color', '#5D5D5D');
    }
  );
  $('#7').hover(
    function(){
      //console.log('Dentro');
      //$('#5').hide();
      $('#7>a>img').attr('src', 'assets/img/app-img-icon-blue.png');
      $('#7>a>div>span').css('color', '#135E9C');
    },
    function(){
      //console.log('Fuera');
      //$('#5').show();
      $('#7>a>img').attr('src', 'assets/img/app-img-icon.png');
      $('#7>a>div>span').css('color', '#5D5D5D');
    }
  );
  $('#app-asig').hover(
    function(){
      $('#app-asig>img').attr('src', 'assets/img/app-schedule-icon-blue.png');
      $('#app-asig>div>span').css('color', '#135E9C');
    },
    function(){
      $('#app-asig>img').attr('src', 'assets/img/app-schedule-icon.png');
      $('#app-asig>div>span').css('color', '#5D5D5D');
    }
  );
  $('#app-save').hover(
    function(){
      $('#app-save>img').attr('src', 'assets/img/app-save-icon-blue.png');
      $('#app-save>div>span').css('color', '#135E9C');
    },
    function(){
      $('#app-save>img').attr('src', 'assets/img/app-save-icon.png');
      $('#app-save>div>span').css('color', '#5D5D5D');
    }
  );

}
//funcion que abre la barra lateral
function openNav() {
  console.log('Abrio');
  $('#mySidenav').animate({width: '150px'}, 'fast', function(){
    $('.sidenav>a>span').fadeIn('fast');
  });
  $('#app-content').animate({marginLeft: '+=100px'}, 'fast', function(){
    showDate();
  });
  $('#menu-trigger').animate({marginLeft: '0px'}, 'fast');
}
//funcion que cierra la barra lateral
function closeNav() {
  console.log('Cerro');
  $('.sidenav>a>span').fadeOut('fast', function(){
    $('#mySidenav').animate({width: '50px'}, 'fast');
    $('#app-content').animate({marginLeft: '50px'}, 'fast', function(){
      showDate();
    });
    $('#menu-trigger').animate({marginLeft: '-90px'}, 'fast');
  });

}
