// 369 게임
// 3의 배수일때 박수 1번, 9의 배수일때는 박수 2번
function game369(a) {
  // 함수이름 작명시 맨 처음 단어는 숫자를 사용하면 안됨
  if (a % 9 === 0) {
    console.log("clap twice!");
  } else if (a % 3 === 0) {
    console.log("clap!");
  } else {
    console.log("pass~");
  }
}

// 시험 합격 여부
// 2과목(과목마다 100점 만점) 합해서 120점 이상이면 합격
// 한 과목 당 최소 40점 이상이어야 함
function test(a, b) {
  if (a + b >= 120 && a >= 40 && b >= 40) {
    console.log("합격!");
  } else {
    console.log("불합격..");
  }
}

// 이자율 계산하기
function solution() {
  if (예금액 < 50000) {
    미래예금액 = 예금액 * 1.15;
  } else {
    미래예금액 = 예금액 * 1.2;
  }
  return 미래예금액;
}

// 커피 리필량 계산하기
function solution() {
  return first + (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;
}

// 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수
function msChange(a, b) {
  return (60 * a + b) * 1000;
}

// 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수
function discount(a, b) {
  let sale = a * 0.9;
  if (b == true) {
    return sale - 1.5;
  } else {
    return sale;
  }
}

// 출석부에 있는 자료 찾기
let 출석부 = ["현진", "용복", "정인", "창빈"];

function 이름찾기(a) {
  for (i = 0; i < 출석부.length; i++) {
    if (a == 출석부[i]) {
      return "있어요";
    }
  }
}

// 구구단(2~9단) 결과부분만 쭉 콘솔창에 출력하기
let a = [];
for (i = 1; i <= 9; i++) {
  a.push(i);
}
for (i = 2; i <= 9; i++) {
  a.forEach(function (data) {
    console.log(data * i);
  });
}

// 위 문제는 2중 중첩 반복문 사용하면 됨
// 반복문 쓸 때 i 말고 다른 변수 써도 됨
// for문부터 쓰지말고 반복시키는 내용을 먼저 구성해서 안에서부터 밖으로 코드를 짜자!
for (n = 2; n < 10; n++) {
  for (i = 1; i < 10; i++) {
    console.log(n * i);
  }
}

// 평균 점수 계산기 만들기
function calculator(a, b) {
  let sum = 0;
  let avg = 0;
  for (i = 0; i < a.length; i++) {
    sum += a[i];
    avg = sum / a.length;
  }
  if (avg > b) {
    console.log(`평균보다 ${avg - b}점이 떨어졌네요`);
  } else if (avg < b) {
    console.log(`평균보다 ${b - avg}점이 올랐네요`);
  } else {
    console.log("평균이랑 같네요. 발전이 없...읍읍");
  }
}
