const PetController = require("../controllers/pets.controller");

module.exports = (app) =>{
    app.get('/api/pets', PetController.getAllPets);
    app.post('/api/pets', PetController.createPet);
    app.put('/api/pets/:id', PetController.editPet);
    app.delete('/api/pets/:id', PetController.deletePet);
    app.get('/api/pets/:id', PetController.getOnePet);
}