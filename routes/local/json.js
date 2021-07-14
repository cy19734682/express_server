//封装接送模块
var json = function(res, result) {
    if(result === true){
        res.json({
            code: 0,
            msg: ''
        });
    }else if(result === false){
        res.json({
            code: -1,
            msg: '操作失败'
        });
    }else {
        result["code"] = 0
        res.json(result);
    }
};
module.exports = json;