import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import letters from '../modules/letter.js'
import writeuser from '../modules/writeuser.js'
import fancer from '../modules/writeuser.js'

const rootReducer = combineReducers({ letters, writeuser: fancer })
const store = createStore(rootReducer, composeWithDevTools())

export default store
