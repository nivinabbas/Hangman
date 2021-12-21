import React, {Component} from 'react';

class Solutions extends Component{
    render(){
        let underScore=["_","_","_","_"];
        return(<div>
           { underScore.map(u=><span> {u} </span>)}
        </div>)
    }

}
export default Solutions;