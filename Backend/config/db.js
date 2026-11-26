import myMongo from 'mongoose'

async function connectDatabase(){

    try{  
 
        await    myMongo.connect(process.env.MONGO_URI) ;
        console.log("db connected ");
    }catch(e){
        console.log("eeror while connecting gb" ,e)
    }


} 

export default connectDatabase
