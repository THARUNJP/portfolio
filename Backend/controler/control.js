import executeQuery from "../constant/constant.js";



async function getMessage(req,res){
    const {name,email,message}= req.body;
    try{
    if(name && email && message){
const query = await executeQuery(`INSERT INTO messages(user_name,email,message) VALUES($1,$2,$3)`,[name,email,message]);
query.rowCount > 0 ? res.status(200).send("succesful") :res.status(400).send("error")
    }
    else{
        res.status(400).send("error")
    }
    }
    catch(err){
        res.status(400).send("error")
    }


}

export default getMessage;