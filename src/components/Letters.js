import React, {Component} from 'react';
import Letter from './Letter';

class Letters extends Component{
    render(){
        return(<div>
          <h1> Available letters</h1> 
            <Letter/>
        </div>)
    }

}
export default Letters;