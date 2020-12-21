const Result = (props) => {
	const {values, goToHome, goToQuiz, refresh} = props;
	const tryAgain =(e)=>{
		e.preventDefault();
		refresh();
		goToQuiz()
	}
	const goHome = ()=>{
		refresh();
		goToHome()

	}
    return ( 
        <div className="result box">
	<h1>Quiz result</h1>
	<table>
		<tbody>
	<tr>
		<td>total questions</td>
	<td className="total-questions">{values.total}</td>
	</tr>
	<tr>
			<td>attempted</td>
	<td className="total-attempts">{values.attempted}</td>
	</tr>
	<tr>
			<td>correct</td>
			<td className="total-correct">{values.totalCorrect}</td>
	</tr>
	<tr>
			<td>Wrong</td>
	<td className="total-wrong">{values.attempted-values.totalCorrect}</td>
	</tr>
	<tr>
		<td>percentage</td>
	<td className="percentage">{(values.totalCorrect/values.total)*100}% </td>
	</tr>
	<tr>
		<td>your total score</td>
	<td className="total-score">{values.totalCorrect} / {values.total}</td>
	</tr>
	</tbody>
	</table>
	<button  className="btn"
	onClick={tryAgain}
	>try again</button> {" "}
	<button  className="btn"
	onClick={()=>
		goHome()}
	>go to home</button>
</div>
     );
}
 
export default Result;