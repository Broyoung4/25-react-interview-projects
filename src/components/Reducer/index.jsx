//Acordion State components

export const accordInitialState = {
  selected: '', 
  enableMultiSelection: false, 
  multiSelection: []
}

export const accordReducer = (state, action) => {
switch(action.type) {
  case 'setSelected':
    return {
      ...state,
      selected: action.payload

      }
  case 'toggleMultiSelection':
    return {
      ...state,
      enableMultiSelection: !state.enableMultiSelection, 
      multiSelection:  [...state.multiSelection]
    }
  case 'addMultiSelection':
    return { 
    ...state, 
     
    multiSelection:  [...state.multiSelection, ...action.payload]}
    
}
  
}

//end of Accordion 

//Image Slider 

