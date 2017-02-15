module.exports = {
    devtool:"eval-source-map",//配置生成source maps
    entry:__dirname+"/app/main.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.json$/, //正则匹配.json
                loader:"json-loader"  //json-loader
            }
        ]
    },
    devServer:{
        contentBase:"./public",//本地服务器加载的目录
        port:"3000",
        colors:true,//终端中输出结果为彩色
        inline:true,//实时刷新
        historyApiFallback:true //不跳转在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    }
}
