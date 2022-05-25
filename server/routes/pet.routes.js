const PetController=require("../controllers/pet.controller");

module.exports=(app)=>{
    app.get("/api/allPets",PetController.findAllPets)
    app.post("/api/addPet",PetController.addPet)
    app.get("/api/Pet/:id",PetController.findOnePet)
    app.get("/api/petbyname/:name",PetController.findOnePetName)
    app.put("/api/updatePet/:id",PetController.updatePet)
    app.delete("/api/deletePet/:id",PetController.removePet) 
}