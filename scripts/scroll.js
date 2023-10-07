// let isScrolling = false;
// const aElement = document.getElementById('header');
// let scrollTimer;

// // 스크롤 시작 시 호출되는 함수
// function startScroll() {
//     isScrolling = true;
//     aElement.style.display = 'none'; // 스크롤 중에 a 요소를 숨깁니다.
// }

// // 스크롤 종료 시 호출되는 함수
// function endScroll() {
//     isScrolling = false;
//     aElement.style.display = 'block'; // 스크롤이 멈추면 a 요소를 다시 표시합니다.
// }

// // 스크롤 이벤트 리스너를 등록합니다.
// window.addEventListener('scroll', () => {
//     if (!isScrolling) {
//         // 스크롤 중이 아닌 경우에만 스크롤 시작 함수를 호출합니다.
//         startScroll();
//     }

//     // 이전 타이머를 제거하고 새 타이머를 설정합니다.
//     clearTimeout(scrollTimer);
//     scrollTimer = setTimeout(() => {
//         endScroll();
//     }, 1000); // 1초 후에 스크롤 종료 함수를 호출합니다.
// });