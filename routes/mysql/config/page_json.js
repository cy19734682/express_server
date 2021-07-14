//封装接送模块
var json = function(current,size,countResult,result) {
    let results = {
        code:0,
        current:current,
        size:size,
        total:countResult,
        pages:countResult && Math.ceil(countResult/size) || 0,
        data:result,
    }
    return results
};
module.exports = json;