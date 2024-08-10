import mongoose from "mongoose"

const connectMongo = async () =>{
    const uri = process.env.MONGODB_URI
    try {
        await mongoose.connect(uri)
        console.log('mongo connection succesful')
    } catch (err) {
        console.log("couldn't connect to mongodb", err)
    }
}

export default connectMongo