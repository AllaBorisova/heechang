jQuery(document).ready(function ($) {
  //phone mask
  $('.input-tel').mask('+7 (999) 999-99-99');
  $('.input-code').mask('9999');

  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.header-popup__close').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.input-file input[type=file]').on('change', function () {
    let file = this.files[0];
    // $(this).next().html(file.name);
  } );

  $('.counter__plus').click(function(e){
    fieldName = $(this).parent().find('.add-sale__input');
    let currentVal = Number(fieldName.val());
    if (!isNaN(currentVal)) {
      fieldName.val(currentVal + 1);
    } else {
      fieldName.val(0);
    }
  });

  $(".counter__minus").click(function(e) {
      fieldName = $(this).parent().find('.add-sale__input');
      let currentVal = Number(fieldName.val());
      if (!isNaN(currentVal) && currentVal > 0) {
        fieldName.val(currentVal - 1);
      } else {
        fieldName.val(0);
      }
  });


});
