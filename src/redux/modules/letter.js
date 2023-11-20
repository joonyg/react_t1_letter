import { v4 as uuid } from 'uuid'
import FakeData from '../../shared/FakeData.json'

const DEL_LETTER = 'letter/DEL_LETTER'
const ADD_FAN_LETTER = 'letter/ADD_FAN_LETTER'

export const deleteLetter = payload => ({
  type: DEL_LETTER,
  payload,
})

export const addFanLetter = payload => ({
  type: ADD_FAN_LETTER,
  payload,
})

// Reducer
const letterState = FakeData

const letters = (state = letterState, action) => {
  switch (action.type) {
    case DEL_LETTER:
      const idToDelete = action.payload
      const newLetters = state.filter(letter => letter.id !== idToDelete)
      return newLetters

    case ADD_FAN_LETTER:
      const today = new Date()
      const UpdateDate = `${today.getFullYear()}년 ${
        today.getMonth() + 1
      }월 ${today.getDate()}일`

      const newFanLetter = {
        id: action.payload.id,
        nickname: action.payload.nickname,
        creatAT: UpdateDate,
        content: action.payload.content,
        writeTo: action.payload.writeTo,
        Avatar: '',
      }

      return [...state, newFanLetter]

    default:
      return state
  }
}

export default letters
