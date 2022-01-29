import React from "react";
import '../Content.css';

class Content extends React.Component{
    render(){
        const content_data = this.props.content;
        //console.log(JSON.stringify(content_data));
        let sel_idx = 0;
        sel_idx = this.props.selected;
        console.log(sel_idx);
        
        const thisMode = this.props.mode;
        if(thisMode==='main' || thisMode==='create'){
            return(
            <div id="content" style={{display:"none"}}>
                <h2>{content_data[sel_idx].title}</h2>
                <p>{content_data[sel_idx].desc}</p>
            </div>
            );
        }else{
            return(
            <div id="content">
                <h2>{content_data[sel_idx].title}</h2>
                <p>{content_data[sel_idx].desc}</p>
                <div className="faqBtns">
                    <span onClick={()=>{this.props.handleModify()}}>수정</span>
                    <span>삭제</span>
                </div>
            </div>
            );
        }
    }
  }

  export default Content;