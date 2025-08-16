const sql = require('../model/db.model.js')
const singupModel = (name,email,password,profile = null, callback)=> {
    const query = 'insert into users(name,email,password,profile) values(?,?,?,?)';
    sql.query(query,[name,email,password,profile] , (err, data)=> {
        if(err)callback(err,null)
        else callback(null,{name,email,profile})
    })
}
const loginModel = (email,callback)=> {
    const query = 'select * from users as u where u.email=?'
    sql.query(query,email,(err,data)=> {
        if(err)callback(err,null)
        else callback(null,data[0])
    })
}
module.exports = {singupModel,loginModel};