import React from "react";
import '../Content.css';

class Btngroup extends React.Component{
render(){
    const thisMode=this.props.mode;
    if(thisMode==="create" || thisMode==="main"){
        return(
            <div className="faqBtns" onClick={()=>{this.props.showCreate();}}><span>작성</span></div>
        );
    }else{
        return(
            <div style={{display:"none"}}className="faqBtns" onClick={()=>{this.props.showCreate();}}><span>작성</span></div>
        ); 
    }
}

}

export default Btngroup;