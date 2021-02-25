export const ADD_TASK = 'ADD_TASK'
export const AddTask = (task)=>{
    return ({
    type : ADD_TASK,
    payload : task
    })
}
export const UPDATE_TASK = 'UPDATE_TASK'
export const updateTask = (task)=>{
    return ({
    type : UPDATE_TASK,
    payload : task
    })
}
export const SEARCH_DONE = 'SEARCH_DONE'
export const searchDone = ()=>{
    return ({
    type : SEARCH_DONE
    })
}
export const SEARCH_UNDONE = 'SEARCH_UNDONE'
export const searchUndone = ()=>{
    return ({
    type : SEARCH_UNDONE
    })
}