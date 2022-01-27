
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
    }
}

export default Datagroup;
