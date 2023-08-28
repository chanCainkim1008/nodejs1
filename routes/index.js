import mongoose from "mongoose";

const connect =() =>{
    mongoose.connect(
        'mongodb+srv://sparta-user:aaaa4321@exprees-mongo.squuvbm.mongodb.net/?retryWrites=true&w=majority',
        {
            dbName: 'posts'
        }
    )
}