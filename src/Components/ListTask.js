import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Task from './Task'
import {Button, Container,Row} from 'react-bootstrap'
import {Input} from 'reactstrap'
import { AddTask, searchDone, searchTask, searchUndone } from '../redux/actions'
const ListTask = ()=> {
    const [completed, setCompleted] = useState(false)
    const [uncompleted, setUncompleted] = useState(false)

  let ListTask =  useSelector(state=>state);
  console.log(ListTask)

    let dispatch = useDispatch();
    const [newDescription, setDescription] = useState('')
    const handleDescription = (e)=>{
        setDescription(e.target.value)
    }
    let newTask 

  


   const handleUncompleted = ()=>{
   
        dispatch(searchUndone())
    

   }

   const handleCompleted = () =>{
    dispatch(searchDone())
   }
console.log(ListTask)

    return(
        <>
        <Container height = "500">
           <Row>
            <Input float = "left" placeHolder = "Add a new Task" onChange = {handleDescription}  type = "text"></Input> 
            <Button color = "primary" onClick = {()=>{
                if(ListTask.list.length) { newTask = {
                    id : ListTask.list.length + 1,
                    description : newDescription,
                    isDone : false
                }}
               dispatch(AddTask(newTask))}} float = "left">Add</Button>
            
            <div style = {{marginLeft : "200"}}><label>Completed</label><Input  onChange = {
            handleCompleted}  type = "checkbox"></Input> 
            <label>Not Yet</label><Input  onChange = {()=> handleUncompleted}  type = "checkbox"></Input> 
            </div>
           </Row> 
        </Container>
        <Container>
            <Row xs = "3">
                {ListTask.list.map(task => {return <Task id = {task.id} description = {task.description} status = {task.isDone}></Task>})  
} 
        </Row>
        </Container>
        </>
    )
}
export default ListTask