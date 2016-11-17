import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CountDown from '../src/index';
class Index extends Component {
    render(){
        return (
            <div>
                <div>112121dsadsada2221</div>
                    <CountDown timeEnd = {999999} />               
            </div>
            
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById("container")
)