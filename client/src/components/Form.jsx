import React from "react";
import { Link} from "react-router-dom"


const Form=(props)=>{
    return(
        
        <form className="border" onSubmit={props.submitHandler}>
            <div className="form-group m-1">
                <label htmlFor="name">Pet Name:</label>
                <input onChange={props.changeHandler} type="text" name="name" value={props.pet.name}/>
                <p className="text-danger"> {props.errors.name? props.errors.name.message:null}</p>
            </div>
            <div className="form-group">
                <label htmlFor="type">Pet Type:</label>
                <input onChange={props.changeHandler} type="text" name="type" value={props.pet.type}/>
                <p className="text-danger"> {props.errors.type? props.errors.type.message:null}</p>
            </div>
            <div className="form-group m-1">
                <label htmlFor="description">Pet Description:</label>
                <input onChange={props.changeHandler} type="text" name="description" value={props.pet.description}/>
                <p className="text-danger"> {props.errors.description? props.errors.description.message:null}</p>
            </div>
            <div className="form-group">
                <label htmlFor="skill1">Skill 1:</label>
                <input onChange={props.changeHandler} type="text" name="skill1" value={props.pet.skill1}/>
            </div>
            <div className="form-group m-1">
                <label htmlFor="skill2">Skill 2:</label>
                <input onChange={props.changeHandler} type="text" name="skill2" value={props.pet.skill2}/>
            </div>
            <div className="form-group">
                <label htmlFor="skill3">Skill3:</label>
                <input onChange={props.changeHandler} type="text" name="skill3" value={props.pet.skill3}/>
            </div>
                <input className="m-2 btn-primary" type="submit" value="Submit" />
        </form>
    )
}


export default Form