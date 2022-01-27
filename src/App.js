//import logo from './logo.svg';
import React from 'react';
import Title from './components/Title';
import FaqList from './components/FaqList';
import Content from './components/Content';
import Datagroup from './components/Datagroup';
import Btngroup from './components/Btngroup';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);//초기화
    //state설정
    this.state={
      mode:'main',
      selected_idx:0,
      headingTitle:{title:'FAQ',desc:'자주 묻는 질문입니다.'},
      faqList:[
        {id:0, title:'자주묻는질문1',desc:'자주묻는질문1에 대한 내용이 여기에 포함됩니다.'},
        {id:1, title:'자주묻는질문2',desc:'자주묻는질문2에 대한 내용이 여기에 포함됩니다.'},
        {id:2, title:'자주묻는질문3',desc:'자주묻는질문3에 대한 내용이 여기에 포함됩니다.'}
      ]
    }
  }
 
  render(){
  return (
    //wrap 이 만약에 없다면?? 에러가 뜹니다! 이유는? 
    //리액트는 가장 상위 태그는 하나만 존재해야한다는 사실~!
    <div id="wrap">
      
      <Title mode={this.state.mode} title={this.state.headingTitle.title} desc={this.state.headingTitle.desc} onChangePage={()=>{
       alert('FAQ 메인화면입니다.');
        this.setState({mode:'main'});

      }}></Title>
      <FaqList faqList={this.state.faqList} onChangePage={(idx)=>{
        alert('자주묻는질문출력');
        alert(idx); // FaqList.js에서 data[i].id의 값을 idx인자로 전달은 것!
        alert(`자주묻는질문${idx+1}출력`); //백틱도 활용해봅시다 :)
        this.setState({mode:'read',selected_idx:idx});
      }}></FaqList>
      <Content mode={this.state.mode} content={this.state.faqList} selected={this.state.selected_idx}></Content>
      <Datagroup uploadState={(checkTitle,checkDesc)=>{
        alert('업로드되었다.');
        alert(`${checkTitle},${checkDesc}`);
        const idNum = this.state.faqList.length+1;
        this.setState({
         faqList: this.state.faqList.concat({id:idNum-1,title:checkTitle,desc:checkDesc}) //push말구 concat을 사용한다 이유는?
        });
      }}></Datagroup>
      <Btngroup></Btngroup>
    </div>
    
  );
  }
}

export default App;
