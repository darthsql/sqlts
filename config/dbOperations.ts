import { cnx } from './dbconfig'
const myDB = cnx;
import dbProvider from 'mssql';
import { sql } from 'constants';

function getNames () {
    try {
        const pool = await sql.connect(myDB);
        const listNames = await pool.request().query("SELECT * FROM SampleData");
        return listNames.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}