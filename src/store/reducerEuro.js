



const defaultState = {
    cashE: ' ',
}
  

  
  export const reducerE = (state = defaultState, action) => {
  
    switch(action.type) {
    
       case 'COURSE_EURO': 
       return {
        ...state, cashE: action.payload
       }
      default: 
      return state
    }
  }