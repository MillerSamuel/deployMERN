import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

const HomePage = () => {

    const [allPets, setAllPets] = useState([])
    const [searchTerm,setSearchTerm]=useState("")


    useEffect(() => {
        axios.get("http://localhost:8000/api/allPets")
            .then(res => {
                console.log(res)
                setAllPets(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <div className="d-flex justify-content-between">
                <h3 >These pets are looking for a good home</h3>
                <Link to="/pets/new">Add a Pet to the shelter</Link>
            </div>
            <p>Search a Pet:<input onChange={(e)=>setSearchTerm(e.target.value)} type="text" name="" /> </p> 
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                {
                allPets.filter((pet)=>{
                    return pet.name.toLowerCase().includes(searchTerm)
                }).map((pet,i)=>{
                        return(
                    <tr>
                        <th scope="row">{pet.name}</th>
                        <th scope="row">{pet.type}</th>
                        <th scope="row"><button><Link to={`pets/${pet._id}/edit`}>Edit</Link></button>  <button><Link to={`pets/${pet._id}`}>Details</Link></button></th>
                    </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default HomePage