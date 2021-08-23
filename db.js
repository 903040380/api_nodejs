let mysql = require('mysql');
let options = {
    host:'localhost',
    user:'admin',
    password:'asdzxc',
    port:'3306',
    database:'hm_shop',
}
let conn = mysql.createConnection(options);

conn.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('连接数据库成功')
    }
});

// let strSql = "select * from  hotgoods"
// conn.query(strSql,(err,results,fields)=>{
//     console.log(err);
//     console.log(results);
//     // console.log(fields);
// })

module.exports = conn;