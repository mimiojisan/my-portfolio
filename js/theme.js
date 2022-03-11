/*=================================================*/
/*宣言*/
/*=================================================*/

const $size = window.innerWidth;
const $break = 960;

if($size > $break) {
function FixedAnime() {
	var elemTop = $('#works').offset().top;
	var scroll = $(window).scrollTop();

	if(scroll <= 20){
		$('#header').addClass('DownMove');
		$('#header').removeClass('bg-color');
	} else if (scroll >= elemTop){
			$('#header').removeClass('UpMove');
			$('#header').addClass('DownMove');
			$('#header').addClass('bg-color');

		}else{
			if($('#header').hasClass('DownMove')){
				$('#header').removeClass('DownMove');
				$('#header').addClass('UpMove');
			}
		}
}

$(window).scroll(function () {
	FixedAnime();
});
}

  // 各コンテンツをふわっと表示させるJS 
window.onload = function() {
	scroll_effect();
  
	$(window).scroll(function(){
	  scroll_effect();
	});
  
	function scroll_effect(){
	  $('.effect-fade').each(function(){
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight){
		  $(this).addClass('effect-scroll');
		}
	  });
	}
  };