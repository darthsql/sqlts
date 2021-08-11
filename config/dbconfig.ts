import * as sql from "mssql"

export const cnx = {
    server : "localhost",
    database : "Test",
    options: {
        trustedConnection: true,
        enableArithAort: true
    },
    port: "1433"
}

export const connectToSqlServer = (async (): Promise<void> => {
    try {
      const pool = new sql.ConnectionPool(cnx);
      pool.connect().then(() => {
          const request = new sql.Request(pool);
          const result = await request.query(`select * from mock_people`);
          console.dir(result);
      });
    } catch (err) {
      console.error(err)
    }
  })()