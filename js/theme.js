
//   // 各コンテンツをふわっと表示させるJS 
// window.onload = function() {
// 	scroll_effect();
  
// 	$(window).scroll(function(){
// 	  scroll_effect();
// 	});
  
// 	function scroll_effect(){
// 	  $('.effect-fade').each(function(){
// 		var elemPos = $(this).offset().top;
// 		var scroll = $(window).scrollTop();
// 		var windowHeight = $(window).height();
// 		if (scroll > elemPos - windowHeight){
// 		  $(this).addClass('effect-scroll');
// 		}
// 	  });
// 	}
// };

function fadeAnime(){

	  $('.effect-fade').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight){
		  $(this).addClass('effect-scroll');
        }else{
          $(this).removeClass('effect-scroll');

        }
	  });

    $('.p-left').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('slide-in-right');
        }else{
            $(this).removeClass('slide-in-right');

        }
    });

    $('.p-right').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('slide-in-left');
        }else{
            $(this).removeClass('slide-in-left');

        }
    });
    
    $('.p-center').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('bounce-in-top');
        }else{
            $(this).removeClass('bounce-in-top');

        }
    });

	$('.bg-box').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight){
		  $(this).addClass('fade-in');
        }else{
          $(this).removeClass('fade-in');

        }
	  });

	  $('.grid').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight){
		  $(this).addClass('fade-in');
        }else{
          $(this).removeClass('fade-in');

        }
	  });

};

$(window).scroll(function (){
    fadeAnime();
});