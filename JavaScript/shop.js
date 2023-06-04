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
$("form").on("submit", function () {
  if (
    document.getElementById("idBox").value == "" &&
    document.getElementById("pwBox").value == ""
  ) {
    alert("please input your ID & PW");
  } else if (document.getElementById("pwBox").value.length < 6) {
    alert("Your PW is too short!");
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
