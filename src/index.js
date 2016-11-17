import React,{Component} from "react";

class Count extends Component {
    constructor(props){
        super(props);
        this.state = {
            timeEnd: this.props.timeEnd/1000
        }
    }
    
    componentDidMount(){
        this.timeCount = setInterval(this.count.bind(this),1000)
    }
    count() {
        const { timeEnd } = this.state;
        let d,h,m,s,rest;
        if( timeEnd >0 ){
			rest = timeEnd;
			s = Math.floor(rest % 60);
			rest = rest/60;
			m = Math.floor(rest % 60);
			rest = rest/60;
			h = Math.floor(rest % 24);
			rest = rest/24;
			d = Math.floor(rest);
			let newTimeEnd = timeEnd - 1;
			this.setState({
				d: d,
				h: h,
				m: m,
				s: s,
				timeEnd:newTimeEnd
			})
		} else {
			clearInterval(this.timeCount)
            if(this.props.callback != undefined) {
                this.props.callback()
            }
		}
    }

    componentWillUnmount(){
		clearInterval(this.timeCount)
	}
    
    render(){
        const {d,h,m,s} = this.state;
		const {className , style} = this.props
 		let qs ,
			qm ,
			qh ,
			qd ;
		qs = s < 10 ? "0"+s : s;
		qm = m < 10 ? "0"+m : m;
		qh = h < 10 ? "0"+h : h;
		qd = d < 10 ? "0"+d : d;
        return (
            <span className={className} style={style}>
				{d>0 &&
					`${qd}d ${qh}h ${qm}m`
				}
				{d==0 &&
					`${qh}h ${qm}m ${qs}s`
				}
			</span>
        )
    }
}

export default Count