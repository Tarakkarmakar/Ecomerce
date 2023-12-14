const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        data:Buffer,
        contentType:String,
    },
    slug:{
        type : String,
        required:true,
    },
    shipping:{
        type:Boolean,
    },
});

const InventoryModel = mongoose.model("Inventory", inventorySchema);

module.exports = {
    InventoryModel
};
