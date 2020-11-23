const Home=({goToQuiz})=> {
	    return (
        <div className="home box">
	<h3>Instructions</h3>
	<p>-You have <span className="total-questions">5</span> questions</p>
	<p>-You can't go back to the quesion if you skip it.</p>
	<button  className="btn"
		onClick={goToQuiz}
	>Start Quiz</button>
</div>    )
}
export default Home; 