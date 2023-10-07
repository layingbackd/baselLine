var baselA = document.querySelector('.baselA')
var baselType = document.querySelectorAll('.baselType');
var header = document.querySelector('#header');

// window.addEventListener('scroll', function(){
//   // console.log(window.scrollY)
//   baselA.style.transform = `rotate(${this.window.scrollY}deg)`
// });


// baselType.forEach((a)=> {
//   // a.style.backgroundColor = "blue";

//   window.addEventListener('scroll', function(){
//     // console.log(window.scrollY)
//     a.style.transform = `rotate(${this.window.scrollY}deg)`
//   });
  
// });


// scroll

// window.addEventListener('scroll', function(){
//   var a = true;
// }); 
//음 일단 스크롤 하면서 true값 배정하고 ,, ㅜㄹ==ㅎ
// var currentScrollA;
// var currentScrollB;

// setInterval(() => {
//   if(currentScrollA<currentScrollB){
//     console.log('hello')
//   }
// }, 400);

// setInterval(() => {
//     currentScrollA = window.scrollY;
//   // if(a=true){
//   //   header.style.display ='none';
//   // }
//   console.log(currentScrollA)

// }, 500);

// setInterval(() => {
//     currentScrollB = window.scrollY;
//   // if(a=false){
//   //   header.style.display ='block';
//   // }
//   console.log(currentScrollB)

//   if(currentScrollA<currentScrollB){
//     console.log('hello')
//   }
// }, 800);
//set으로 확인 불리언 true면 none 

// 	function smoothScroll() {
//     $('a').click(function () {
//         var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
//         var aHref = $.attr(this, 'href');
//         if(aHref.length > 1 && aHref.indexOf('#') > -1) {
//             var windowTop = $(window).scrollTop();
//             var offsetTop = $('#' + aHref.substr(1).replace(regExp,"\\$&")).offset().top;
//             var distance = Math.abs(windowTop - offsetTop);
//             var calcSpeed = 400*distance/2000;
//             var speed = calcSpeed<300?300:(calcSpeed>800?800:calcSpeed);
//             $('html, body').animate({
//                 scrollTop: offsetTop
//             }, speed, 'swing');
//             return false;
//         }
//     });
// }
 
// $(document).ready(function() {
//     smoothScroll();
// }