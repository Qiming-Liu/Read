//端口不能被占用
exports.SocketPort = 3001;
exports.HttpPort = 3000;

//是否哪种数据库
//1 = 无数据库,数据保存在内存
//2 = MongoDB数据库
//3 = MySQL数据库
exports.setSQL = false;

//MongoDB数据库的配置
exports.MongoDB = "mongodb://localhost:27017/read";

//mysql数据库的配置
exports.MySQL = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'seen',
    port: '3306'
}
