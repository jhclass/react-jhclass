//import logo from './logo.svg';
import React from 'react';
import Title from './components/Title';
import FaqList from './components/FaqList';
import Content from './components/Content';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);//초기화
    //state설정
    this.state={
      headingTitle:{title:'FAQ',desc:'자주 묻는 질문입니다.'},
      faqList:{}
    }
  }
  render(){
  return (
    //wrap 이 만약에 없다면?? 에러가 뜹니다! 이유는? 
    //리액트는 가장 상위 태그는 하나만 존재해야한다는 사실~!
    <div id="wrap">
      
      <Title title={this.state.headingTitle.title} desc={this.state.headingTitle.desc}></Title>
      <FaqList></FaqList>
      <Content></Content>
    </div>
    
  );
  }
}

export default App;
