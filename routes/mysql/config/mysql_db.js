// MySQL数据库联接配置封裝
var mysqlconfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'test_cy',
  port: 3306,
  multipleStatements: true
};
var mysql = require('mysql');
// 引入连接池配置
var poolextend = require('../config/poolextend');
// 使用连接池，提升性能
var pool = mysql.createPool(poolextend({}, mysqlconfig));
let db = {};
db.query = function (req, callback) {
  if (!req.sql) {
    callback({
      code: -1,
      msg: "SQL为空"
    });
    return;
  }
  pool.getConnection(function (err, connection) {
    connection.query(req.sql, req.sqlParams, function (err, result) {
      if (err) {
        callback({
          code: -1,
          msg: "服务异常:"+err
        });
      }
      else {
        let results;
        if(result.hasOwnProperty("affectedRows")){
          if(result.affectedRows <= 0){
            results = {
              code: -1,
              msg: "数据库操作失败"
            };
          }else{
            results = {
              code: 0,
              data: ""
            };
          }
        }else{
          results = {
            code : 0,
            data:result
          }
        }
        callback(results)
      }
      // 释放连接
      connection.release();
    });
  });
}
module.exports = db;