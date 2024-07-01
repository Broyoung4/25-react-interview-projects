export const intialState = {
    selected: false, 
    enableMultiSelection: false, 
    multiSelection: []
}

export const Reducer = (state, action) => {
	switch(action.type) {
		case 'setSelected':
			return {
				...state,
				selected: action.payload
				
				}
		case 'toggleMultiSelection':
			return {
				selected: state.selected, 
				enableMultiSelection: !state.enableMultiSelection, 
				multiSelection: state.multiSelection}
		case 'addMultiSelection':
			return { 
			selected: state.selected, 
			enableMultiSelection: !state.enableMultiSelection, 
			multiSelection: [ ..action.payload] }
	}
}
