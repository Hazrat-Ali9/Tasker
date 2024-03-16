import { ADD_TO_TASK_LIST, DELETE_ALL_TASK, DELETE_TASK, EDIT_TASK, FAVORITE_OR_NOT_FAVORITE, SEARCH_TASK } from "./actions-type";


const TaskReducer = (state, action) => {
    switch (action.type) {

        case ADD_TO_TASK_LIST:
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }

        case EDIT_TASK:

            return {
                ...state,
                taskList: state.taskList.map((task) => {
                    if (task.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return task;
                    }
                })

            }

        case SEARCH_TASK:
            return {
                ...state,
                searchKey: action.payload
            }

        case DELETE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter((task) => task.id !== action.payload)
            }

        case DELETE_ALL_TASK:
            return {
                ...state,
                taskList:[...state.taskList,action.payload]
            }

        case FAVORITE_OR_NOT_FAVORITE:
            return {
                ...state,
                isFavorite:action.payload
            }
    }}

    export {TaskReducer}

    