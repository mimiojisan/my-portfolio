/*=================================================*/
/*宣言*/
/*=================================================*/

const $size = window.innerWidth;
const $break = 960;

if($size > $break) {
function FixedAnime() {
	var elemTop = $('#about').offset().top;
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
