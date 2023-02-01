import mongoose from 'mongoose'



const dbConect = async (url)=>{
    console.log(url)
    if(process.env.URL_DB){
        await mongoose.connect(url).then(()=>{
            console.log("conectado ao banco")
        })
    }
}


export {dbConect}
