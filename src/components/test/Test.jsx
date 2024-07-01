import React, {useReducer} from 'react';


const reducer = (state, action) => {
  switch(action.type){
    case 'increase':
      return {
        count: state.count + 1,
        arr: state.arr,
        }
     default:
       return state; 
  }
}

const initialScale = {
  count: 0,
  arr: []
}

const Test = () => {
  const [state, dispatch] = useReducer(reducer, initialScale)
  const oldArr = [1, 2,3,4,5];
  
  
  return (
    <div>
      <button onClick={()=>dispatch({type: 'increase'})}>Add</button> 
      <span>{state.count}</span>
      <span>{state.arr}</span>
    </div>
  )
}

export default Test