  

   import mongoose from "mongoose";

   const connectDB = async()=>{ 
    try{
        const connection = await mongoose.connect(process.env.mongo_db)
        console.log('Connect to Db')

    }catch(err){
        console.log(err)
    }
   }

   export default connectDB