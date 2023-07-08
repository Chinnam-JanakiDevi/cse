const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun() {
    let con;
    try {
        con = await oracledb.getConnection({
            user: "system",
            password: "manager",
            connectString: "localhost:/orcl"
        });
        console.log("succesfully connected to oracle");
        const data = await con.execute(
            'SELECT * FROM sample',
        );
        console.log(data.rows);
    } catch (err) {
        console.error(err);
    }
}
fun();

console.log("pushing to git");