var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 자바스크립트로 카드 3개 코드 짜기
products.forEach((a, i) => {
  $(".row").append(`<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${products[i].title}</h5> 
  <p>${products[i].price}</p>`);
});

// 상품 더보기 버튼 누르면 상품 3개 가져오기(ajax 활용)
// 더보기버튼을 2번째 누르면 7,8,9번째 상품을 더 가져와서 html로 보여주기 + 버튼 숨기기
let count = 0;
let formula = $("#more").on("click", function () {
  count++;
  if (count == 1) {
    $.get("https://codingapple1.github.io/js/more1.json").done(function (data) {
      console.log(data);
      data.forEach((a) => {
        let temp = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${a.title}</h5>
        <p>${a.price}</p>`;
        $(".row").append(temp); // a.title == data[i].title
      });
    });
  } else if (count == 2) {
    $.get("https://codingapple1.github.io/js/more2.json").done(function (data) {
      console.log(data);
      data.forEach((a) => {
        $(".row").append(`<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${a.title}</h5>
      <p>${a.price}</p>`);
      });
      $("#more").addClass("hide");
    });
  }
});

// 버튼 누르면 products 가격 순으로 정렬하기
// 객체로 구성된 배열 정렬하기(sort)
$("#price").click(function () {
  // 1. div의 내용 제거
  $(".row").html("");
  // 2. 가격 순으로 배열 정렬
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  // 3. 정렬한대로 html 생성
  products.forEach((a, i) => {
    $(".row").append(`<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${products[i].title}</h5> 
    <p>${products[i].price}</p>`);
  });
});

// "상품명 다나가순 정렬" 버튼과 기능(sort 역순)
// 자바스크립트 문자끼리 부등호 비교 가능 ex) ㄱ < ㅎ
$("#reverse-btn").click(function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    } else if (a.title > b.title) {
      return -1;
    }
  });
  $(".row").html("");
  products.forEach((a, i) => {
    $(".row").append(`<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${products[i].title}</h5> 
    <p>${products[i].price}</p>`);
  });
});

// "6만원 이하 상품보기" 버튼과 기능(filter)
$("#filter-btn").click(function () {
  let sixDown = products.filter(function (a) {
    return a.price <= 60000;
  }); // 화살표 함수 : products.filter((a) => a.price <= 60000);
  $(".row").html("");
  sixDown.forEach((a, i) => {
    $(".row").append(`<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${a.title}</h5> 
    <p>${a.price}</p>`);
  });
});

// forEach 대신 map 써도 작동한다. 차이점은 TIL 참고!
