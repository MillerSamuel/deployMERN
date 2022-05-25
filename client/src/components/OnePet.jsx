import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import {useParams} from "react-router"
import axios from "axios"
import Form from "./Form";


const OnePet=()=>{

    const {_id}=useParams();
    const[pet,setPet]=useState({});
    const history=useHistory();


    const removePet=()=>{
        console.log("delete")
        axios.delete(`http://localhost:8000/api/deletePet/${_id}`)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>{
                console.log(err)
            })    }
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Pet/${_id}`)
            .then(res=>{
                console.log(res)
                setPet(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    return(
        <>
            <div className="d-flex justify-content-between">
                <h3 >Details about {pet.name}</h3>
                <Link to="/">Back to Home</Link>
            </div>   
                <button className="m-2" onClick={removePet}>Adopt {pet.name}</button>
            <div className="border">
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills: {pet.skill1?pet.skill1:" "}{pet.skill2?", "+pet.skill2:" "}{pet.skill3?", "+pet.skill3:" "}</p>
            </div>
        </>
    )
}





export default OnePet