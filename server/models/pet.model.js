const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters long"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },
    petDescription: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters long"]
    },
    petSkill1: {type: String},
    petSkill2: {type: String},
    petSkill3: {type: String}
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);