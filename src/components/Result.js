const Result = (props) => {
	const {totalQuestions, attempts, totalCorrect, goToHome, tryAgain} = props;
    return ( 
        <div className="result box">
	<h1>Quiz result</h1>
	<table>
		<tbody>
	<tr>
		<td>total questions</td>
	<td className="total-questions">{totalQuestions}</td>
	</tr>
	<tr>
			<td>attempted</td>
	<td className="total-attempts">{attempts}</td>
	</tr>
	<tr>
			<td>correct</td>
			<td className="total-correct">{totalCorrect}</td>
	</tr>
	<tr>
			<td>Wrong</td>
	<td className="total-wrong">{attempts-totalCorrect}</td>
	</tr>
	<tr>
		<td>percentage</td>
	<td className="percentage">{(totalCorrect/totalQuestions)*100}% </td>
	</tr>
	<tr>
		<td>your total score</td>
	<td className="total-score">{totalCorrect} / {totalQuestions}</td>
	</tr>
	</tbody>
	</table>
	<button  className="btn"
	onClick={tryAgain}
	>try again</button> {" "}
	<button  className="btn"
	onClick={()=>
		goToHome()}
	>go to home</button>
</div>
     );
}
 
export default Result;