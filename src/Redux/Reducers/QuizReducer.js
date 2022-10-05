import { AddQuizQuestion, SubmitQuizFail, SubmitQuizSuccess } from '../Constants'

const initialState = {
  quizItem: [],
}

export default function Quiz(state = initialState, actions) {
  switch (actions.type) {
    case AddQuizQuestion:
      const item = actions.payload
      return {
        quizItem: [...state.quizItem, item],
      }
    default:
      return state
  }
}

const initialStates = {
  error: null,
}

export function SubmitQuiz(state = initialStates, actions) {
switch (actions.type) {
  case SubmitQuizSuccess:
   return{
    success:true
   }  
   
   case SubmitQuizFail:
    return{
      success:false,
    error:actions.payload
    }

    default:
      return state
}
}