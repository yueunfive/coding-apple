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
