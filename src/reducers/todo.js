import { ACTION_TYPES } from "../actions/todo";
const initialState = {
    list: []

}


export const todo = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCHALL:
            return {
                ...state,
                list: [...action.payload]
            }
        

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

       

        default:
            return state
    }
}
