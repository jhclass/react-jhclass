//import logo from './logo.svg';
import React from 'react';
import Title from './components/Title';
import FaqList from './components/FaqList';
import Content from './components/Content';
import './App.css';



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
