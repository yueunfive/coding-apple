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

<br>

## input

```jsx
// <input>에 유저가 입력할 때마다 안에 있는 코드를 실행
<input onChange={()=>{ console.log(1) }}/>

// 현재 <input>에 입력된 값 가져오기
// e.target : 현재 이벤트가 발생한 곳 (e는 작명)
<input onChange={(e)=>{ console.log(e.target.value) }}/>

// e.preventDefault() : 이벤트 기본 동작 막기
// e.stopPropagation() : 이벤트 버블링 막기

// state로 사용자가 input에 입력한 데이터 저장하기
function App (){

  let [input, setInput] = useState('');
  return (
    <input onChange={(e)=>{
      setInput(e.target.value)
      console.log(input)
    }} />
  )
}
```

<br>

## export default / import 문법

- 다른 파일에 보관된 변수, 함수, 자료형 등을 공유할 수 있음
- 파일마다 export default 키워드는 하나만 사용가능
- 파일경로는 ./ (현재경로) 부터 시작

```jsx
// data.js 파일
// 원하는 변수를 밖으로 내보내기
// export default 변수명;
let a = 10;
export default a;

// App.js 파일
// export 했던 변수를 다른 파일에서 사용하기
// import 작명 from './파일경로'
import a from "./data.js";
console.log(a);
```

```jsx
// 여러개의 변수 내보내기

// data.js 파일
var name1 = "yueun";
var name2 = "haeun";
export { name1, name2 };

// App.js 파일
import { name1, name2 } from "./data.js";

// export { } -> import { } 쓸 때 자유작명이 불가능.
// export 했던 변수명 그대로 적기.
```

<br>

## 리액트 라우터

- 리액트는 html 파일을 하나만 사용
- 다른 페이지 요청하면 그냥 내부에 있는 <div>를 갈아치워서 보여줌
- react-router-dom(라이브러리) 설치해서 구현하는게 일반적임

```jsx
// 페이지 이동 버튼
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>

// Route : 페이지라고 보면 됨
<Routes>
	<Route path="/" element={ <div>메인페이지</div> } />
	<Route path="/about" element={ <div>어바웃페이지임</div> } />
</Routes>

// useNavigate() : 페이지 이동 기능
// Link는 못생겨서 이거 쓰는게 나음
// navigate(-n) : 뒤로 n번 가기, navigate(n) : 앞으로 n번 가기
function App(){
  let navigate = useNavigate() // 변수 선언 필요

  return (
	...
    <button onClick={()=>{ navigate('/detail') }}>Detail</button>
  )
}

// nested routes : 서브 경로
// /about/member & /about/location
<Route path="/about" element={ <About/> } >
  <Route path="member" element={ <div>member</div> } />
  <Route path="location" element={ <div>location</div> } />
</Route>
// Outlet : nested routes안의 element들을 어디에 보여줄지 표기하는 곳
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

// URL 파라미터로 상세페이지 100개 만들기
<Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
// ':id' : 아무문자, id도 그냥 작명한 것
// 주소창에 /detail/아무거나 입력시 컴포넌트 보여줌
// 실전예제는 DetailPage.js 참고..
```

<br>

## useEffect

- 컴포넌트 장착(mount), 업데이트(update), 제거(unmount)시 코드 실행 가능
- useEffect 안에 적은 코드는 html 렌더링 이후에 동작한다.
  → 반복 연산, 서버에서 데이터 가져오는 작업, 타이머 등 복잡하거나 쓸데없는 기능들을 useEffect 안에 적어서 실행 순서를 뒤로 미루면 속도가 빨라진다.

```jsx
import {useState, useEffect} from 'react';

function Detail(){
	let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

	useEffect(() => {
	  //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
	  let a = setTimeout(() => {
	    setAlert(false);
	  }, 2000);
	  return () => {
	    clearTimeout(a); // 기존 타이머 제거 (청소용)
	  };
	}, []);


  return (
		{alert == true ? (
	     <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
    {count}
		<button onClick={()=>{ setCount(count+1) }}>버튼</button>)
}
```

```jsx
// 1.재렌더링마다 코드 실행가능
useEffect(() => {
  실행할코드;
});

// 2.컴포넌트 mount시 (로드시) 1회만 실행가능
useEffect(() => {
  실행할코드;
}, []);

// 3.useEffect 안의 코드 실행 전에 항상 실행
useEffect(() => {
  return () => {
    실행할코드;
  };
});

// 4.컴포넌트 unmount시 1회 실행
useEffect(() => {
  return () => {
    실행할코드;
  };
}, []);

// 5.state1(작명)이 변경될 때만 실행
useEffect(() => {
  실행할코드;
}, [state1]);
```

**문법 배우는게 중요한게 아니라 언제 어떻게 사용할지 생각해보는게 훨씬 중요하다!**

출처 : 코딩애플 'React 리액트 기초부터 쇼핑몰 프로젝트까지!'
