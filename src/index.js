import dotenv from 'dotenv'
import connectDB from './db/index.js' 

dotenv.config({
    path:"./env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    }
})
.catch((err)=>{
    console.log("MONGO db connection failed !!",err)

})


// import mongoose from "mongoose";
// const db = "mongodb+srv://ass:ass@backendchaiaurcode.gvyxr7u.mongodb.net/?retryWrites=true&w=majority"
// const dbCall = async ()=> {
//     try {
//         const dbI = await mongoose.connect(db);
//         console.log("db callled",dbI.connection.host);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }
// dbCall();



// import mongoose from "mongoose";
// import {DB_NAME} from './constants'
// import express from "express";
// const app = express()

// ( async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error", (error)=>{
//     console.log("ERRR:",error);
//     throw error
// })
// app.listen(process.env.PORT, ()=>{
//     console.log(`App is Listening on port ${process.env.PORT}`);
// })
//     } catch (error) {
//         console.log("Error: ",error)
//         throw error
//     }
// }) ()