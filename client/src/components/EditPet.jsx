import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {useParams} from "react-router"
import axios from "axios"
import Form from "./Form";


const EditPet=()=>{

    const {_id}=useParams();
    const [name,setName]=useState("")
    const [pet,setPet]=useState({});
    const [errors,setErrors]=useState([]);
    const history=useHistory()
    let alreadyExist=false
    const [existMessage,setExistMessage]=useState("")

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Pet/${_id}`)
            .then(res=>{
                console.log(res)
                setPet(res.data.results)
                setName(res.data.results.name)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:8000/api/petbyname/${pet.name}`)
            .then(res=>{
                console.log(res)
                if(res.data.results){
                    alreadyExist=true
                }
            })
            .then(()=>{
                if(alreadyExist==false){
                    axios.put(`http://localhost:8000/api/updatePet/${_id}`,pet)
                        .then(res=>{
                            console.log(res)
                            if(res.data.error){
                                setErrors(res.data.error.errors)
                            }
                            else{
                                history.push("/")
                            }
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                }
                else{
                    setExistMessage("Name is already being used")
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const changeHandler=(e)=>{
        setPet({...pet,[e.target.name]:e.target.value})
    }


    return(
        <>
            <div className="d-flex justify-content-between">
                <h3 >Edit {name}</h3>
                <Link to="/">Back to Home</Link>
            </div>
            <h2 className="text-danger">{existMessage}</h2>
            <Form errors={errors} pet={pet} changeHandler={changeHandler} submitHandler={submitHandler}></Form>      
        </>
    )
}


export default EditPet