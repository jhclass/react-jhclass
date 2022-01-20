import React from "react";

class Title extends React.Component {
    render(){
      return(
      <div id="title">
        <h1 onClick={(e)=>{
         e.preventDefault(); 
         this.props.onChangePage();
        }}>{this.props.title}</h1>
        <p>{this.props.desc}</p>
       {/* 타이틀 jsx 주석 */}
      </div>
      );
    }
  
  
  }

  export default Title;