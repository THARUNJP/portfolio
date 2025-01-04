import pkg from 'pg';
const { Pool } = pkg;

const DB = new Pool({
    user: 'message_box_user',
    host: 'dpg-ctse8j23esus73dph3gg-a',
    database: 'message_box',
    password: 'lRTFn3q0emG1eOzln5j5H4vCDmyM30D2',
    port: 5432,
});

async function executeQuery(query,params){

    const db = await DB.connect()
    try{
const response = await db.query(query,params);
return response;
    }
    catch(err){
console.log(err);

    }
    finally{
         db.release();
    }



}




export default executeQuery;