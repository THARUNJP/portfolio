import executeQuery from "../constant/constant.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") }); 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tharunroshini71@gmail.com',
      pass: process.env.email_pass
    }
  });



async function getMessage(req,res){ 
    const {name,email,message}= req.body;
    console.log(process.env.email_pass,"hhi");

    const mailOptions = {
        from:  'tharunroshini71@gmail.com',
        to: 'tharunroshini71@gmail.com',
        subject: `name:${name},email:${email}`,
        text: message
      };

      try{
        if(name && email && message){
    transporter.sendMail(mailOptions,(err,info)=>{
        console.log(err);
        
     err ? res.status(400).send("error"):res.status(200).send("succesful")
    })
        }
        else{
            res.status(400).send("error")
        }
        }
        catch(err){
            res.status(400).send("error1")
        }
    
   

}

export default getMessage;
// try{
//     if(name && email && message){
// const query = await executeQuery(`INSERT INTO messages(user_name,email,message) VALUES($1,$2,$3)`,[name,email,message]);
// query.rowCount > 0 ? res.status(200).send("succesful") :res.status(400).send("error")
//     }
//     else{
//         res.status(400).send("error")
//     }
//     }
//     catch(err){
//         res.status(400).send("error1")
//     }
