import initState from '../store/store'
import { ADD } from '../actions/actionTypes'

/** Main reducer */
export default function reducer(state = initState, action) {
	/** Switch actions */
	switch (action.type) {
		default:
			return state;
	}
}