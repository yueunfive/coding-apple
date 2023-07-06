## 기본적인 UI 만드는 법칙

1. HTML, CSS로 미리 UI 디자인 후 숨김
2. 자바스크립트로 UI 나타나게 함(ex. 버튼 클릭)

```html
<body>
  <div class="alert-box">
    <span>알림창임</span>
    <button
      onclick="document.getElementsByClassName('alert-box')[0].style.display ='none';"
    >
      닫기
    </button>
  </div>
  <button
    onclick="document.getElementsByClassName('alert-box')[0].style.display = 'block';"
  >
    열기
  </button>
  <!-- onclick="JS~~" : 클릭하면 안에 있는 자바스크립트 실행
  get ~ ClassName('')[0] : 클래스 중 위에서 n번째 -->
</body>
```

```css
.alert-box {
  background: skyblue;
  width: 100px;
  height: 100px;
  padding: 20px;
  color: white;
  border-radius: 5px;
  display: none; /* 평소에는 숨김, 보여주려면 display: block; */
}
```

<br>

## 자바스크립트 function

: 긴 코드를 한 단어로 축약하고 싶을 때 사용(재사용 용이)

```jsx
function 작명(){
  축약하고 싶은 긴 코드
} // '작명()' 쓸 때 마다 그 자리에 긴 코드 실행된다!
```

```html
<body>
  <div class="alert-box">
    <span>알림창임</span>
    <button onclick="closeAlert()">닫기</button>
  </div>
  <button onclick="openAlert()">열기</button>
  <script>
    function openAlert() {
      document.getElementsByClassName("alert-box")[0].style.display = "block";
    }
    function closeAlert() {
      document.getElementsByClassName("alert-box")[0].style.display = "none";
    }
  </script>
</body>
```

<br>

## function의 파라미터 문법

- 쓰는 이유 : 비슷한 함수가 있으면 가변적인 부분만 구멍 뚫어서 코드량을 줄일 수 있다.
- 특징 : 자유롭게 작명 가능하다, 2개 이상 사용 가능하다.(콤마로 구분)

```html
<body>
  <div class="alert-box">
    <p id="alert-text">알림창</p>
    <button onclick="controlAlert('none')">닫기</button>
  </div>
  <button onclick="controlAlert('block'), changeText('ID')">ID</button>
  <button onclick="controlAlert('block'), changeText('PW')">PW</button>
  <script>
    // a, b : parameter
    function controlAlert(a) {
      document.getElementsByClassName("alert-box")[0].style.display = a;
    }
    function changeText(b) {
      document.getElementById("alert-text").innerHTML =
        "Please input your " + b;
    }
  </script>
</body>
```

<br>

## 이벤트리스너

: 이벤트가 일어나면 내부 코드를 실행시켜주는 문법

```html
<body>
  <div class="alert-box">
    <p id="alert-text">알림창</p>
    <button id="close">닫기</button>
  </div>
  <button id="inputID">ID</button>
  <button id="inputPW">PW</button>
  <script>
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
  </script>
</body>
```

<br>

## classList & querySelector

- .classList.add() : 클래스명 추가
- .classList.toggle() : 클래스명이 있으면 제거, 없으면 추가
- querySelector() : css 셀렉터 문법을 사용가능, 맨 위의 1개만 찾아줌
- querySelectorAll() : 모두 다 찾음, 인덱싱[n] 필요

```html
<!-- bootstrap 사용함 -->
<body>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand">Navbar</span>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
  <script>
    // 버튼 누르면 보여달라고 JS 코드 짜기
    // 이번에는 display: none/block이 아닌, 클래스 탈부착식으로
    function addShow() {
      document.querySelector(".list-group").classList.toggle("show");
    }
    document
      .querySelectorAll(".navbar-toggler")[0]
      .addEventListener("click", addShow);
  </script>
</body>
```

<br>

## jquery : 자바스크립트 라이브러리

- 제이쿼리 셀렉터 뒤에는 제이쿼리 함수들만 붙혀야 한다.
- $() 셀렉터는 querySelectorAll과 달리 모든 요소를 한 번에 조작하고 변경 가능 (인덱싱 필요없음)

```jsx
// jquery로 모달창 숨겼다 보여주기(버튼 클릭 -> 클래스 탈부착)
$("#login").on("click", function () {
  $(".black-bg").addClass("show-modal");
});
// document.querySelector().addEventListener("click", function(){
//   document.querySelector().classList.add()
// });
$("#close").on("click", function () {
  $(".black-bg").removeClass("show-modal");
});
```

<br>

## UI Animation - one-way 일방향 애니메이션 만드는 법 (CSS)

1. 시작스타일 만들기 (class로)
2. 최종스타일 만들기 (class로)
3. 원할 때 최종스타일로 변하라고 JS 코드 짜기
4. 시작스타일에 transition 추가

```css
/* 시작 스타일 */
.black-bg {
  visibility: hidden;
  opacity: 0;
  transition: all 1s; /* 시작스타일에 transition 추가 */
}
/* 최종 스타일 */
.show-modal {
  visibility: visible;
  opacity: 1;
}
```

<br>

## if 조건문

(개념은 많이 본 내용이라 따로 필기는 안 했다..)

```jsx
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
```

<br>

## 자바스크립트 문법 vs 브라우저 사용법

- 자바스크립트 문법 : 변수(var, let, const), if, function…
- 브라우저 사용법 : document.querySelector(), addEventListener()..
- 둘 다 밸런스있게 갖고 가야 한다.

<br>

## setTimeout 타이머

```jsx
// setTimeout : X초 후에 코드를 실행
// 시간 : ms 단위 (1초 = 1000ms)
setTimeout(function(){실행할 코드}, 시간);

// 1초 후에 콘솔창에 '안녕'
setTimeout(function(){
  console.log('안녕')
}, 1000);

// setInterval : X초마다 코드를 실행
setInterval(function(){실행할 코드}, 시간);

// 1초 마다 콘솔창에 '안녕'
setInterval(function(){
  console.log('안녕')
}, 1000);

// 콜백함수 테크닉 - 다른 곳에서 만든 함수를 콜백함수로 집어넣어도 된다.
setTimeout(함수, 1000);

function 함수(){
  console.log('안녕')
}
```

<br>

## 정규식

: 문자를 검사하고 싶을 때 사용하는 식 (true || false로 판별)

```jsx
// abcdef라는 문자에 abc라는 단어가 있는지 검사
/abc/.test('abcdef') //true

// [ ] : 범위 내 아무문자 하나
/[a-d]/.test('aefg') //true
/[가-다]/.test('다라마바') //true

// [a-zA-Z] : 아무 알파벳 하나
/[a-zA-Z]/.test('에이요') //false

// \S : 특수문자 포함 아무문자 1개
/\S/.test('abcde') //true

// ^a : a로 시작하는지 검사
/^a/.test('abcde') //true

// e$ : e로 끝나는지 검사
/e$/.test('abcde') //ture

// | : or -> e, f 중 하나라도 있으면 true
/(e|f)/.test('abcde') //true

// + : 왼쪽 문자 반복 검색
/\S+@/ // 모든 문자 여러 개 다음 @

// 이메일 정규식
/\S+@\S+\.\S+/ // '.'은 마침표 문법을 쓰는게 아니므로 앞에 \ 붙혀야 됨.
```

<br>

## return

- function() 실행하고 나서 그 자리에 뭔가 결과를 남긴다.  
  → 자료를 집어넣으면 규칙에 따라 다른 자료가 나오는 변환기 역할(수학의 함수랑 같음!)
- 함수 종료 - return 하단의 코드는 실행 안 된다.

<br>

## 소수점 연산

```jsx
console.log(1.1 + 0.3); // 1.40000000001 그냥.. 컴퓨터 문제로 오차 발생

// 소수점 반올림
// 숫자.toFixed(몇자리)
console.log((1.1 + 0.3).toFixed(1)); // '문자'로 변환됨

// '숫자'(문자) -> 숫자 변환
parseFloat("123");
parseInt("123");
```

<br>

## scroll

- 암기하지말고 이해할 것!
  1. 스크롤바 조작할 때마다 코드실행이 가능하구나!
  2. 박스의 실제 높이 / 보이는 높이를 구할 수 있구나!
  3. 스크롤 양을 구할 수 있구나!

```jsx
// 스크롤 이벤트리스너
window.addEventListener("scroll", function () {
  console.log("안녕");
});

// scrollY : 현재 페이지를 얼마나 위에서 부터 스크롤했는지 px 단위로 알려줌
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

// jqeury ver
// Top() : 스크롤 양 알려줌, 안에 숫자 기입하면 그만큼 페이지 강제이동 시킴
$(window).on("scroll", function () {
  $(window).scrollTop();
});

// 현재 페이지를 끝까지 스크롤했는지 체크하기
// '박스 끝까지 스크롤시 알림띄우기'랑 똑같이 하면 됨
document.querySelector("html").scrollTop; //현재 웹페이지 스크롤양(== window.scrollY)
document.querySelector("html").scrollHeight; //현재 웹페이지 실제높이
document.querySelector("html").clientHeight; //현재 웹페이지 보이는 높이임
```

<br>

## for 반복문

- 비슷한 코드를 반복실행(복붙)
- 비슷한 코드들을 직접 복붙하는게 귀찮으니 for 반복문을 쓰는 것!  
  → for 부터 써놓고 무슨 코드 채울지 고민하지 말자!

```jsx
for (횟수){
  복붙할 코드
}
```

<br>

## 이벤트 버블링

: 이벤트가 상위 html로 퍼지는 현상 (항상 일어남)

```html
<!-- '안녕' 클릭하면 브라우저는 p, div, 그 위 div까지 총 3번 클릭했다고 인지-->
<div>
  <div>
    <p>안녕</p>
  </div>
</div>
```

```jsx
// 이벤트리스너 안에서 쓰는 이벤트 함수들
document.querySelector(".black-bg").addEventListener("click", function (e) {
  e.target; // 실제 클릭한 요소 알려줌 (이벤트 발생한 곳)
  e.currentTarget; // 지금 이벤트리스너가 달린 곳 알려줌 (== this), 위 코드에서는 .black-bg
  e.preventDefault(); // 이벤트 기본 동작을 막아줌
  e.stopPropagation(); // 상위요소로의 이벤트 버블링을 중단해줌
});
```

<br>

## dataset : html 안에 유저 몰래 정보를 숨겨놓기

```html
<div data-데이터이름="값"></div>
```

```jsx
// html 요소에 숨겨놨던 데이터가 이 자리에 남는다.
document.querySelector().dataset.데이터이름;

// 이런 식으로 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악할 수도 있다.
$(".list").click(function (e) {
  openTab(e.target.dataset.id);
});
```

<br>

## array

- [대괄호]
- 여러가지 자료를 한곳에 저장하고 싶을 때 사용하는 자료형
- 순서 개념 ㅇ : 가나다순 정렬(sort), n번부터 n번까지 자르기(slice) 등 이것저것 할 수 있음

```jsx
var car = ["소나타", 50000, "white"];
console.log(car[1]); // 자료 출력 : []
car[1] = 60000; // 자료 수정 or 추가 : =
```

<br>

## object

- {중괄호}
- 여러가지 자료를 한곳에 저장하고 싶을 때 사용하는 자료형
- 값마다 키 이름 정해짐

```jsx
var car2 = {
  name: "소나타", // key: value
  price: 50000,
};

// 자료 출력 : [] or .
console.log(car2["name"]);
console.log(car2.name);

// 수정 or 추가 : =
car2["name"] = "그랜저";
```

<br>

## array & object 데이터 바인딩

```jsx
// object/array 안에 또 다른 array/object 넣어도 상관없다.
let car2 = {
  name: "소나타",
  price: [50000, 3000, 4000],
  color: "white",
};
$(".card span").eq(0).html(car2["name"]);
$(".card span").eq(1).html(car2.price[0]);

// 복합한 데이터에서 자료 꺼내려면 console.log()로 자료출력 후 '시작기호'에 집중!
// 시작기호 : '{' 중괄호 -> object 자료형
// 시작기호 : '[' 대괄호 -> array 자료형

// 문자 중간에 변수 쉽게 넣기
let 변수 = "안녕";
console.log(`문자${변수}문자`); // 백틱
```

<br>

## select

- input이랑 똑같음.
- 사용자가 고를 수 있는 선택지를 드랍다운 메뉴로 제공하는 `<input>`
- 선택지는 `<option>`으로 넣으면 됨.
- `<select>` 태그 선택 시 input, change 이벤트 발생
  - input event : `<input>`에 입력된 값이 변경될 때(한 글자 칠 때 마다) 즉시 발생
  - change event : `<input>`에 입력된 값이 변경된 후 커서가 다른 곳으로 이동했을 때 발생
- .value로 유저가 입력한 값을 가져올 수 있다.

```html
<form class="container my-5 form-group">
  <p>상품선택</p>
  <select class="form-select mt-2">
    <option>모자</option>
    <option>셔츠</option>
  </select>
  <select class="form-select mt-2 form-hide">
    <option>90</option>
    <option>95</option>
    <option>100</option>
  </select>
</form>
```

```jsx
$(".form-select")
  .eq(0)
  .on("input", function () {
    if (this.value == "셔츠") {
      // this == e.currentTarget : 지금 이벤트리스너가 달린 곳 알려줌
      $(".form-select").eq(1).removeClass("form-hide");
    }
  });
```

<br>

## 자바스크립트로 html 생성

- `<select>` → 서버에서 보낸 데이터 갯수 만큼 `<option>` 태그 생성

```html
<!-- html 생성하는 법 1 -->
<div id="test"></div>

<script>
  var a = document.createElement("p"); // createElement() : html 자료 생성
  a.innerHTML = "안녕";
  document.querySelector("#test").appendChild(a); // appendChild() : html 삽입
</script>

<!-- html 생성하는 법 2 -->
<div id="test"></div>

<script>
  var a = "<p>안녕</p>"; // 문자자료로 html 생성
  document.querySelector("#test").insertAdjacentHTML("beforeend", a);
  // == $('#test').append(a);
  // beforend : 안쪽 맨 밑에 추가
  // 웬만하면 2번 방법으로 쓰기
</script>
```

```jsx
// select input
// 셔츠를 고른다면, 밑의 <select> 보여주기
// input의 값을 변경할 때 input 이벤트 발동
// this == e.currentTarget : 지금 이벤트리스너가 달린 곳 알려줌
$(".form-select")
  .eq(0)
  .on("input", function () {
    if (this.value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      let shirtsSize = `<option>S</option>
      <option>M</option>
      <option>L</option>`;
      $(".form-select").eq(1).append(shirtsSize);
    }
    // 자바스크립트로 html 생성
    // 바지 옵션 누르면 28과 30 사이즈 담긴 <select> 띄우기
    else if (this.value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      let pantsSize = `<option>28</option>
      <option>30</option>`; // 백틱으로 하면 태그 사이 enter 가능!(그냥 따옴표 쓰고 enter 안해도 되긴 함)
      $(".form-select").eq(1).append(pantsSize);
    } else {
      $(".form-select").eq(1).addClass("form-hide");
    }
  });
```

<br>

## forEach 반복문

: 배열 안의 데이터 갯수만큼 forEach 콜백함수 안에 있는 코드가 실행

```jsx
let pants = [28, 30, 32];

pants.forEach(function () {
  console.log("안녕");
}); // "안녕" 3번 출력됨

// forEach 내부 함수의 파라미터 : array 안에 있던 데이터들
shirts.forEach(function (data) {
  $(".form-select").eq(1).append(`<option>${data}</option>`);
});

// forEach 콜백함수 안에 파라미터 2개까지 작명 가능(1개만 써도 됨)
// 첫째 파라미터 : array 안에 있던 하나하나의 데이터
// 둘째 파라미터 : 0부터 1씩 증가하는 정수
let pants = [28, 30, 32];
pants.forEach(function (a, i) {
  console.log(i);
});
```

<br>

## for in 반복문

: object 자료 갯수만큼 반복문을 돌리고 싶을 때 사용

```jsx
let obj = { name: "yueun", age: 22 };

// 여기 써있는 key는 작명한 변수이며, 반복문이 돌 때마다 object자료 안에 있던 key값이 된다.
for (var key in obj) {
  console.log("안녕"); // "안녕" 2회 출력됨
  console.log(key); // name, age (key값 따로 출력)
  console.log(obj[key]); // yueun, 22 (value값 따로 출력)
}

// 반복문의 용도
// 1.코드 복붙(반복 실행)하고 싶을 때
// 2.array, object 자료 다 꺼내고 싶을 때
```

<br>

## arrow function

```jsx
var pants = [28, 30, 32];

pants.forEach(function (a) {
  console.log(a);
});

pants.forEach((a) => {
  console.log(a);
});

// 파라미터가 하나면 () 소괄호 생략 가능
pants.forEach((a) => {
  console.log(a);
});

// 함수 중괄호 안에 return 한 줄 밖에 없으면 { } 중괄호와 return 동시에 생략 가능
// 함수 안에서 this를 재정의하지 않고 바깥에 있에서 그대로 가져온다.(이벤트리스너 안에서는 안 쓰는게 좋을 듯)
```

<br>

## Ajax

- 서버 : 데이터를 달라고 요청하면 데이터를 보내주는 간단한 프로그램
  - 데이터 요청시 어떤 데이터인지(url 기재), 어떤 방법으로 요청할지(GET/POST 등) 결정
  - GET 요청 : 서버에 있던 데이터를 읽고 싶을 때 사용
  - POST 요청 : 서버로 데이터를 보내고 싶을 때 사용
  - GET, POST 요청을 그냥 날리면 브라우저가 새로고침되는 단점이 있다.
- Ajax : 서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능 (ex. 더보기로 새로고침 없이 쇼핑물 상품 더 가져오기)

```jsx
// jQuery로 AJAX 요청하기

// get 요청
// ajax 요청 성공시 .done 안에 있는 코드 실행
// ajax 요청 실패시 .fail 안에 있는 코드 실행
$.get("https://codingapple1.github.io/price.json")
  .done(function (data) {
    // 가져온 데이터 -> 파라미터
    console.log(data);
  })
  .fail(function () {
    console.log("실패함");
  });

// post 요청
// url, 서버로 보낼 데이터
$.post("url~~", { name: "kim" });
```

<br>

## sort

: array 정렬

- sort 함수 작동원리 : arr.sort(function(a,b) {…
  - a, b는 array안에 있던 자료들이다.
  - return 우측이 양수면 a를 우측으로 보낸다.
  - return 우측이 음수면 b를 우측으로 보낸다.
  - array 안의 자료를 다 끌고와서 a, b에 계속 넣어본다,.

```jsx
let arr = [3, 5, 1, 8, 6];
arr.sort(); // 문자 정렬(가나다순)

// 숫자 정렬(오름차순)
arr.sort(function (a, b) {
  return a - b;
});

// 숫자 정렬(내림차순)
arr.sort(function (a, b) {
  return b - a;
});

// 객체로 구성된 배열 정렬하기(price 순으로 정렬)
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.sort(function (a, b) {
  return a.price - b.price;
});
```

<br>

## filter

: array 자료에서 원하는 자료만 필터링

1. a : array 안의 데이터
2. return 우측에 조건식을 넣으면 그에 맞는 a만 남긴다.
3. filter는 원본을 변형시키지 않기에 새로운 변수에 담아서 사용해야 한다.(sort는 원본 변형ㅇ)

```jsx
var arr = [2, 3, 12, 7, 40];

var newarr = arr.filter(function (a) {
  return a < 4; // 조건식
});
// [2, 3]
```

<br>

## map

: array 안의 자료들을 전부 변형

- a : array 안의 데이터
- return 우측에 변경될 수식 등을 삽입
- 원본 변형 X → 새로운 변수에 담아서 사용한다.

```jsx
var arr = [2, 3, 12, 7, 40];

var newarr = arr.map(function (a) {
  return a * 4; // 수식
});
// [8, 12, 48, 28, 160]
```

<br>

## jQuery) .value → .val()로 쓴다

```jsx
<input type="text" id="answer" />
..
// 위 input 값
document.querySelector("#answer").value // JS.ver
("#answer").val() == 1335 // jQuery.ver
```

<br>

## forEach()와 map()의 차이점

`map`과 `forEach`는 둘 다 배열의 모든 요소를 순회하며 콜백 함수를 실행하며, 주어진 함수를 사용하여 각 요소를 수정할 수 있다.

그러나 이 두 메서드의 가장 큰 차이점은 `map`이 새로운 배열을 반환하는 반면 `forEach`는 반환하지 않는다.

또한 `map`은 return 값을 출력하는 반면, `forEach`는 출력하지 않는다.

```jsx
// forEach()
const arr = [1, 2, 3, 4, 5];
const newArr = [];

arr.forEach((num) => {
  newArr.push(num * 3);
});
console.log(newArr); // [3, 6, 9, 12, 15]

let a = arr.forEach(function (value) {
  return value;
});
console.log(a); // undefined
```

```jsx
// map()
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num * 3);
console.log(newArr); // [3, 6, 9, 12, 15]

let a = arr.map(function (value) {
  return value + 1;
});
console.log(a); // [2,3,4,5,6]
```

결론 : `map`은 배열 안에 있는 데이터를 살짝 변형한 새로운 배열을 만들고 싶을 때, `forEach`는 그냥 배열 가지고 반복문 돌리고 싶을 때 주로 사용한다.

출처 : 코딩애플 'JavaScript 입문과 웹 UI개발'
