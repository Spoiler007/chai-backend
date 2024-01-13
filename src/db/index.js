import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB =  async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
        
    }
}

export default connectDB


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
// export default dbCall;