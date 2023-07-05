// 버튼 누르면 보여달라고 JS 코드 짜기
// 이번에는 display: none/block이 아닌, 클래스 탈부착식으로
function addShow() {
  document.querySelector(".list-group").classList.toggle("show");
}
document
  .querySelectorAll(".navbar-toggler")[0]
  .addEventListener("click", addShow);

// 다크모드 버튼 : 홀수 횟수로 누르면 Light, 짝수 횟수로 누르면 Dark로 바뀜
let clickNum = 0;
$(".badge").on("click", function () {
  clickNum++;
  if (clickNum % 2 === 0) {
    $(".badge").html("Dark 🔄");
    $("body").toggleClass("dark");
  } else {
    $(".badge").html("Light 🔄");
    $("body").toggleClass("dark");
  }
});

// jquery로 모달창 숨겼다 보여주기(버튼 클릭 -> 클래스 탈부착)
$("#login").on("click", function () {
  $(".black-bg").addClass("show-modal");
});
$("#close").on("click", function () {
  $(".black-bg").removeClass("show-modal");
});

// 전송버튼을 눌렀을 때(이벤트리스너), input에 입력한 값이 공백이면(if 조건문) 알림창(alert('')) 띄우기
// 과제1 : 전송버튼 누를 때 아이디랑 비밀번호 둘 다 공백검사
// 과제2 : 전송버튼 누를 때 입력한 비밀번호 6자 미만이면 알림띄우기
$("form").on("submit", function (e) {
  let inputID = document.getElementById("idBox").value;
  let inputPW = document.getElementById("pwBox").value;
  if (inputID == "" && inputPW == "") {
    alert("Please input your ID & PW");
    e.preventDefault(); // 폼 전송 막음
  } else if (inputPW.length < 6) {
    alert("Your PW is too short");
    e.preventDefault();
  }
  // 정규식
  if (/\S+@\S+\.\S+/.test(inputID) == false) {
    alert("Your ID is not email form");
    e.preventDefault();
  }
  if (/[A-Z]/.test(inputPW) == false) {
    alert("At least one uppercase letter is required for password");
    e.preventDefault();
  }
});

// x초 후 코드실행하려면
// setTimeout(function(){실행할코드}, ms)
// 1000ms == 1초
function hideAlert() {
  $(".alert").hide();
}
setTimeout(hideAlert, 5000); // 콜백함수 자리에 만들어둔 함수 넣을 수 있음

// x초마다 코드실행
// 1초마다 5라는 문자를 1씩 감소
let count = 5;
function timeOut() {
  if (count > 0) {
    count--;
    $(".timeLimit").html(count); // innerHTMl에 변수 대입 가능
  }
}
setInterval(timeOut, 1000);

// 캐러셀 - 버튼(1,2,3) 누르면 최종하면으로 변하게 하기
$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0vw)");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
  // transform: translateX(-100vw) : 왼쪽으로 100vw 이동
  // .css() : jquery에서 style 속성 변경 가능
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});
// After 버튼 클릭하면
// 지금 보이는 사진이 1이면 2를 보여주세요 / 2이면 3을 보여주세요.
let presentImg = 1;
$(".slideAfter").on("click", function () {
  if (presentImg == 1) {
    $(".slide-container").css("transform", "translateX(-100vw)");
    presentImg++;
  } else if (presentImg == 2) {
    presentImg++;
    $(".slide-container").css("transform", "translateX(-200vw)");
  }
});
// 응용 : 확장성 - if문 필요없이 다음버튼 누르면 'translateX(-지금사진vw)'로 이동시키도록 코드 1줄만 짜면 끝!
// $(".slideAfter").on("click", function () {
//   $(".slide-container").css("transform", "translateX(-" + presentImg + "00vw)");
//   presentImg++;
// });
$(".slideBefore").on("click", function () {
  if (presentImg == 3) {
    $(".slide-container").css("transform", "translateX(-100vw)");
    presentImg--;
  } else if (presentImg == 2) {
    $(".slide-container").css("transform", "translateX(0vw)");
    presentImg--;
  }
});

// scroll event
// 스크롤바 100px 내리면 로고 폰트사이즈 작게 만들기
window.addEventListener("scroll", function () {
  // scrollY : 유저가 얼마나 스크롤바 내렸나
  if (window.scrollY >= 100) {
    $(".navbar-brand").css("fontSize", 15);
  } else {
    $(".navbar-brand").css("fontSize", 30);
  }
});
// 박스 끝까지 스크롤시 알림띄우기
// div 스크롤바 내린 양 + div가 화면에 보이는 높이 == div 실제높이
$(".lorem").on("scroll", function () {
  let 스크롤양 = document.querySelector(".lorem").scrollTop; // .scrollTop : 스크롤바를 위에서 부터 얼마나 내렸는지
  let 실제높이 = document.querySelector(".lorem").scrollHeight; // .scrollHeight : 스크롤가능한 실제높이
  let 박스높이 = document.querySelector(".lorem").clientHeight; // .clientHeight : 박스가 화면에 보이는 부분 높이
  // 스크롤 내린 양이 소수 단위로 부정확하게 나와서 여유있게 비교하기
  if (스크롤양 + 박스높이 >= 실제높이 - 1) {
    alert("다 보셨군요:)");
  }
});

window.scrollY; // 현재 페이지 스크롤양
document.querySelector("html").scrollHeight; // 현재 페이지 실제높이
document.querySelector("html").clientHeight; // 페이지 보이는 부분 높이

// event bubbling
// modal 검은배경 누르면 모달창 닫는 기능 만들기
$(".black-bg").on("click", function (e) {
  // 실제로 누른게 검은 배경이면 모달창 닫기
  // e.target == $('.black-bg') 사용불가능 (그냥 뭐... 비교할때는 제이쿼리 안 쓰는게..?)
  if (e.target == document.querySelector(".black-bg")) {
    $(".black-bg").removeClass("show-modal");
  }
});
