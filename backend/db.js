const mongoose = require('mongoose');

const mongoURI = process.env.MONGOURI;

const connectToMongo = async () => {
    try {
        // mongoose.set('strictQuery', false)
        console.log(process.env.MONGOURI)
        mongoose.connect(process.env.MONGOURI) 
        console.log('Mongo atlas connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}
module.exports = connectToMongo;




















// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(process.env.MONGO_URI) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// mongoose.connect(mongoURI,  (err) =>{
    //     if (err) console.log(`unable to connect to the server :${err}`);
    //     else
    //         console.log('MongoDB is connected');
    // })

    // mongoose
    // .connect(mongoURI)
    // .catch (error => console.log(error));























// 'mongodb://127.0.0.1:27017/test'