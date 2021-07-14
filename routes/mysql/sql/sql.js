// SQL语句封裝
var article = {
    insert:function () {
        return 'INSERT INTO article(title, author, pic,content,tag) VALUES(?,?,?,?,?)'
    },
    update:function () {
        return 'UPDATE article SET title=?, author=?, pic=?, content=?, tag=? WHERE id=?'
    },
    delete:function () {
        return 'DELETE FROM article WHERE id=?'
    },
    queryById:function () {
        return 'SELECT * FROM article WHERE id=?'
    },
    queryCount:function (param) {
        var sql = "select count(*) as total from article  WHERE  1=1 "
        var arr = [];
        if(param.title != null){
            param.title = "%"+param.title+"%";
            sql += " and title like ?";
            arr.push(param.title);
        }
        if(param.author != null){
            param.author = "%"+param.author+"%";
            sql += " and title author ?";
            arr.push(param.author);
        }
        if(param.content != null){
            param.content = "%"+param.content+"%";
            sql += " and content like ?";
            arr.push(param.content);
        }
        if(param.tag != null){
            param.tag = "%"+param.tag+"%";
            sql += " and tag like ?";
            arr.push(param.tag);
        }
        return {sql:sql,params:arr}
    },
    queryByPage:function (param) {
        var sql = "select * from article WHERE  1=1 "
        var arr = [];
        if(param.title != null){
            param.title = "%"+param.title+"%";
            sql += " and title like ?";
            arr.push(param.title);
        }
        if(param.author != null){
            param.author = "%"+param.author+"%";
            sql += " and title author ?";
            arr.push(param.author);
        }
        if(param.content != null){
            param.content = "%"+param.content+"%";
            sql += " and content like ?";
            arr.push(param.content);
        }
        if(param.tag != null){
            param.tag = "%"+param.tag+"%";
            sql += " and tag like ?";
            arr.push(param.tag);
        }
        arr.push(param.current)
        arr.push(param.size)
        sql += ' order by id desc limit ?,?'
        return {sql:sql,params:arr}
    }
};
module.exports = article;