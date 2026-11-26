import myMongo  from 'mongoose'



function  connectDb(){

    try{
        await myMongo.connect('')
    }catch(e){
        console.log("error in the db connection" +e)
    }

}