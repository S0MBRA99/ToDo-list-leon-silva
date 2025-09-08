import { useState } from "react"




const actionCompleted = '✔️'
const actionNotCompleted = '✖️'

function ParrafConstruct({todos,setTodos}){

    const [action,setAction] = useState(actionNotCompleted)

    return(
        <div className="mt-0">  
            {todos.map((task,index)=>{
                if(task.tarea.length < 48){
                    return (
                        <p className="Task border mb-0 py-2 ps-2 d-flex" key={index}>{task.tarea}
                        <button className="border-1 ms-auto" type="button" key={index} onClick={()=>{
                            let changesTodo = [...todos]
                            task.finish === '✖️'? changesTodo[index].finish = actionCompleted : changesTodo[index].finish = actionNotCompleted
                            setTodos(changesTodo)
                        }}>{task.finish}</button>
                        <span className="invisibleCloseX ms-auto me-2 ms-4 opacity-50" type="button" onClick={()=>{
                            setTodos(todos.filter((element,i) => i !== index))
                    }}> 🗑️</span></p>
                )}
                
                else if(task.tarea.length > 48){
                    return (
                        <p className="Task border mb-0 py-2 ps-2 d-flex overflow-scroll" key={index}>{task.tarea}
                        <button className="border-1 ms-auto" type="button" key={index} onClick={()=>{
                            let changesTodo = [...todos]
                            task.finish === '✖️'? changesTodo[index].finish = actionCompleted : changesTodo[index].finish = actionNotCompleted
                            setTodos(changesTodo)
                        }}>{task.finish}</button>
                        <span className="invisibleCloseX ms-auto ms-4 me-2 opacity-50" type="button" onClick={()=>{
                            setTodos(todos.filter((element,i) => i !== index))
                    }}> 🗑️</span></p>
                )}
            })}
        </div>
    )}

export default ParrafConstruct