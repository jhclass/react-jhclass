import React from "react";
import '../App.css';
class Datagroup extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            title:'',
            desc:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
     
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
        [name]:value
        });
    }
    
    render(){
      const thisMode = this.props.mode;
      const idx = this.props.selected;
      const faqList = this.props.faqList;
      const thisTitle = faqList[idx].title;
      const thisDesc = faqList[idx].desc;
      console.log(thisMode);
      console.log(thisTitle);
      console.log(idx)
       if(thisMode==='modify'){
        return(
            <div id="dataGroup">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    //이부분 수정 함수명교체 하고 해당 순번의 데이터 교체하는 함수작성 어디에? App.js
                    this.props.updateState(this.state.title,this.state.desc,idx);
                }
                }> 
                    <ul className="createList">
                        <li><input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder={thisTitle}></input></li>{/*타이틀(제목) */}
                        <li><textarea type="text"  name="desc" value={this.state.desc} onChange={this.handleInputChange} placeholder={thisDesc}></textarea></li>{/*desc(내용) */}
                        <li><input type="submit" value="수정"></input> <input type="button" value="취소" onClick={()=>{this.props.cancel();this.setState({title:'',desc:''})}}></input></li>
                    </ul>
                </form>
            </div>
        );
       }else if(thisMode==='create'){
        return(
            <div id="dataGroup">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.uploadState(this.state.title,this.state.desc);
                }
                }> 
                    <ul className="createList">
                        <li><input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="제목을 입력하세요"></input></li>{/*타이틀(제목) */}
                        <li><textarea type="text"  name="desc" value={this.state.desc} onChange={this.handleInputChange} placeholder="내용을 입력하세요"></textarea></li>{/*desc(내용) */}
                        <li><input type="submit" value="생성"></input></li>
                    </ul>
                </form>
            </div>
        );

       }else{
        return(
            <div id="dataGroup" style={{display:"none"}}>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.uploadState(this.state.title,this.state.desc);
                }
                }> 
                    <ul className="createList">
                        <li><input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="제목을 입력하세요"></input></li>{/*타이틀(제목) */}
                        <li><textarea type="text"  name="desc" value={this.state.desc} onChange={this.handleInputChange} placeholder="내용을 입력하세요"></textarea></li>{/*desc(내용) */}
                        <li><input type="submit" value="생성"></input></li>
                    </ul>
                </form>
            </div>
        );

       }
    }
}

export default Datagroup;
