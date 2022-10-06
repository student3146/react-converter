



const defaultState = {
    cash: ' ',
}
  

  
  export const reducer = (state = defaultState, action) => {
  
    switch(action.type) {
      case 'COURSE_DOLLAR': 
      return {
        ...state, cash: action.payload
      }

      default: 
      return state
    }
  }