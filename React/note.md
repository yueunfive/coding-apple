## **리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개**

1. html에 class 넣을 때는 className
2. 변수를 html에 꽂아넣을 때는 {중괄호} 사용
   1. 데이터바인딩 : 변수에 있던걸 html에 꽂아넣는 작업
   2. id, className, href, src 등 온갖 html 속성에 사용 가능
3. html에 style 속성 넣기 : style = { {속성명 : '속성값' } }

```jsx
function App() {
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        {" "}
        // 1.
        <div style={{ color: "blue", fontSize: "30px" }}>블로그</div> // 3.
        <div>{post}</div> // 2.
      </div>
    </div>
  );
}
```

<br>

## state

- 일반 변수 대신 state를 이용해서 자료를 저장할 수 있다.
- state 쓰는 이유
  - 변수 : 변수 내용이 바뀌면 그에 맞춰 html도 고쳐달라고 코드 짜야 함.
  - state : 변동사항이 생기면 html도 자동으로 재렌더링 해줌
  - 상품명, 글제목, 가격 이런것 처럼 자주 변할 것 같은 데이터들을 주로 state에 저장

```jsx
function App() {
  let [data1, data2] = useState("힘내세요");
  // data 1,2 모두 작명하면 됨
  // data1에는 useState에 쓴 자료가, data2에는 state 변경을 도와주는 함수기 들어감

  return (
    <h4>{data1}</h4> // 힘내세요
  );
}
```

<br>

## onClick

- 어떤 html을 클릭시 원하는 코드를 실행하는 이벤트 핸들러 (버튼 기능)
- Click 대문자, {} 중괄호 사용, 중괄호 안에 함수를 넣어야 한다.

```jsx
function App(){

  function 함수(){
    console.log(1)
  }
  return (
     <div onClick={함수}>하하하</div>
  )
}

// 함수 따로 만드는게 귀찮으면 그 자리에서 바로 만들어도 됨
<div onClick={ function(){ ~ ~ } }>
<div onClick={ () => { ~ ~ } }>
```

<br>

## state 변경

- state 변경 함수 사용 (useState의 두 번째 변수)
- 사용법 : state변경함수(새로운 state)
- state변경함수는 ( ) 안에 입력한걸로 기존 state를 갈아치운다.

```jsx
let [thumb, thumbChange] = useState(0); // 두 번째 변수 : state 변경용 함수
.
.
<span onClick={() => {thumbChange(thumb + 1)}}>👍</span>{thumb}
```

<br>

## array, object state 변경

- 독립적인 카피본을 만들어서 수정 : [...기존state], {...기존state}
- ... : 괄호 벗기기 → [...변수] : 독립적인 array 복사본 생성
- state 변경함수 동작원리
  - 기존 state === 신규 state → state 변경 X
  - 독립적인 또 다른 배열이나 객체를 사용하지 않으면 결국 같은 걸로 보고 변경 X
- array/object 동작원리
  - let arr = [1,2,3] 이라고 하면 arr 변수에는 배열에 대한 화살표만 담겨있다.
  - 다른 변수로 카피본을 떠도 똑같은 값을 공유

```jsx
let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);
.
.
<button onClick={() => {
	let copy = [...title];
	copy[0] = "여자 코트 추천";
	titleChange(copy);
	}}> 👩 </button>
```

<br>

## Component

- 긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법
- 사용법(HTML 축약)

  1. function을 이용해서 함수를 하나 만들어주고 작명한다.

  2. 그 함수 안에 return () 안에 축약을 원하는 HTML을 담는다.

  3. 원하는 곳에서 <함수명></함수명>(or <함수명 /> 사용하면 아까 축약한 HTML이 등장한다.\

- 주의점

  1. component는 보통 영어대문자로 작명

  2. return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없다.

  3. function App(){} 내부에서 만들면 안된다.
     → function App(){}도 컴포넌트 생성문법이니까! component 안에 component 못 만듦..

```jsx
function App() {
  return (
    <div>
      (생략)
      <Modal></Modal> {/* == <Modal /> */}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// 화살표 함수 사용 가능
const Modal = () => {
  return <div>...</div>;
};
```

<br>

## 리액트 환경에서 동적인 UI 만드는 법

1. html css로 미리 UI 디자인을 다 해놓기

2. UI의 현재 상태를 state로 저장해두기

3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성하기

```jsx
function App() {
	...
  let [modal, setModal] = useState(false); // step 2
	...
	return (
	...
		<div className="list">
		  <h4
		    onClick={() => { // step 3
		      if (modal == false) {
		        setModal(true);
		      } else setModal(false);
		    }}
		  >
		    {title[1]}
		  </h4>
		  <p>2월 17일 발행</p>
		</div>

		{
		  modal == true ? <Modal /> : null // 삼항연산자 : 조건식 ? true : false
		} // JSX 중괄호 안에서는 바로 if문 못씀.. 삼항연산자 쓰기!
	...
	)
}

function Modal() { // step 1
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

<br>

## map

- 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수 (반복문)
- JSX 안에서 html을 반복생성하고 싶을 때, 많은 div들을 반복문으로 줄이고 싶을 때 사용
- 기능 1 : array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행
- 기능 2 : 콜백함수에 안에 작명한 파라미터(a)가 array 안에 있던 모든 자료를 하나씩 출력
  - 파라미터 2개까지 작명 가능 : map(function(a, i){})
  - 첫째 파라미터 a : array안에 있던 자료
  - 둘째 파라미터 i : 0부터 1씩 증가하는 정수
- 기능 3 : return 오른쪽에 뭐 적으면 array로 담아줌

```jsx
// 기능 1
var arr = [2, 3, 4];
arr.map(function () {
  console.log(1);
}); // console.log(1) 3번 실행됨

// 기능 2
var arr = [2, 3, 4];
arr.map(function (a) {
  console.log(a);
}); // 2, 3, 4 하나씩 출력됨

// 기능 3
var arr = [2, 3, 4];
var newArr = arr.map(function (a) {
  return a * 10;
});
console.log(newArr); // [20, 30, 40] 출력
```

<br>

## props

- 부모 컴포넌트의 state를 자식 컴포넌트로 전송할 때 사용
- step 1 : 부모 안의 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명={state이름} />
- step 2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용

```jsx
function App() {
  let [title, setTitle] = useState(["UN village", "Candy", "Bambi"]);
  return (
    <div>
      <Modal title={title} color={"skyblue"}></Modal>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// <Modal a={a}  b={b} ... > 무한히 전송 가능
// state 말고 style 등 이것저것 다 전송할 수 있다.
// <Modal 글제목={변수명}> 일반 변수, 함수 전송도 가능
// <Modal color="skyblue"> 일반 문자전송은 중괄호 없이 따옴표만 해도 된다.
// 자식 → 부모 방향 전송은 불가능(단방향). 자식이 아닌 다른 컴포넌트로의 전송도 불가능
// 파라미터 문법를 통해 함수 하나로 다양한 기능을 사용하는 것이 키포인트!
```

출처 : 코딩애플 'React 리액트 기초부터 쇼핑몰 프로젝트까지!'
