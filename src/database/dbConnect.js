import mongoose from 'mongoose'



const dbConect = async (url)=>{
    mongoose.set('strictQuery', true)
    if(process.env.URL_DB){
        await mongoose.connect(url)
    }
}


export {dbConect}
