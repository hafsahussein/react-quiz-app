import React, {Component} from 'react'
class Quiz extends Component {
	componentDidMount(){
		this.props.methods.getNewQuestion()
	}
	// state ={delay:0.2}
	disable=(elem)=>{
		const length = elem.children.length;
		for(let i =0; i<length; i++){
		elem.children[i].classList.add('already-answered')
	}
	}
	getResult = (e)=>{
		this.props.methods.getResult(e);
		this.disable(e.target.parentElement)
	}
	render(){
		const {question, options, count, total,
			 correctness} =this.props.properties;
		const {getNewQuestion} = this.props.methods;		 
		const myOptions = document.querySelectorAll('.option');
			myOptions.forEach(option=>{
				if(!correctness)
				option.className="option"
			})
		return ( 
	   <div className="quiz box">
		<div className="question-number"> Question {count} of  {total} </div>
		<div className="question-text">{question}</div>
		<div className="option-container">
		{
			options.map((option, i)=>(
			<div className="option" 
			onClick={(e)=>this.getResult(e)}
			style={{animationDelay:''}}
			key ={i}>{option}</div>
			))
		}	
		</div>
		<div className="next-question-btn">
		
			<button className="btn" onClick ={()=>getNewQuestion()}>Next</button>
			
		</div>
		<div className="answers-indicator">
		<div id ='0'></div>
		<div id ='1'></div>
		<div id ='2'></div>
		<div id ='3'></div>
		<div id ='4'></div>
		</div>
	
	</div>
		 );
	}
}
 
export default Quiz;