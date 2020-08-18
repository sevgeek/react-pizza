/** Import actions types */
import { ADD } from './actionTypes'

/** Actions creators */
export const add = number => ({
	type: ADD,
	number
})