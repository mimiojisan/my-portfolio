
// #return-topをクリックした際の設定
$(function() {
  var topBtn = $('#return-top');
  topBtn.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
        topBtn.fadeIn();
    }else{
        topBtn.fadeOut();
    }
  });
})

  $('#return-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

