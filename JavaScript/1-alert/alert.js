function closeAlert() {
  document.getElementsByClassName("alert-box")[0].style.display = "none";
}
function openAlert() {
  document.getElementsByClassName("alert-box")[0].style.display = "block";
}
function textID() {
  document.getElementById("alert-text").innerHTML = "Please input your ID!";
}
function textPW() {
  document.getElementById("alert-text").innerHTML =
    "Please input your password!";
}
document.getElementById("close").addEventListener("click", closeAlert); // 'id가 close인 요소'를 클릭하면 함수를 실행해주세요.
document.getElementById("inputID").addEventListener("click", openAlert);
document.getElementById("inputID").addEventListener("click", textID);
document.getElementById("inputPW").addEventListener("click", openAlert);
document.getElementById("inputPW").addEventListener("click", textPW);
// 자바스크립트 양은 늘어나지만 HTML을 안 건드려도 됨!
