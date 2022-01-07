//import logo from './logo.svg';
import react from 'react';
import './App.css';

//function 으로 컴포넌트생성
//class 로 컴포넌트 생성의 차이
// function Title(props){
//   return(
//     <div id="title">
//       <h1>{props.title}</h1>
//       <p>{props.desc}</p>
//       {/* 타이틀 jsx 주석 */}
//     </div>
//   );
// }

class Title extends react.Component {
  render(){
    return(
    <div id="title">
      <h1>{this.props.title}</h1>
      <p>{this.props.desc}</p>
     {/* 타이틀 jsx 주석 */}
    </div>
    );
  }


}

function FaqList(){
  return(
    <div id="faqList">
        <ul>
            {/*a 태그 에 # 넣을 넣으면 유효하지 않은 값이라고 이야기 하니
             html과 달리 임시로 값을 넣을 땐 #!을 사용하죠! */}
            <li><a href="#!">자주묻는질문1</a></li>
            <li><a href="#!">자주묻는질문2</a></li>
            <li><a href="#!">자주묻는질문3</a></li>
        </ul>
    </div>
  );
}
function Content(){
  return(
    <div id="content">
          <h2>자주묻는질문1</h2>
          <p>자주묻는질문1에 대한 내용이 여기에 포함됩니다.</p>
    </div>
  );
} 


function App() {
  return (
    //wrap 이 만약에 없다면?? 에러가 뜹니다! 이유는? 
    //리액트는 가장 상위 태그는 하나만 존재해야한다는 사실~!
    <div id="wrap">
      
      <Title title='FAQ' desc='자주 묻는 질문입니다.'></Title>
      <FaqList></FaqList>
      <Content></Content>
    </div>
    
  );
}

export default App;
