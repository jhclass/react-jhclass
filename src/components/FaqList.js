import React from "react";

class FaqList extends React.Component{
    render(){
        const boardList = ['자주묻는질문1','자주묻는질문2','자주묻는질문3'];
        const boardListLen = boardList.length;
        const list = [];
        //결과는?
        // let list = '<ul>';
        // for(let i=0; i < boardListLen; i++){
        // list += '<li class="list"><a href="#!">자주묻는질문2</a></li>';
        // }
        // list += '</ul>'
        // console.log(list)
        //문자열로 들어가버린다...
        
        //그렇다면 태그 자체를 삽입할수 있는 방법을 찾아야 한다..!
        for(let i=0; i < boardListLen; i++){
         list.push(<li className="list" key={i}><a href="#!">자주묻는질문2</a></li>);
         }
         //jsx라는 것을 명심하자! html 이 아니다 유사 html이다.
        
        return(
        <div id="faqList">
            {/* {list} */}
            <ul>
               {list}
            </ul>
        </div>
        );
    }
  }

  export default FaqList;
