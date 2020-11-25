import React from 'react';
import Home from './Home'
import Quiz from './Quiz';
import Result from './Result';
import  { questions } from '../Questions';
class UserQuiz extends React.Component {
  state ={
    availableQuestions:[...questions],
    questionText:'',
    options:[],
    delay:0.2,
    answer:'',
    total:questions.length,
    count:0,
    available:questions.length,
    attempted:0,
    correctness:'',
    totalCorrect:0,
    selected:false,
    page:'Home'
  }
  // Go to the Quiz Component
    goToQuiz = ()=>{
      this.setState({
        page:'Quiz'
      })
    }
// get random question
getNewQuestion = ()=>{
  const {availableQuestions, total, count, available} = this.state;
 
  if(count===total){
    this.setState({
      page:'Result'
    })
  }
  else{
    const randomQuestion = availableQuestions[Math.floor(Math.random()*available)];  
    const index = availableQuestions.indexOf(randomQuestion);
    availableQuestions.splice(index,1)     
         this.setState({
          availableQuestions,
          questionText:randomQuestion.question,
          options:[...randomQuestion.options],
          answer:randomQuestion.answer,
          correctness:'',
          count:count+1,
          available:available-1,
          selected:false,     
         })
        
       }
}     
// get if user chooses the correct anser or not
getResult = (e)=>{
  const {attempted, totalCorrect, answer, count} = this.state;
  const className = e.target.textContent===answer? "correct":'wrong';
  this.setState({
    attempted:attempted+1,
    correctness:className,
    totalCorrect:className==="correct"?
    totalCorrect+1:totalCorrect,
    selected:true,
  })
  e.target.classList.add(className)
  const indicator = document.querySelector('.answers-indicator');
  indicator.querySelectorAll('div').forEach(div=>{
    if(div.id === (count-1).toString())
    div.className =className
  })
}
// Go to the Result Component
  goToResult = ()=>{
    this.setState({
      page:'Result'
    })
  } 
  // refresh the state (make it like the initial)
  refresh = ()=>{
    this.setState({
      availableQuestions:[...questions],
      questionText:'',
      options:[],
      answer:'',
      total:questions.length,
      count:0,
      available:questions.length,
      attempted:0,
      correctness:'',
      totalCorrect:0,
      selected:false,
    })
  }
// Go to the Home Component
  goToHome = ()=>{
    this.setState({
      page:'Home'
    })
  } 
render(){
        const {page} = this.state;
        const values = {...this.state}
        const quizProps ={
          question:this.state.questionText,
          options:this.state.options,
          answer:this.state.answer,
          count:this.state.count,
          total:this.state.total,
          correctness:this.state.correctness,
          attempted:this.state.attempted,
          selected:this.state.selected,
        }
        const quizMethods ={
          getNewQuestion:this.getNewQuestion,
          getResult:this.getResult,
          goToResult:this.goToResult
        }
        switch(page){
          case 'Home':
              return (
            <Home
            goToQuiz ={this.goToQuiz}
            />
          
          )
        case 'Quiz': 
              return <Quiz properties ={quizProps}
                           methods ={quizMethods}
              />
              case 'Result':
                return <Result goToQuiz ={this.goToQuiz}
                 goToHome ={this.goToHome} 
                 refresh = {this.refresh}
                 values={values}
                 />
            default: return <h1>we don't recognize that page</h1>
        }

  }
}

export default UserQuiz;