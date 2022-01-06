import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //wrap 이 만약에 없다면?? 에러가 뜹니다! 이유는? 
    //리액트는 가장 상위 태그는 하나만 존재해야한다는 사실~!
    <div id="wrap">
      
      <div id="title">
          <h1>FAQ</h1>
          <p>자주 묻는 질문입니다.</p>
          {/* 타이틀 jsx 주석 */}
      </div>
      <div id="faqList">
        <ul>
            <li><a href="#">자주묻는질문1</a></li>
            <li><a href="#">자주묻는질문2</a></li>
            <li><a href="#">자주묻는질문3</a></li>
        </ul>
      </div>
      <div id="content">
          <h2>자주묻는질문1</h2>
          <p>자주묻는질문1에 대한 내용이 여기에 포함됩니다.</p>
      </div>
    </div>
    
  );
}

export default App;
