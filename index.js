import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Second from './Second';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // [1] 리액트의 Strict 모드를 사용하면 검증을 위해 Home컴포넌트를 두번 실행함. [추후. 리액트 버전업 되었을때 컴포넌트를 2번 생성하는 기능이 있다고 예고함. 이를 미리 테스트하는 것임]
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Home></Home>
  // </React.StrictMode>

  // [2] Home 컴포넌트만 그리기
  // <Home></Home>

  // (실습2) 함수형 컴포넌트 추가 - root요소가 2개를 동시에 그릴 수 없기에 그룹이 필요.
  <>
    <Home></Home>
    <Second></Second>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
