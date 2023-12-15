import  mongoose from "mongoose"

const inventorySchema = new mongoose.Schema({
    name: {
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

export default mongoose.model("Inventory", inventorySchema);

