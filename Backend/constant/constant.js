import pkg from 'pg';
const { Pool } = pkg;

const DB = new Pool({
    user: 'Tharun',
    host: 'localhost',
    database: 'msg-box',
    password: 'Tharun10+',
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