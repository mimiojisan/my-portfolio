/*=================================================*/
/*宣言*/
/*=================================================*/

const button = document.getElementById("menu-trigger");
const header = document.getElementById("header");
const mask = document.getElementById("mask");
const navLink = document.querySelectorAll("#g-navi a");


// ボタンが押されたらクラスを追加する
button.addEventListener('click', function (){
    if ( header.classList.contains("header") == true ) {
        header.classList.remove("header");
    } else {
        header.classList.add("header");
    };
 });

//  maskの部分をクリックしたらメニューを閉じる
mask.addEventListener('click', function() {
    header.classList.remove("header");
})

// リンクをクリックしたらメニューを閉じる
navLink.forEach(function(link){
    link.addEventListener('click', function() {
        header.classList.remove("header");
    });
});

