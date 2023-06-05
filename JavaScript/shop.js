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
    alert("Your PW is too sho rt");
    e.preventDefault();
  }
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

// x초 마다 코드실행
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
let presentImg = $(".slideAfter").on("click", function () {
  if ($(".slide-container").css("transform") == "translateX(0vw)") {
    $(".slide-container").css("transform", "translateX(-100vw)");
  } else if ($(".slide-container").css("transform") == "translateX(-100vw)") {
    $(".slide-container").css("transform", "translateX(-200vw)");
  }
});
