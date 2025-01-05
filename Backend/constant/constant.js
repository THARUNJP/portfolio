import pkg from 'pg';
const { Pool } = pkg;

const DB = new Pool({
    user: 'tharun',
    host: 'dpg-ctt7uu3v2p9s738g8jo0-a',
    database: 'box_q5i7',
    password: 'Uessw1iGytQ4dgfGlIyo6bCPKDxTAQEt',
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