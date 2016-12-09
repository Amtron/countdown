import React,{Component} from "react";

class Count extends Component {
	static defaultProps = {
		options: {
			model: "standard",
		}
	}
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
        const {timeEnd} = this.state;
		const {options, callback} = this.props;
		if(options !== undefined) {
			const {atTimeCallback} = options;
			if ( typeof atTimeCallback !== "undefined") {
					if(atTimeCallback.time === timeEnd * 1000){
						atTimeCallback.callback();
					}
			}
		}
        let d,h,m,s,rest;
		
        if( timeEnd >=0 ){
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
            if( typeof callback === "function"){
                callback()
            }
		}
    }

    componentWillUnmount(){
		clearInterval(this.timeCount)
	}
    
    render(){
        const {d,h,m,s} = this.state;
		const {className, style, options} = this.props
 		let qs ,
			qm ,
			qh ,
			qd ;
		qs = s < 10 ? "0"+s : s;
		qm = m < 10 ? "0"+m : m;
		qh = h < 10 ? "0"+h : h;
		qd = d < 10 ? "0"+d : d;

		let result ;
		if(options.model ===undefined){
			options.model = "standard";
		}
		if( d!== undefined){
			switch (options.model) {
				case "standard" :
					result = `${qh} : ${qm} : ${qs}`
					break;
				case "text":
					result = d > 0 ? `${qd}d ${qh}h ${qm}m` :  `${qh}h ${qm}m ${qs}s`;
					break;
			}
		}
		
        return (
            <span className={className} style={style}>
				{ result }
			</span>
        )
    }
}

export default Count