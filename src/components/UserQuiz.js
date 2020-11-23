import React from 'react';
import Home from './Home'
import Quiz from './Quiz';
import Result from './Result';
import  { questions } from '../Questions';
class UserQuiz extends React.Component {
  state ={
         avaliableQuestions : [...questions],
         questionText:'',
         options:[],
         answer:'',
         total:questions.length,
         length:questions.length,
         count: 0,
         attempts:0,
         correctness:'',
         totalCorrect:0,
         step:0

      }
      // go to the quiz component
      goToQuiz =()=>{
        // refresh the state (back it to the original)
        this.setState({
            avaliableQuestions:[...questions],
            questionText:'',
            options:[],
            answer:'',
            total:questions.length,
            length:questions.length,
            count: 0,
            attempts:0,
            totalCorrect:0,
        })
        this.getQuestion()
      }
    // go to the result component
      goToResult = ()=>{
        this.setState({
          step: 3
        })
      }
    // go to the home component
      goToHome = ()=>{
        this.setState({
            step: 1
        })
      }
      // generate random question
      getQuestion =()=>{
        const {avaliableQuestions, length, count} =this.state;
          const randomQuestion = 
          avaliableQuestions[Math.floor(Math.random()*length)];
          let index = avaliableQuestions.indexOf(randomQuestion)
          avaliableQuestions.splice(index, 1)
          // if the count is equal to the total which means 
          //all questions are finished then go to the result component
        if(this.state.count===this.state.total)
          this.goToResult();
          // otherwise update the state
          else{
            this.setState({
              questionText:randomQuestion.question,
              options:[...randomQuestion.options],
              answer:randomQuestion.answer,
              count:count+1,
              selected:false,
              step:2,
              avaliableQuestions,
              length:length-1,
              correctness:''
            })
          }
    }
    // get user result for one question
    	getResult = (e) =>{
    let correctness = this.state.answer===e.target.textContent? 'correct':'wrong';
		this.setState({
      correctness,
			totalCorrect:correctness==='correct'?this.state.totalCorrect+1
			:this.state.totalCorrect,
			attempts:this.state.attempts+1,
			selected:true
      
    })
    // assign the optionContainer to the parent
    // element of the option that the user has 
    //chosen so we can able and disable all its child elements
    this.optionContainer=e.target.parentElement;
    // add the class wrong or correct to the option chosen by the user
      if(this.state.correctness)
      e.target.classList.add(this.state.correctness)
      console.log(e.target.classList)
  }
  
  // disable all the options when a user selects one option
	disableOptions = (elem) =>{
		for(let i =0; i< elem.children.length; i++)
		elem.children[i].classList.add('already-answered')
  }
  // able the options back for every new question
	ableOptions = (elem) =>{
		for(let i =0; i< elem.children.length; i++)
		elem.children[i].classList.remove('already-answered')
}
render(){
      // if the user has already selected  an option then disable all the options 
    		if(this.state.selected)
    this.disableOptions(this.optionContainer)
    // able the options back for every new question until a user selects an option
    // but also make sure that there are attempts so the function will not 
    //be called at the first render to avoid the error of undefined optionContainer
		else if(!this.state.selected&&this.state.attempts)
		this.ableOptions(this.optionContainer)
    
  const {step} =this.state;
  switch(step){
    case 1:
      return(
        <Home
        goToQuiz ={this.goToQuiz}
        />
      )
      case 2:
        return (
          <Quiz getQuestion ={this.getQuestion}
            question={this.state.questionText}
            options={this.state.options}
            count={this.state.count}
            total={this.state.total}
            getResult ={this.getResult}
            correctness={this.state.correctness}
            length={this.state.total}
      />
        )
        case 3:
          return (
              <Result totalQuestions={this.state.total}
              attempts={this.state.attempts}
              totalCorrect={this.state.totalCorrect}
              goToHome={this.goToHome}
              tryAgain ={this.goToQuiz}
      />
          )
      default:
        return (
        <Home
        goToQuiz ={this.goToQuiz}
        />
      )    
  }
}
}
export default UserQuiz;
