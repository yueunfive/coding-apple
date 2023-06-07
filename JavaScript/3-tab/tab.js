// 버튼0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div 0에 show 클래스명 추가

let btn = $(".tab-button"); // 좋은 관습 : 자주 쓰는 셀렉터는 변수에 넣어쓰기
let cnt = $(".tab-content");

// for 반복문 : for(횟수){} -> 코드 복붙 (반복실행)
// $( ).eq(x) : $( ) 셀렉터로 찾은 요소 중에 x번째 요소만 선택(=인덱싱)
// for (let i = 0; i < btn.length; i++) {
//   btn.eq(i).on("click", function () {
//     openTab(i);
//   });
// }

// 이벤트 버블링 이용해서 이벤트리스너 줄이기! (.tab-button 눌러도 .list에 붙은 이벤트리스너 동작)
// 탭기능 다르게 만들기 -> 이벤트리스너 1개만 쓰기
$(".list").click(function (e) {
  // == $(".list").on("click", function(e){})
  openTab(e.target.dataset.id); // 지금 누른 버튼의 data-id(== html에 몰래 숨긴 데이터)
});

// 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘 된다.
function openTab(a) {
  btn.removeClass("orange");
  btn.eq(a).addClass("orange");
  cnt.removeClass("show");
  cnt.eq(a).addClass("show");
}

//

// array & object
let car2 = {
  name: "소나타",
  price: [50000, 3000, 4000],
  color: "white",
};
$(".card span").eq(0).html(car2["name"]);
$(".card span").eq(1).html(car2.price[0]);

//

// select input(input의 값을 변경할 때 input 이벤트 발동)
// 자바스크립트로 html 생성
// for each, for in 반복문

let pants = [26, 28, 30, 32]; // 서버에서 보낸 데이터
let shirts = [90, 95, 100, 105];
$(".form-select")
  .eq(0)
  .on("input", function () {
    if (this.value == "셔츠") {
      // this == e.currentTarget : 지금 이벤트리스너가 달린 곳 알려줌
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      shirts.forEach(function (data) {
        // forEach 내부 함수의 파라미터 : array 안에 있던 데이터들
        $(".form-select").eq(1).append(`<option>${data}</option>`);
      });
    } else if (this.value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      pants.forEach((data) => {
        // arrow function : function(){} == () => {}, 하지만 this를 함수 밖에서 가져온다는 단점이..
        $(".form-select").eq(1).append(`<option>${data}</option>`);
      });
    } else {
      $(".form-select").eq(1).html("");
      $(".form-select").eq(1).addClass("form-hide");
    }
  });
