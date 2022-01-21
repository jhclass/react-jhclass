import React from "react";

class FaqList extends React.Component{
    render(){
        const content_data = this.props.content;
        //console.log(JSON.stringify(content_data));
        let sel_idx = 0;
        sel_idx = this.props.selected;
        console.log(sel_idx);
        
        
        return(
        <div id="content">
            <h2>{content_data[sel_idx].title}</h2>
            <p>{content_data[sel_idx].desc}</p>
        </div>
        );
    }
  }

  export default FaqList;