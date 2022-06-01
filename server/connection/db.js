


import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@news-shard-00-00.j1b2n.mongodb.net:27017,news-shard-00-01.j1b2n.mongodb.net:27017,news-shard-00-02.j1b2n.mongodb.net:27017/?ssl=true&replicaSet=atlas-wsbqun-shard-0&authSource=admin&retryWrites=true&w=majority`

        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
