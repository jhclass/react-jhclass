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
      faqList:[
        {id:1, title:'자주묻는질문1',desc:'자주묻는질문1에 대한 내용이 여기에 포함됩니다.'},
        {id:2, title:'자주묻는질문2',desc:'자주묻는질문2에 대한 내용이 여기에 포함됩니다.'},
        {id:3, title:'자주묻는질문3',desc:'자주묻는질문3에 대한 내용이 여기에 포함됩니다.'}
      ]
    }
  }
  render(){
  return (
    //wrap 이 만약에 없다면?? 에러가 뜹니다! 이유는? 
    //리액트는 가장 상위 태그는 하나만 존재해야한다는 사실~!
    <div id="wrap">
      
      <Title title={this.state.headingTitle.title} desc={this.state.headingTitle.desc}></Title>
      <FaqList faqList={this.state.faqList}></FaqList>
      <Content></Content>
    </div>
    
  );
  }
}

export default App;
