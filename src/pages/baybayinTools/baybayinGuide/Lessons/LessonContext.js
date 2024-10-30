import React, { createContext, useReducer } from "react"

const LessonContext = createContext()

const initialState = { loading: true, error: null, lessonData: null }

const lessonReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_LESSON":
      return { ...state, loading: true }
    case "LESSON_LOADED":
      return { ...state, loading: false, lessonData: action.payload }
    case "LESSON_ERROR":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const LessonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(lessonReducer, initialState)
  return (
    <LessonContext.Provider value={{ state, dispatch }}>
      {children}
    </LessonContext.Provider>
  )
}

export default LessonContext