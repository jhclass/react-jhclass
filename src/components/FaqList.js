import React from "react";

class FaqList extends React.Component{
    render(){
        return(
        <div id="faqList">
            <ul>
                {/*a 태그 에 # 넣을 넣으면 유효하지 않은 값이라고 이야기 하니
                html과 달리 임시로 값을 넣을 땐 #!을 사용하죠! */}
                <li><a href="#!">자주묻는질문1</a></li>
                <li><a href="#!">자주묻는질문2</a></li>
                <li><a href="#!">자주묻는질문3</a></li>
            </ul>
        </div>
        );
    }
  }

  export default FaqList;
