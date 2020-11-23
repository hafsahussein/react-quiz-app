

 const Quiz = ({getQuestion,question, options, count, total,getResult})=> {
// disable all other answers when an answer is selected
    return ( 
   <div className="quiz box">
	<div className="question-number"> Question {count} of  {total} </div>
	<div className="question-text">{question}</div>
	<div className="option-container">
	{
		options.map((option, i)=>(
		<div className="option" key ={i}
	onClick ={(e)=>getResult(e)}>{option}</div>
		))
	}	
	</div>
	<div className="next-question-btn">
	
		<button className="btn" onClick={()=>getQuestion()}>Next</button>
		
	</div>
	<div className="answers-indicator">
	<div></div>
	<div></div>
	<div></div>
	<div></div>

	</div>

</div>
	 );
}
 
export default Quiz;