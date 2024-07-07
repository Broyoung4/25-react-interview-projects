/** @format */

//Acordion State components

export const accordInitialState = {
	selected: "",
	enableMultiSelection: false,
	multiSelection: [],
};

export const accordReducer = (state, action) => {
	switch (action.type) {
		case "setSelected":
			return {
				...state,
				selected:
					action.payload === state.selected ? null : action.payload,
			};
		case "toggleMultiSelection":
			return {
				...state,
				enableMultiSelection: !state.enableMultiSelection,
				multiSelection: [...state.multiSelection],
			};
		case "addMultiSelection":
			return {
				...state,
				multiSelection: [...action.payload],
			};
		default:
			return state;
	}
};

//end of Accordion

//star-rating state components

export const starsInitialState = {
	rating: 0,
	hover: 0,
};

export const starsReducer = (state, action) => {
	switch (action.type) {
		case "handlerating":
			return {
				...state,
				rating: action.payload,
			};
		case "handlehover":
			return {
				...state,
				hover: action.payload,
			};
		default:
			return state;
	}
};
