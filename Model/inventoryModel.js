const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        default: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    productDescription: {
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
    }
});

const InventoryModel = mongoose.model("Inventory", inventorySchema);

module.exports = {
    InventoryModel
};
