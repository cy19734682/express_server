/*
    数据增删改查模块封装
    req.query 解析GET请求中的参数 包含在路由中每个查询字符串参数属性的对象，如果没有则为{}
    req.params 包含映射到指定的路线“参数”属性的对象,如果有route/user/：name，那么“name”属性可作为req.params.name
    req.body通常用来解析POST请求中的数据
     +req.query.id 可以将id转为整数
 */
// 引入mysql连接配置
var mysqlDb = require('../config/mysql_db');
// 引入SQL模块
var sql = require('../sql/sql');
// 引入json模块
var pageJson = require('../config/page_json');
// 使用连接池，提升性能
var handelData = {
    add: function(req, res, next) {//添加
        var title = req.body.title;
        var author = req.body.author;
        var pic = req.body.pic;
        var content = req.body.content;
        var tag = req.body.tag;
        mysqlDb.query({sql:sql.insert(),sqlParams:[title,author,pic,content,tag]},function (result) {
            res.json(result);
        })
    },
    delete: function(req, res, next) {//删除
        var id = +req.params.id;
        mysqlDb.query({sql:sql.delete(),sqlParams:id},function (result) {
            res.json(result);
        })
    },
    update: function(req, res, next) {//更新
        var id = +req.params.id;
        var title = req.body.title;
        var author = req.body.author;
        var pic = req.body.pic;
        var content = req.body.content;
        var tag = req.body.tag;
        mysqlDb.query({sql:sql.update(),sqlParams:[title,author,pic,content,tag,id]},function (result) {
            res.json(result);
        })
    },
    queryById: function(req, res, next) {//根据ID查询
        var id = +req.params.id;
        mysqlDb.query({sql:sql.queryById(),sqlParams:id},function (result) {
            res.json(result);
        })
    },
    queryByPage: function(req, res, next) {//分页查询
        var current = parseInt(req.query.current) || 1//当前的num
        var size = parseInt(req.query.size) || 10  //当前页的数量
        var title = req.query.title;
        var author = req.query.author;
        var content = req.query.content;
        var tag = req.query.tag;
        var param = {
            title:title,
            author:author,
            content:content,
            tag:tag,
            current:((current) - 1) * size,
            size:size
        }
        var pageCountDao = sql.queryCount(param)
        var pageDao = sql.queryByPage(param)
        mysqlDb.query({sql:pageDao.sql,sqlParams:pageDao.params},function (result) {//分页数据
            if(result.code === 0){
                mysqlDb.query({sql:pageCountDao.sql,sqlParams:pageCountDao.params},function (countResult) {//总数
                    if(countResult.code === 0){
                        res.json(pageJson(current,size,countResult.data[0]['total'],result.data))
                    }else{
                        res.json(countResult);
                    }
                })
            }else{
                res.json(result);
            }
        })
    }
};
module.exports = handelData;