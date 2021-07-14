var fs = require('fs');
var dataBase = require('./database');
var json = require('./json');
var articleData = require('./data/articleData')
dataBase._save("article",articleData.data)//初始化添加数据
var handelData = {
  getBaseData: function(req, res, next) {//读取本地文件
    var path = req.query.path
    fs.readFile(path,'utf-8',(err,ret)=>{
      if(err){
        res.json({code:-1,msg:"read file error"+err});
      }else{
        var data = JSON.parse(ret);
        res.json({code:0,data:data});
      }
    })
  },
  add: function(req, res, next) {//添加
    var r = dataBase._save("article",[req.body])
    json(res,r)
  },
  delete: function(req, res, next) {//删除
    var r = dataBase._delete("article",e => Number(e.id) === Number(req.params.id))
    json(res,r)
  },
  update: function(req, res, next) {//更新
    var r = dataBase._edit("article", Object.assign(req.body,req.params))
    json(res,r)
  },
  queryById: function(req, res, next) {//根据ID查询
    var r = dataBase._get("article",1,1,e => Number(e.id) === Number(req.params.id))
    json(res,r)
  },
  queryByPage: function(req, res, next) {//分页查询
    var current = parseInt(req.query.current) || 1//当前的num
    var size = parseInt(req.query.size) || 10  //当前页的数量
    var title = req.query.title || ""
    var author = req.query.author || ""
    var content = req.query.content || ""
    var tag = req.query.tag || ""
    var r = dataBase._get("article",current,size,e =>{
      return e.title.indexOf(title) > -1 &&  e.author.indexOf(author) > -1 &&  e.content.indexOf(content) > -1 &&  e.tag.indexOf(tag) > -1
    })
    json(res,r)
  }
}
module.exports = handelData;