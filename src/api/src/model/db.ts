import mysql from 'mysql';

//local mysql db connection
export const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3307,
    user     : 'root',
    password : '1234',
    database : 'sliver'
});
// connect to database
connection.connect(function(err) {
    if (err) throw err;
});
