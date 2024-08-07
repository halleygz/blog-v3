import mongoose from "mongoose"

const connectMongo = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongo connection succesful')
    } catch (err) {
        console.log("couldn't connect to mongodb", err)
    }
}

export default connectMongo