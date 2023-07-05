// 2회독

// 369 게임
function game369(num) {
  if (num % 9 == 0) {
    console.log("clap! clap!");
  } else if (num % 3 == 0) {
    console.log("clap!");
  } else {
    console.log("pass~");
  }
}

// 공인중개사 시험점수
function testScore(a, b) {
  if (a >= 40 && b >= 40 && a + b >= 120) {
    console.log("pass!");
  }
}

// 변수 : 나이, 지역
var age = 22;
const home = "seoul";

// 이자율 계산하기
var 예금액 = 60000;
var 미래예금액 = 0;
if (예금액 >= 50000) {
  미래예금액 = 예금액 * 1.2 * 1.2;
} else {
  미래예금액 = 예금액 * 1.15 * 1.15;
}
console.log(미래예금액);

// 커피 리필
var drink = 360;
var refill = drink + drink * (2 / 3) + drink * (2 / 3) * (2 / 3);
