import React, { useState } from "react"
import ParrafConstruct from "./ParrafConstruct"

function ToDo(){
	
	const [todos,setTodos] = useState([])
	
	return(
		<div className="d-flex align-items-center justify-content-center vh-100">
			<div className="box-size vh-80">
				<div className="text-center">
					<h2>ToDos</h2>
				</div>
				<form className="border border-black bg-light formulario">
					<div>
						<label className="form-label d-block text-center mt-0" htmlFor="catchInput"></label>
						<input type="text" className="form-control w-100 border-0 mb-2 text-center" id="catchInput" placeholder="Type your task" onKeyDown={(e)=>{
							if(e.key === 'Enter'){
								e.preventDefault()
								setTodos([...todos,{tarea :e.target.value, finish:'✖️'}])
								e.target.value = ''
							}
						}}/>
					</div>				
					<ParrafConstruct todos={todos} setTodos={setTodos}/>
					<div className="text-center">
						<button type="button" className="btn btn-danger mt-2 mb-2" onClick={()=>{
							setTodos([])
						}}>Reset Tasks</button>
					</div>
				</form>	
			</div>
		</div>
	)
}

export default ToDo