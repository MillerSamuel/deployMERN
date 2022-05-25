const Pet=require("../models/pet.model");


module.exports.findAllPets=(req,res)=>{
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err=>{
            res.json({message:"something went wrong",error:err})
        })
}

module.exports.addPet=(req,res)=>{
    Pet.create(req.body)
        .then(newPet=>{
            res.json({results:newPet})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })
}

module.exports.findOnePet=(req,res)=>{
    Pet.findOne({_id: req.params.id})
        .then(Pet=>{
            res.json({results:Pet})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })
}

module.exports.findOnePetName=(req,res)=>{
    Pet.findOne({name: req.params.name})
        .then(Pet=>{
            res.json({results:Pet})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })

}

module.exports.updatePet=(req,res)=>{
    Pet.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then(updatedPet=>{
        res.json({results:updatedPet})
    })
    .catch(err=>{
        res.json({msg:"something went wrong",error:err})
    })
}

module.exports.removePet=(req,res)=>{
    Pet.deleteOne({_id:req.params.id})
    .then(deletedPet=>{
        res.json({results:deletedPet})
    })
    .catch(err=>{
        res.json({msg:"something went wrong",error:err})
    })
}