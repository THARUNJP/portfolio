import axios from "axios";

interface dataType{
    name:String;
    email:String;
    message:String;
}


export const messageValidate = async(name:String,email:String,message:String) =>{
const senderData:dataType = {
name:name,
email:email,
message:message
}
try{
    const response= await axios("https://portfolio-8-yz9k.onrender.com/message",{
       
method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        data:senderData
        })
        const result = response.status
        
        return result;
}
catch(err){
    console.log(err);
    
}



}
