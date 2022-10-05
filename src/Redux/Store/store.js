import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import AuthReduers from '../Reducers/AuthReducer'
import AllUsers from '../Reducers/SuperAdmin'
import Quiz, { SubmitQuiz } from '../Reducers/QuizReducer'

const rootReducer = combineReducers({
  Auth: AuthReduers,
  Users: AllUsers,
  quiz:Quiz,
  submit:SubmitQuiz
})

const initialState = {
  quiz: {
    quizItem: localStorage.getItem('Quiz')? JSON.parse(localStorage.getItem('Quiz')): [],
  },
}

const Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default Store
