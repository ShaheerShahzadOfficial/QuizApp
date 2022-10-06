import axios from "axios"
import { AddQuizQuestion, SubmitQuizFail, SubmitQuizSuccess } from "../Constants"

const AddQuiz = (array)=>(dispatch,getState)=>{
    dispatch({
        type:AddQuizQuestion,
        payload:array
    })

    localStorage.setItem("Quiz", JSON.stringify(getState().quiz.quizItem))

}

const SubmitQuiz = (Score, Course)=>(dispatch)=>{

const quiz = localStorage.getItem('Quiz')? JSON.parse(localStorage.getItem('Quiz')): []

axios.post("https://quizappbackendapi.herokuapp.com/quiz/submitCompleteQuiz",{quiz,Score,Course},{
    withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" }
}).then((result) => {
    dispatch({type:SubmitQuizSuccess})
}).catch((err) => {
    dispatch({type:SubmitQuizFail,
        payload:err?.response?.data?.msg})
});

}


export {
    AddQuiz,SubmitQuiz
}