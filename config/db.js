import mongoose from 'mongoose';
import  Colors  from 'colors';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MANGO_URL);
        console.log(`Connect To Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mongoose ${error}`.bgRed.White);
    }
};

export default connectDB;