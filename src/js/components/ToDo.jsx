import React, { useState } from "react"

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
								setTodos([...todos,e.target.value])
								e.target.value = ''
							}
						}}/>
					</div>
					<div className="mt-0">				
						{todos.map((task,index)=>{
							return <p className="Task border mb-0 py-2 ps-2 d-flex" key={index}>{task}<span className="invisibleCloseX ms-auto me-2 opacity-50 " onClick={()=>{
								setTodos(todos.filter((element,i) => i !== index))
							}}> X</span></p>
						})}
					</div>
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