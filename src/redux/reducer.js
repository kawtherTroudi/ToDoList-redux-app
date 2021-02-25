import {ADD_TASK, SEARCH_DONE, SEARCH_TASK, SEARCH_UNDONE, UPDATE_TASK} from './actions';
import {tasksList} from './states';

export let reducer = (state= tasksList, action)=>{
    switch (action.type){
        case ADD_TASK :
           let Newstate = [...state.list, action.payload]
            return( {list:Newstate, isLoading :true})

        case UPDATE_TASK :
            let index = state.list.findIndex(item => item.id === action.payload.id)
            console.log(action.payload.id+"id")
            console.log(JSON.stringify(state[index])+"element")
            let newState = state.list.map(el => {
                if (el.id == action.payload.id) {
                    return {...action.payload}
                }
                else return el
            })
            return ({list:newState,isLoading:false})

        case SEARCH_DONE :
          return state.filter(task=>task.isDone == true) 
          
        case SEARCH_UNDONE :
        return state.filter(task=>task.isDone == false)
             
            default :
            break ;
    }
    return state
}