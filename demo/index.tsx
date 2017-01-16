import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactTimers from '../src/ReactTimers';
import './css/index.css';

class Index extends Component<any, any> {

    render(){
        
        return (
            <div className="timeclick">
                <ReactTimers timeEnd = {10000} options={{atTimeCallback:{time:2000,callback:()=>console.log(1)}}}/>               
            </div>
            
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById("container")
)