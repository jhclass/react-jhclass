import React from "react";

class FaqList extends React.Component{
    render(){
        const data = this.props.faqList; //데이터를 담음. (App.js 안에 FaqList 컴포넌트의 faqList속성을 가져와서 담음)
        console.log(data);
        
        const boardListLen = data.length;
        const lists = [];
        const thisMode = this.props.mode;
        
        for(let i=0; i < boardListLen; i++){
         lists.push(<li className="list" key={i}><a href={'/board/'+data[i].id} onClick={(e)=>{
            e.preventDefault(); 
            this.props.onChangePage(data[i].id);

         }}>{data[i].title}</a></li>);
         }
         //jsx라는 것을 명심하자! html 이 아니다 유사 html이다.
        if(thisMode==='create'|| thisMode==='main'){
            return(
                <div id="faqList">
                    {/* {list} */}
                    <ul>
                       {lists}
                    </ul>
                </div>
            );
        }else{
            return(
                <div id="faqList" style={{display:'none'}}>
                    {/* {list} */}
                    <ul>
                       {lists}
                    </ul>
                </div>
            );
        }
    }
  }

  export default FaqList;
