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
